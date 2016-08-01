/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable} from "@angular/core";
import {ApiGateway} from "../../framework";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {User} from "./user";
import {Http, Response} from "@angular/http";
import {apiBaseUrl, apiClientId} from "../../../../custom/globals";
import {ApiContentType} from "../../framework/service/ApiGateway";
import {CookieService} from "angular2-cookie/core";


@Injectable()
export class SignInService extends ApiGateway {

    CurrentUser_Info:string = 'oe.users.currentUserInfo';
    CurrentUser_Roles:string = 'oe.roles.currentUserRoles';

    url(relativePath:string):string {
        if (!relativePath.startsWith('/'))
            relativePath = '/' + relativePath;
        return apiBaseUrl + relativePath;
    }

    public get loggedInUser():User {
        if (this.UserTimeStamp) {
            var user = JSON.parse(localStorage.getItem(this.CurrentUser_Info));
            if (user && user.id > 0)
                return user;
        }
        return null;
    }

    public set loggedInUser(value:User) {
        localStorage.setItem(this.CurrentUser_Info, JSON.stringify(value));
    }

    public get loggedInUserRoles():string[] {
        return JSON.parse(localStorage.getItem(this.CurrentUser_Roles));
    }

    public set loggedInUserRoles(value:string[]) {
        localStorage.setItem(this.CurrentUser_Roles, JSON.stringify(value));
    }

    public onUserAuthenticated$:EventEmitter<User>;
    public onUserAuthorized$:EventEmitter<string>;

    constructor(http:Http, cookies:CookieService) {
        super(http, cookies);

        this.loggedInUser = null;
        this.loggedInUserRoles = [];

        this.onUserAuthenticated$ = new EventEmitter<User>();
        this.onUserAuthorized$ = new EventEmitter<string>();
    }


    Authenticate(emitEvent:boolean = false):Promise<boolean> {

        return this.post(this.url('/users/myinfo'), {}, {}).toPromise().then((result)=> {
            if (result && result.id > 0) {
                this.loggedInUser = result;
            }
            else
                this.loggedInUser = null;

            if (emitEvent)
                this.onUserAuthenticated$.emit(result);
            return (result && result.id > 0);
        });

    }

    Authorize(emailOrUsername:string, password:string, emitEvent:boolean = false):Promise<boolean> {
        return this.SignIn(emailOrUsername, password, emitEvent);
    }

    SignIn(emailOrUsername:string, password:string, emitEvent:boolean = true):Promise<boolean> {

        return this.post(this.url('/token'), {
            'grant_type': 'password',
            'scope': '*',
            'client_id': apiClientId,
            'username': emailOrUsername,
            'password': password
        }, {}, {}, ApiContentType.WwwForm).toPromise().then((result)=> {
            if (result && result.access_token) {
                this.UserAuthToken = result.access_token;
                this.Authenticate(emitEvent);
                if (emitEvent) {
                    this.onUserAuthorized$.emit(result.access_token);
                }
                this.UserTimeStamp = new Date();
                return true;
            }
            else {
                this.UserTimeStamp = null;
                return false;
            }
        }).catch((ex)=> {
            if (ex && ex.error) {
                if (ex.error == "invalid_grant" ||
                    ex.error.indexOf("invalid") >= 0) {
                    this.UserTimeStamp = null;
                    return false;
                }
            }
            Observable.throw(ex);
        });

    }

}
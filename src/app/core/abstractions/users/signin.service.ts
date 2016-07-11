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


@Injectable()
export class SignInService extends ApiGateway {

    CurrentUser_Info:string = 'oe.users.currentUserInfo';
    CurrentUser_Roles:string = 'oe.roles.currentUserRoles';
    UserSignIn_KeepSignedIn:string = 'oe.users.currentUserKeepSignedIn';
    CurrentUser_AuthToken:string = 'oe.users.currentUserAuthToken';

    url(relativePath:string):string {
        if (!relativePath.startsWith('/'))
            relativePath = '/' + relativePath;
        return apiBaseUrl + relativePath;
    }

    public get loggedInUser():User {
        return JSON.parse(localStorage.getItem(this.CurrentUser_Info));
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

    public get isKeptSignedIn():boolean {
        return JSON.parse(localStorage.getItem(this.UserSignIn_KeepSignedIn));
    }

    public set isKeptSignedIn(value:boolean) {
        localStorage.setItem(this.UserSignIn_KeepSignedIn, JSON.stringify(value));
    }

    public get UserAuthToken():string {
        return localStorage.getItem(this.CurrentUser_AuthToken);
    }

    public set UserAuthToken(value:string) {
        localStorage.setItem(this.CurrentUser_AuthToken, value);
    }

    public onUserAuthenticated$:EventEmitter<User>;
    public onUserAuthorized$:EventEmitter<string>;

    constructor(http:Http) {
        super(http);
        this.loggedInUser = null;
        this.loggedInUserRoles = [];

        this.Authenticate(false);

        this.onUserAuthenticated$ = new EventEmitter<User>();
        this.onUserAuthorized$ = new EventEmitter<string>();
    }


    Authenticate(emitEvent:boolean = false):Promise<boolean> {

        var result = true;

        var userResult = new User();
        this.loggedInUser = userResult;
        if (emitEvent) {
            this.onUserAuthenticated$.emit(userResult);
        }
        return new BehaviorSubject(result).toPromise();
    }

    Authorize(emailOrUsername:string, password:string, emitEvent:boolean = false):Promise<boolean> {
        return this.SignIn(emailOrUsername, password, this.isKeptSignedIn, emitEvent);
    }

    SignIn(emailOrUsername:string, password:string, keepSignedIn:boolean = false, emitEvent:boolean = true):Promise<boolean> {

        return this.post(this.url('/token'), {
            'grant_type': 'password',
            'scope': '*',
            'client_id': apiClientId,
            'username': emailOrUsername,
            'password': password
        }, {}, {}, ApiContentType.WwwForm).toPromise().then((result)=> {
            if (result && result.access_token) {
                this.isKeptSignedIn = keepSignedIn;
                this.UserAuthToken = result.access_token;
                this.Authenticate(emitEvent);
                if (emitEvent) {
                    this.onUserAuthorized$.emit(result.access_token);
                }

                return true;
            }
            else
                return false;
        }).catch((ex)=> {
            if (ex && ex.error) {
                if (ex.error == "invalid_grant" ||
                    ex.error.indexOf("invalid") >= 0)
                    return false;
            }
            Observable.throw(ex);
        });

    }

    mapAuth(response:Response):boolean {
        var result = response;
        console.log(result);
        return result != null && result != undefined;
    }
}
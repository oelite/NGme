/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable, EventEmitter, Inject} from "@angular/core";
import {ApiGateway} from "../../framework";
import {User} from "./user";
import {Http, Response} from "@angular/http";
import {apiBaseUrl, apiClientId} from "../../../../custom/globals";
import {ApiContentType} from "../../framework/service/ApiGateway";
import {CookieService} from "angular2-cookie/core";


@Injectable()
export class SignInService extends ApiGateway {

    CurrentUser_Info: string = 'oe.users.currentUserInfo';
    CurrentUser_Roles: string = 'oe.roles.currentUserRoles';

    url(relativePath: string): string {
        if (!relativePath.startsWith('/'))
            relativePath = '/' + relativePath;
        return apiBaseUrl + relativePath;
    }

    public get loggedInUser(): User {
        if (this.UserTimeStamp) {
            var userInfo = localStorage.getItem(this.CurrentUser_Info);
            var user = JSON.parse(userInfo);
            if (user && user.id > 0)
                return user;
        }
        return null;
    }

    public set loggedInUser(value: User) {
        localStorage.setItem(this.CurrentUser_Info, JSON.stringify(value));
    }

    public get loggedInUserRoles(): string[] {
        return JSON.parse(localStorage.getItem(this.CurrentUser_Roles));
    }

    public set loggedInUserRoles(value: string[]) {
        localStorage.setItem(this.CurrentUser_Roles, JSON.stringify(value));
    }

    public onUserAuthenticated$: EventEmitter<User>;
    public onUserAuthorized$: EventEmitter<string>;

    constructor(http: Http, cookies: CookieService) {
        super(http, cookies);

        console.log(this.cookies);
        console.log('constructor of signin service');


        this.loggedInUser = null;
        this.loggedInUserRoles = [];

        this.onUserAuthenticated$ = new EventEmitter<User>();
        this.onUserAuthorized$ = new EventEmitter<string>();
    }


    Authenticate(emitEvent: boolean = false): Promise<boolean> {
        return this.post(this.url('/users/myinfo'), {}, {}).map(result=> {
            if (result && result.id > 0) {
                this.loggedInUser = result;
            }
            else {
                console.log('user info not returned from server, local data will now be erased.');
                this.loggedInUser = null;
            }

            if (emitEvent)
                this.onUserAuthenticated$.emit(result);
            return result && result.id > 0;
        }).toPromise().catch(ex=> {
            console.log(ex);
            return Promise.resolve(false);
        });
    }

    Authorize(emailOrUsername: string, password: string, emitEvent: boolean = false): Promise<boolean> {
        return this.SignIn(emailOrUsername, password, emitEvent);
    }

    SignIn(emailOrUsername: string, password: string, emitEvent: boolean = true): Promise<boolean> {

        return this.post(this.url('/token'), {
            'grant_type': 'password',
            'scope': '*',
            'client_id': apiClientId,
            'username': emailOrUsername,
            'password': password
        }, {}, {}, ApiContentType.WwwForm).map(result=> {
            if (result && result.access_token) {
                this.UserAuthToken = result.access_token;
                this.UserTimeStamp = new Date();
                return this.Authenticate(emitEvent).then(authResult=> {
                    if (emitEvent) {
                        this.onUserAuthorized$.emit(result.access_token);
                    }
                    return authResult;
                });
            }
            else {
                this.UserTimeStamp = null;
                return false;
            }

        }).toPromise().catch(ex=> {
            console.log(ex);
            return Promise.resolve(false);
        });

    }

}
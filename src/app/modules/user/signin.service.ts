/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable, EventEmitter} from "@angular/core";
import {User} from "./user";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {ApiGateway, ApiContentType} from "../../core/api/http/ApiGateway";
import {OEConfig} from "../../core/oeconfig.service";
import {Observable, BehaviorSubject} from "rxjs";


@Injectable()
export class SignInService extends ApiGateway {

    CurrentUser_Info: string = 'oe.users.currentUserInfo';
    CurrentUser_Roles: string = 'oe.roles.currentUserRoles';

    url(relativePath: string): string {
        if (!(relativePath.indexOf('/') === 0))
            relativePath = '/' + relativePath;
        return this.oeConfig.apiBaseUrl + relativePath;
    }

    public get loggedInUser(): User {
        if (this.UserTimeStamp) {
            var userInfo = localStorage.getItem(this.CurrentUser_Info);
            console.log(userInfo);
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

    constructor(protected oeConfig: OEConfig, http: Http, cookies: CookieService) {
        super(http, cookies);

        this.onUserAuthenticated$ = new EventEmitter<User>();
        this.onUserAuthorized$ = new EventEmitter<string>();
    }


    Authenticate(emitEvent: boolean = false): Observable<boolean> {
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
        }).catch(ex=> {
            console.log(ex);
            return new BehaviorSubject(false);
        });
    }

    Authorize(emailOrUsername: string, password: string, emitEvent: boolean = false): Observable<boolean> {
        return this.SignIn(emailOrUsername, password, emitEvent);
    }

    SignIn(emailOrUsername: string, password: string, emitEvent: boolean = true): Observable<boolean> {

        return this.post(this.url('/token'), {
            'grant_type': 'password',
            'scope': '*',
            'client_id': this.oeConfig.apiClientId,
            'username': emailOrUsername,
            'password': password
        }, {}, {}, ApiContentType.WwwForm).map(result=> {
            if (result && result.access_token) {
                this.UserAuthToken = result.access_token;
                this.UserTimeStamp = new Date();
                return this.Authenticate(emitEvent).toPromise().then(authResult=> {
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

        }).catch(ex=> {
            console.log(ex);
            return new BehaviorSubject(false);
        });

    }

}
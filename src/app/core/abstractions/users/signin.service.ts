/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable} from "@angular/core";
import {ApiGateway} from "../../framework/service/ApiGateway";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {User} from "./user";
import {Http} from "@angular/http";


@Injectable()
export class SignInService extends ApiGateway {

    public get loggedInUser():User {
        return JSON.parse(localStorage.getItem('oe.users.currentUser'));
    }

    public set loggedInUser(value:User) {
        localStorage.setItem('oe.users.currentUser', JSON.stringify(value));
    }

    public get loggedInUserRoles():string[] {
        return JSON.parse(localStorage.getItem('oe.roles.currentUserRoles'));
    }

    public set loggedInUserRoles(value:string[]) {
        localStorage.setItem('oe.roles.currentUserRoles', JSON.stringify(value));
    }

    public onUserAuthenticated$:EventEmitter<User>;
    public onUserAuthorized$:EventEmitter<User>;

    constructor(http:Http) {
        super(http);
        this.loggedInUser = null;
        this.loggedInUserRoles = [];

        this.Authenticate(false);

        this.onUserAuthenticated$ = new EventEmitter<User>();
        this.onUserAuthorized$ = new EventEmitter<User>();
    }


    isAuthenticated():Observable<boolean> {
        return new BehaviorSubject(false).asObservable();
    }

    SignIn(username:string, password:string) {

    }

    Authenticate(emitEvent:boolean = false):Observable<boolean> {
        var result = true;

        var userResult = new User();
        this.loggedInUser = userResult;
        if (emitEvent) {
            this.onUserAuthenticated$.emit(userResult);
        }
        return new BehaviorSubject(result).asObservable();
    }

    Authorize(username:string, password:string, emitEvent:boolean = false):Observable<boolean> {
        var userResult = new User();
        this.loggedInUser = userResult;
        if (emitEvent) {
            this.onUserAuthorized$.emit(userResult);
        }
        return new BehaviorSubject(userResult && userResult.id > 0).asObservable();
    }
}
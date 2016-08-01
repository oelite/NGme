/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable} from "@angular/core";
import {ApiGateway} from "../../framework";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import {User} from "./user";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/services/cookies.service";


@Injectable()
export class UserService extends ApiGateway {
    constructor(http: Http, cookies: CookieService) {
        super(http, cookies);
    }

    getUser(id: number): Observable<User> {
        return null;
    }

    getCurrentUser(): Observable<User> {
        return new BehaviorSubject(<User>{
            userName: 'mleader1',
            firstName: 'Lida',
            lastName: 'Weng'
        });
    }
}
/**
 * Created by mleader1 on 29/06/2016.
 */


import {Injectable} from "@angular/core";
import {ApiGateway} from "../../framework/service/ApiGateway";
import {Observable, BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class SignInService extends ApiGateway {
    isAuthenticated():Observable<boolean> {
        return new BehaviorSubject(false).asObservable();
    }
}
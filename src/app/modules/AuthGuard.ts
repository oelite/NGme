/**
 * Created by mleader1 on 20/08/2016.
 */


import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {SignInService} from "./user/signin.service";
import {OEConfig} from "../core/oeconfig.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private oeConfig: OEConfig, private signInService: SignInService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var loggedInUser = this.signInService.loggedInUser;
        if (loggedInUser && loggedInUser.id > 0)
            return true;

        this.router.navigateByUrl(this.oeConfig.loginPath + "?returnUrl=" + state.url);

        return false;
    }

}
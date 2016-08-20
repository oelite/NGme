/**
 * Created by mleader1 on 29/06/2016.
 */

import {Component, ViewChild} from "@angular/core";
import {Router, RouterStateSnapshot, ActivatedRoute} from "@angular/router";
import {SignInService} from "../../modules/user/signin.service";
import {OEConfig} from "../../core/oeconfig.service";
import {NotificationsService} from "angular2-notifications";

declare var $: any;

@Component({
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})

export class LoginPage {
    loginBg: string;
    loginBgs: string[] = [
        '../../../assets/img/bg/01.jpg',
        '../../../assets/img/bg/02.jpg',
        '../../../assets/img/bg/03.jpg',
        '../../../assets/img/bg/04.jpg',
        '../../../assets/img/bg/05.jpg',
        '../../../assets/img/bg/06.jpg',
        '../../../assets/img/bg/07.jpg',
        '../../../assets/img/bg/08.jpg',
        '../../../assets/img/bg/09.jpg',
        '../../../assets/img/bg/10.jpg'
    ];

    private email: string = null;
    private password: string = null;
    private returnUrl: string = null;
    private txtPasswordColor: string = 'primary';
    private txtEmailColor: string = 'primary';
    private loginFailed: boolean = false;
    private isValidating: boolean = false;

    constructor(oeConfig: OEConfig, private signInService: SignInService, private router: Router, private toastr: NotificationsService, private activatedRoute: ActivatedRoute) {
        this.loginBg = this.loginBgs[Math.floor(Math.random() * this.loginBgs.length)];
        activatedRoute.params.subscribe(params=> {
            this.returnUrl = params['returnUrl'];
            if (!this.returnUrl)
                this.returnUrl = "/";
        });
    }


    onSubmit(): void {
        this.isValidating = true;
        var scope = this;
        setTimeout(function () {
            scope.signInService.SignIn(scope.email, scope.password).toPromise().then((result)=> {
                if (result) {
                    scope.toastr.remove();
                    scope.router.navigateByUrl(scope.returnUrl);
                }
                else if (result == false) {
                    scope.loginFailed = true;
                    scope.toastr.alert("Authentication Error", "Sorry, incorrect username/email or password. Please try again.");
                    $('input[name="email"]').focus();
                }
                else {
                    scope.toastr.error(null, "Sorry, an error has occurred on the server. Please try again later.");
                }
            });
            scope.isValidating = false;
        }, 50);
    }

}
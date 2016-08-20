/**
 * Created by mleader1 on 29/06/2016.
 */

import {Component, ViewChild} from "@angular/core";
import {OEAppState} from "../../core/framework";
import {Router} from "@angular/router";
import {SignInService} from "../../core/services";
import {MdlSnackbar, MdlSnackbarMessage} from "../../plugins/material.components";
import {Http} from "@angular/http";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: LoginPage.viewSelector,
    templateUrl: 'login.page.html',
    styleUrls: ['login.css']
})

export class LoginPage {
    public static viewSelector: string = 'oe-page.oe-page-login';
    loginBg: string;
    loginBgs: string[] = [
        '../../../../assets/img/bg/01.jpg',
        '../../../../assets/img/bg/02.jpg',
        '../../../../assets/img/bg/03.jpg',
        '../../../../assets/img/bg/04.jpg',
        '../../../../assets/img/bg/05.jpg',
        '../../../../assets/img/bg/06.jpg',
        '../../../../assets/img/bg/07.jpg',
        '../../../../assets/img/bg/08.jpg',
        '../../../../assets/img/bg/09.jpg',
        '../../../../assets/img/bg/10.jpg'
    ];

    private email: string = null;
    private password: string = null;
    private returnUrl: string = null;
    private txtPasswordColor: string = 'primary';
    private txtEmailColor: string = 'primary';
    private loginFailed: boolean = false;
    private isValidating: boolean = false;

    @ViewChild(MdlSnackbar)
    private notificationBar: MdlSnackbar;

    public signinService: SignInService = new SignInService();

    constructor(appState: OEAppState, private router: Router) {
        this.loginBg = this.loginBgs[Math.floor(Math.random() * this.loginBgs.length)];
        router.routerState.queryParams.subscribe(params=> {
            this.returnUrl = params['returnUrl'];
            if (!this.returnUrl)
                this.returnUrl = "/";
        });
    }


    onSubmit(): void {
        this.isValidating = true;
        var scope = this;
        setTimeout(function () {
            scope.signinService.SignIn(scope.email, scope.password).then((result)=> {
                if (result) {
                    scope.router.navigateByUrl(scope.returnUrl);
                }
                else if (result == false) {
                    scope.loginFailed = true;
                    scope.notificationBar.push(new MdlSnackbarMessage("Sorry, incorrect username/email or password. Please try again."));
                    $('input[name="email"]').focus();
                }
                else {
                    scope.notificationBar.push(new MdlSnackbarMessage("Sorry, an error has occurred on the server. Please try again later."));
                }
            }).catch(ex=>console.log(ex));
            scope.isValidating = false;
        }, 50);

    }

}
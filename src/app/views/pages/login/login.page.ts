/**
 * Created by mleader1 on 29/06/2016.
 */

import {Component, ViewChild} from "@angular/core";
import {SimpleMasterPage} from "../../masterpages/simple/simple.masterpage";
import {OEAppState} from "../../../core/framework/OEAppState";
import {Router} from "@angular/router";
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {MdlSnackbar, MdlSnackbarMessage} from "../../../plugins/mdl/mdl-snackbar/snackbar";
import checkedNodeCall = webdriver.promise.checkedNodeCall;

declare var $:any;

@Component({
    moduleId: module.id,
    selector: LoginPage.viewSelector,
    templateUrl: 'login.page.html',
    styleUrls: ['login.css']
})

export class LoginPage extends SimpleMasterPage {
    public static viewSelector:string = 'oe-page.oe-page-login';
    loginBg:string;
    loginBgs:string[] = [
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

    private email:string = null;
    private password:string = null;
    private keepSignedIn:boolean = false;
    private returnUrl:string = null;
    private txtPasswordColor:string = 'primary';
    private txtEmailColor:string = 'primary';
    private loginFailed:boolean = false;
    private isValidating:boolean = false;

    @ViewChild(MdlSnackbar)
    private notificationBar:MdlSnackbar;

    constructor(appState:OEAppState, private router:Router, private signinService:SignInService) {
        super(appState);
        this.loginBg = this.loginBgs[Math.floor(Math.random() * this.loginBgs.length)];
        router.routerState.queryParams.subscribe(params=> {
            this.returnUrl = params['returnUrl'];
            if (!this.returnUrl)
                this.returnUrl = "/";
        });
    }


    onSubmit():void {
        this.isValidating = true;
        this.signinService.SignIn(this.email, this.password, this.keepSignedIn).then((result)=> {
            if (result) {
                this.router.navigateByUrl(this.returnUrl);
            }
            else if (result == false) {
                this.loginFailed = true;
                this.notificationBar.push(new MdlSnackbarMessage("Sorry, incorrect username/email or password. Please try again."));
                $('input[name="email"]').focus();
            }
            else {
                this.notificationBar.push(new MdlSnackbarMessage("Sorry, an error has occurred on the server. Please try again later."));
            }
        });
        this.isValidating = false;

    }

}
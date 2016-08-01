/**
 * Created by mleader1 on 29/06/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var OEAppState_1 = require("../../../core/framework/OEAppState");
var router_1 = require("@angular/router");
var signin_service_1 = require("../../../core/abstractions/users/signin.service");
var snackbar_1 = require("../../../plugins/mdl/mdl-snackbar/snackbar");
var LoginPage = (function () {
    function LoginPage(appState, router, signinService) {
        var _this = this;
        this.router = router;
        this.signinService = signinService;
        this.loginBgs = [
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
        this.email = null;
        this.password = null;
        this.returnUrl = null;
        this.txtPasswordColor = 'primary';
        this.txtEmailColor = 'primary';
        this.loginFailed = false;
        this.isValidating = false;
        //super(appState);
        this.loginBg = this.loginBgs[Math.floor(Math.random() * this.loginBgs.length)];
        router.routerState.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
            if (!_this.returnUrl)
                _this.returnUrl = "/";
        });
    }
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.isValidating = true;
        this.signinService.SignIn(this.email, this.password).then(function (result) {
            if (result) {
                _this.router.navigateByUrl(_this.returnUrl);
            }
            else if (result == false) {
                _this.loginFailed = true;
                _this.notificationBar.push(new snackbar_1.MdlSnackbarMessage("Sorry, incorrect username/email or password. Please try again."));
                $('input[name="email"]').focus();
            }
            else {
                _this.notificationBar.push(new snackbar_1.MdlSnackbarMessage("Sorry, an error has occurred on the server. Please try again later."));
            }
        });
        this.isValidating = false;
    };
    LoginPage.viewSelector = 'oe-page.oe-page-login';
    __decorate([
        core_1.ViewChild(snackbar_1.MdlSnackbar), 
        __metadata('design:type', snackbar_1.MdlSnackbar)
    ], LoginPage.prototype, "notificationBar", void 0);
    LoginPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: LoginPage.viewSelector,
            templateUrl: 'login.page.html',
            styleUrls: ['login.css']
        }), 
        __metadata('design:paramtypes', [OEAppState_1.OEAppState, router_1.Router, signin_service_1.SignInService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map
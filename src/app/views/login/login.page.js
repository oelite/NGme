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
var core_1 = require("@angular/core");
var LoginPage = (function () {
    function LoginPage(oeConfig, signInService, router, toastr, activatedRoute) {
        var _this = this;
        this.signInService = signInService;
        this.router = router;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.loginBgs = [
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
        this.email = null;
        this.password = null;
        this.returnUrl = null;
        this.txtPasswordColor = 'primary';
        this.txtEmailColor = 'primary';
        this.loginFailed = false;
        this.isValidating = false;
        this.loginBg = this.loginBgs[Math.floor(Math.random() * this.loginBgs.length)];
        activatedRoute.params.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
            if (!_this.returnUrl)
                _this.returnUrl = "/";
        });
    }
    LoginPage.prototype.onSubmit = function () {
        this.isValidating = true;
        var scope = this;
        setTimeout(function () {
            scope.signInService.SignIn(scope.email, scope.password).toPromise().then(function (result) {
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
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: 'login.page.html',
            styleUrls: ['login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map
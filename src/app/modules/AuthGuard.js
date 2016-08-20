/**
 * Created by mleader1 on 20/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthGuard = (function () {
    function AuthGuard(oeConfig, signInService, router) {
        this.oeConfig = oeConfig;
        this.signInService = signInService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var loggedInUser = this.signInService.loggedInUser;
        if (loggedInUser && loggedInUser.id > 0)
            return true;
        this.router.navigateByUrl(this.oeConfig.loginPath + "?returnUrl=" + state.url);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=AuthGuard.js.map
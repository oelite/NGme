/**
 * Created by mleader1 on 08/08/2016.
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
var core_1 = require('@angular/core');
var signin_service_1 = require("../../../core/abstractions/users/signin.service");
var LeftOuterNavPartial = (function () {
    function LeftOuterNavPartial(loginService) {
        this.loginService = loginService;
        if (!this.currentUser)
            this.currentUser = loginService.loggedInUser;
    }
    LeftOuterNavPartial.prototype.ngOnInit = function () {
    };
    LeftOuterNavPartial = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[oe-portal-leftnav]',
            templateUrl: 'leftOuterNav.partial.html'
        }), 
        __metadata('design:paramtypes', [signin_service_1.SignInService])
    ], LeftOuterNavPartial);
    return LeftOuterNavPartial;
}());
exports.LeftOuterNavPartial = LeftOuterNavPartial;
//# sourceMappingURL=leftOuterNav.partial.js.map
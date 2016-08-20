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
var core_1 = require('@angular/core');
var navItem_1 = require("../../../../core/ui/nav/navItem");
// import {SignInService} from "../../../core/abstractions/users/signin.service";
// import {User} from "../../../core/abstractions/users/user";
var LeftOuterNavPartial = (function () {
    function LeftOuterNavPartial(oeConfig) {
        var _this = this;
        this.oeConfig = oeConfig;
        this.websiteNavItems = [];
        this.emailAccountNavItems = [];
        oeConfig.UIConfig.onNavItemRegistered$.subscribe(function (item) {
            if (item.navigationPosition == navItem_1.OEUINavPosition.LeftOuter)
                _this.onNavItemRegistered(item);
        });
        oeConfig.UIConfig.onNavItemDeregistered$.subscribe(function (item) {
            if (item.navigationPosition == navItem_1.OEUINavPosition.LeftOuter)
                _this.onNavItemRemoved(item);
        });
        // if (!this.currentUser)
        //     this.currentUser = loginService.loggedInUser;
    }
    LeftOuterNavPartial.prototype.ngOnInit = function () {
    };
    LeftOuterNavPartial.prototype.onNavItemRegistered = function (item) {
        if (item.item.itemId.indexOf("navEmail-") === 0)
            this.emailAccountNavItems.push(item.item);
        else if (item.item.itemId.indexOf("navWebsite-") === 0)
            this.websiteNavItems.push(item.item);
    };
    LeftOuterNavPartial.prototype.onNavItemRemoved = function (item) {
        if (item.item.itemId.indexOf("navEmail-") === 0)
            this.emailAccountNavItems.splice(this.emailAccountNavItems.indexOf(item.item), 1);
        if (item.item.itemId.indexOf("navWebsite-") === 0)
            this.websiteNavItems.splice(this.websiteNavItems.indexOf(item.item), 1);
    };
    LeftOuterNavPartial = __decorate([
        core_1.Component({
            selector: '[oe-portal-leftnav]',
            templateUrl: 'leftOuterNav.partial.html'
        })
    ], LeftOuterNavPartial);
    return LeftOuterNavPartial;
}());
exports.LeftOuterNavPartial = LeftOuterNavPartial;
//# sourceMappingURL=leftOuterNav.partial.js.map
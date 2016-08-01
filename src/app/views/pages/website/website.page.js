/**
 * Created by mleader1 on 04/07/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OEPartialView_1 = require("../../../core/framework/ui/view/OEPartialView");
var WebsitePage = (function () {
    function WebsitePage(appState, signinManager) {
        this.signinManager = signinManager;
        console.log('website page called');
    }
    WebsitePage.viewSelector = "oe-page.oe-page-website";
    WebsitePage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: WebsitePage.viewSelector,
            //encapsulation: ViewEncapsulation.None,
            templateUrl: 'website.page.html',
            styleUrls: ['website.page.css'],
            directives: [OEPartialView_1.OEPartialView],
            providers: []
        })
    ], WebsitePage);
    return WebsitePage;
}());
exports.WebsitePage = WebsitePage;
//# sourceMappingURL=website.page.js.map
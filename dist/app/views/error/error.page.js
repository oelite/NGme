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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var framework_1 = require("../../core/framework");
var ErrorPage = (function () {
    function ErrorPage(appState) {
        this.errorText = "error";
        //super(appState)
        //console.log(this.mainView);
        // if (this.mainView) {
        //
        //     //this.mainView by default should be inherited from OEView therefore containing current page details
        //     // if (this.mainView.viewDirectives && this.mainView.viewDirectives[0] == ErrorPage)
        //     //     this.errorText = "error";
        //     // else
        //     //     this.errorText = "Opps, an error...";
        //
        // }
        // else if (!window.location.pathname.startsWith('error'))
        this.errorText = "404";
    }
    ErrorPage.viewSelector = 'oe-page.oe-page-error';
    ErrorPage = __decorate([
        core_1.Component({
            selector: ErrorPage.viewSelector,
            moduleId: module.id,
            templateUrl: 'error.page.html',
            styleUrls: ['error.page.css']
        }), 
        __metadata('design:paramtypes', [framework_1.OEAppState])
    ], ErrorPage);
    return ErrorPage;
}());
exports.ErrorPage = ErrorPage;
//# sourceMappingURL=error.page.js.map
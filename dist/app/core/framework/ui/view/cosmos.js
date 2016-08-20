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
var platform_browser_1 = require("@angular/platform-browser");
var OEAppState_1 = require("../../OEAppState");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
/**
 * Created by mleader1 on 27/06/2016.
 * CosmosComponent Concepts:
 * 1. It's a container built to host all components within the app; i.e. from single login page to complicated
 * modularized multi-masterpages views.
 * 2. It should be able to understand all registered routes so to render components accordingly
 * 3. It should be considered to have a global setting section, working like a Commander panel.
 */
var CosmosComponent = (function () {
    function CosmosComponent(titleService, appState, cookies) {
        this.titleService = titleService;
        this.appState = appState;
        this.cookies = cookies;
        titleService.setTitle(appState.appName);
        console.log('even I can have it');
        console.log(cookies);
    }
    CosmosComponent = __decorate([
        core_1.Component({
            selector: 'body',
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, OEAppState_1.OEAppState, cookies_service_1.CookieService])
    ], CosmosComponent);
    return CosmosComponent;
}());
exports.CosmosComponent = CosmosComponent;
//# sourceMappingURL=cosmos.js.map
/**
 * Created by mleader1 on 12/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var layout_1 = require("./ui/layout/layout");
var OELayoutConfig_1 = require("./layout/OELayoutConfig");
var OELayoutState_1 = require("./layout/OELayoutState");
var OEAppState_1 = require("./OEAppState");
var OERouteState_1 = require("./service/OERouteState");
var OEUIState_1 = require("./layout/OEUIState");
var ApiGateway_1 = require("./service/ApiGateway");
var section_1 = require("./ui/section/section");
var OEView_1 = require("./ui/view/OEView");
var OEPartialView_1 = require("./ui/view/OEPartialView");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var signin_service_1 = require("../abstractions/users/signin.service");
var OECoreModule = (function () {
    function OECoreModule() {
    }
    OECoreModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            declarations: [section_1.OESection, OEView_1.OEView, OEPartialView_1.OEPartialView, layout_1.OELayout],
            providers: [
                cookies_service_1.CookieService,
                //HTTP Services
                ApiGateway_1.ApiGateway,
                signin_service_1.SignInService,
                //Layout Services
                OELayoutState_1.OELayoutState,
                OELayoutConfig_1.OELayoutConfig,
                //State Services
                OEUIState_1.OEUIState,
                OERouteState_1.OERouteState,
                OEAppState_1.OEAppState,
            ],
            exports: [
                section_1.OESection, OEView_1.OEView, OEPartialView_1.OEPartialView, layout_1.OELayout,
            ]
        })
    ], OECoreModule);
    return OECoreModule;
}());
exports.OECoreModule = OECoreModule;
//# sourceMappingURL=OECore.module.js.map
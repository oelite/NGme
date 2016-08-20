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
var OEComponents_1 = require("../../components/OEComponents");
var OECore_module_1 = require("../../core/OECore.module");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var signin_service_1 = require("./signin.service");
exports.OEFeatures_User_PROVIDERS = [
    signin_service_1.SignInService
];
var OE_UserModule = (function () {
    function OE_UserModule() {
    }
    OE_UserModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule,
            ],
            declarations: [],
            providers: exports.OEFeatures_User_PROVIDERS.slice(),
            exports: []
        })
    ], OE_UserModule);
    return OE_UserModule;
}());
exports.OE_UserModule = OE_UserModule;
//# sourceMappingURL=user.module.js.map
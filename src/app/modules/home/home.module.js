/**
 * Created by mleader1 on 15/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var OECore_module_1 = require("../../core/OECore.module");
var OEComponents_1 = require("../../components/OEComponents");
var home_page_1 = require("../../views/home/home.page");
var OE_HomeModule = (function () {
    function OE_HomeModule() {
    }
    OE_HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule,
            ],
            declarations: [home_page_1.HomePage],
            exports: [home_page_1.HomePage]
        })
    ], OE_HomeModule);
    return OE_HomeModule;
}());
exports.OE_HomeModule = OE_HomeModule;
//# sourceMappingURL=home.module.js.map
/**
 * Created by mleader1 on 10/08/2016.
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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var cosmos_1 = require("../core/framework/ui/view/cosmos");
var modules_1 = require("../../custom/modules");
var OECore_module_1 = require("../core/framework/OECore.module");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var material_components_1 = require("../plugins/material.components");
var default_routing_1 = require("./default.routing");
var router_1 = require("@angular/router");
var error_page_1 = require("./error/error.page");
var home_page_1 = require("./home/home.page");
var registeredModules = [
    platform_browser_1.BrowserModule,
    forms_1.FormsModule,
    http_1.HttpModule, http_1.JsonpModule,
    OECore_module_1.OECoreModule,
    material_components_1.OE_MD_MODULES
];
var registeredProviders = [
    cookies_service_1.CookieService,
    platform_browser_1.Title,
    Location,
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                registeredModules,
                router_1.RouterModule.forRoot(default_routing_1.defaultRoutes),
                modules_1.OE_MODULES,
            ],
            declarations: [cosmos_1.CosmosComponent, home_page_1.HomePage, error_page_1.ErrorPage],
            providers: [registeredProviders],
            bootstrap: [cosmos_1.CosmosComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
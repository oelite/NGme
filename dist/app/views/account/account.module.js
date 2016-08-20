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
var account_routing_1 = require("./account.routing");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var dashboard_masterpage_1 = require("../shared/dashboard/dashboard.masterpage");
var login_page_1 = require("../login/login.page");
var account_page_1 = require("./account.page");
var simple_masterpage_1 = require("../shared/simple/simple.masterpage");
var OECore_module_1 = require("../../core/framework/OECore.module");
var material_components_1 = require("../../plugins/material.components");
/**
 * Created by mleader1 on 04/07/2016.
 */
var MODULE_Account = (function () {
    function MODULE_Account() {
    }
    MODULE_Account = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                OECore_module_1.OECoreModule,
                material_components_1.OE_MD_MODULES,
                dashboard_masterpage_1.DashboardMasterPageModule,
                simple_masterpage_1.SimpleMasterPageModule,
                router_1.RouterModule.forChild(account_routing_1.accountRoutes)
            ],
            declarations: [login_page_1.LoginPage, account_page_1.AccountPage],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], MODULE_Account);
    return MODULE_Account;
}());
exports.MODULE_Account = MODULE_Account;
//# sourceMappingURL=account.module.js.map
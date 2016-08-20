"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var account_module_1 = require("./account/account.module");
var home_module_1 = require("./home/home.module");
var dashboard_master_1 = require("../views/master/dashboard/dashboard.master");
var router_1 = require("@angular/router");
var home_routing_1 = require("./home/home.routing");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var OECore_module_1 = require("../core/OECore.module");
var OEComponents_1 = require("../components/OEComponents");
var account_routing_1 = require("./account/account.routing");
var AuthGuard_1 = require("./AuthGuard");
var user_module_1 = require("./user/user.module");
/**
 * Created by mleader1 on 15/08/2016.
 */
var dashboardRoutes = [
    {
        path: '',
        component: dashboard_master_1.DashboardMasterPage,
        canActivate: [AuthGuard_1.AuthGuard],
        children: home_routing_1.homeRoutes.concat(account_routing_1.accountRoutes)
    }
];
var OE_MODULES_Dashboard = (function () {
    function OE_MODULES_Dashboard() {
    }
    OE_MODULES_Dashboard = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule,
                dashboard_master_1.DashboardMasterPageModule,
                home_module_1.OE_HomeModule,
                account_module_1.OE_AccountModule,
                user_module_1.OE_UserModule,
                router_1.RouterModule.forRoot(dashboardRoutes)
            ],
            declarations: [],
            providers: [AuthGuard_1.AuthGuard],
            entryComponents: [dashboard_master_1.DashboardMasterPage]
        })
    ], OE_MODULES_Dashboard);
    return OE_MODULES_Dashboard;
}());
exports.OE_MODULES_Dashboard = OE_MODULES_Dashboard;
//# sourceMappingURL=dashboard.modules.js.map
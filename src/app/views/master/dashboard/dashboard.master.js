/**
 * Created by mleader1 on 16/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var OECore_module_1 = require("../../../core/OECore.module");
var OEComponents_1 = require("../../../components/OEComponents");
var leftOuterNav_partial_1 = require("./left-nav/leftOuterNav.partial");
var router_1 = require("@angular/router");
var navItem_1 = require("../../../core/ui/nav/navItem");
var funcs_1 = require("../../../core/utils/funcs");
var layout_1 = require("../../../core/ui/layout/layout");
var DashboardMasterPage = (function () {
    function DashboardMasterPage(oeConfig) {
        this.oeConfig = oeConfig;
    }
    DashboardMasterPage.prototype.ngOnInit = function () {
        if (!this.oeConfig.isDashboardInitiated) {
            this.loadNav_ExistingWebsites();
            this.loadNav_ExistingEmailAccounts();
            this.oeConfig.isDashboardInitiated = true;
        }
    };
    DashboardMasterPage.prototype.loadNav_ExistingWebsites = function () {
        var emailNavItem1 = new navItem_1.OENavItem("navWebsite-1", "Lida Weng", [], { siteId: funcs_1.Utils.NewGuid() });
        var emailNavItem2 = new navItem_1.OENavItem("navWebsite-2", "Lida Weng", [], { siteId: funcs_1.Utils.NewGuid() });
        this.oeConfig.UIConfig.registerNavItem(emailNavItem1, navItem_1.OEUINavPosition.LeftOuter);
        this.oeConfig.UIConfig.registerNavItem(emailNavItem2, navItem_1.OEUINavPosition.LeftOuter);
    };
    DashboardMasterPage.prototype.loadNav_ExistingEmailAccounts = function () {
        var emailNavItem1 = new navItem_1.OENavItem("navEmail-1", "Lida Weng", [], { emailAccountId: funcs_1.Utils.NewGuid() });
        var emailNavItem2 = new navItem_1.OENavItem("navEmail-2", "Lida Weng", [], { emailAccountId: funcs_1.Utils.NewGuid() });
        this.oeConfig.UIConfig.registerNavItem(emailNavItem1, navItem_1.OEUINavPosition.LeftOuter);
        this.oeConfig.UIConfig.registerNavItem(emailNavItem2, navItem_1.OEUINavPosition.LeftOuter);
    };
    DashboardMasterPage.prototype.toggleLeftNav = function () {
    };
    __decorate([
        core_1.ViewChild(layout_1.OELayoutComponent)
    ], DashboardMasterPage.prototype, "layout");
    DashboardMasterPage = __decorate([
        core_1.Component({
            templateUrl: 'dashboard.master.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['dashboard.master.scss']
        })
    ], DashboardMasterPage);
    return DashboardMasterPage;
}());
exports.DashboardMasterPage = DashboardMasterPage;
var DashboardMasterPageModule = (function () {
    function DashboardMasterPageModule() {
    }
    DashboardMasterPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule,
                router_1.RouterModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule
            ],
            declarations: [DashboardMasterPage, leftOuterNav_partial_1.LeftOuterNavPartial],
            exports: [DashboardMasterPage]
        })
    ], DashboardMasterPageModule);
    return DashboardMasterPageModule;
}());
exports.DashboardMasterPageModule = DashboardMasterPageModule;
//# sourceMappingURL=dashboard.master.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mleader1 on 28/06/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var framework_1 = require("../../../core/framework");
var AuthorizedView_1 = require("../../../core/framework/ui/view/AuthorizedView");
var layout_1 = require("../../../core/framework/ui/layout/layout");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var OECore_module_1 = require("../../../core/framework/OECore.module");
var material_components_1 = require("../../../plugins/material.components");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var signin_service_1 = require("../../../core/abstractions/users/signin.service");
var leftOuterNav_partial_1 = require("../leftOuterNav/leftOuterNav.partial");
var DashboardMasterPage = (function (_super) {
    __extends(DashboardMasterPage, _super);
    function DashboardMasterPage(appState, router, activatedRoute, el, signInService) {
        _super.call(this, appState, router, activatedRoute, signInService, 'oe.master.dashboard');
        this.appState = appState;
        this.mobileLeftNav = false;
        this.el = el.nativeElement;
        this.initView();
    }
    DashboardMasterPage.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    DashboardMasterPage.prototype.initView = function () {
        this.appState.layoutState.setState(new framework_1.OELayoutConfig(null, [], new framework_1.OEUIState(true, true, false, null), framework_1.LayoutSection.TopOuter), this.viewId);
        this.appState.layoutState.setState(new framework_1.OELayoutConfig(null, [], new framework_1.OEUIState(true, false, false, null), framework_1.LayoutSection.LeftOuter), this.viewId);
        this.appState.layoutState.setState(new framework_1.OELayoutConfig(null, [], new framework_1.OEUIState(true, false, false, null), framework_1.LayoutSection.RightInner), this.viewId);
    };
    DashboardMasterPage.prototype.toggleLeftNav = function (e) {
        var leftOuterView = this.layout.leftOuterView;
        if (leftOuterView) {
            if (e) {
                if (e.checked)
                    leftOuterView.uiState.isFixed = true;
                else
                    leftOuterView.uiState.isFixed = false;
            }
            leftOuterView.uiState.isActive = !leftOuterView.uiState.isActive;
            this.appState.layoutState.setState(leftOuterView, this.viewId);
            if (this.mobileLeftNav) {
                $(this.el).find("md-card").trigger("focus");
            }
        }
        else
            console.log('unexpected event');
    };
    DashboardMasterPage.prototype.toggleRightNav = function (e) {
        var rightInnerView = this.layout.rightInnerView;
        if (rightInnerView) {
            if (e) {
                if (e.checked)
                    rightInnerView.uiState.isFixed = true;
                else
                    rightInnerView.uiState.isFixed = false;
            }
            rightInnerView.uiState.isActive = !rightInnerView.uiState.isActive;
            this.appState.layoutState.setState(rightInnerView, this.viewId);
        }
        else
            console.log('unexpected event');
    };
    DashboardMasterPage.viewSelector = "oe-masterpages.oe-pages-dashboard";
    __decorate([
        core_1.ViewChild(layout_1.OELayout), 
        __metadata('design:type', layout_1.OELayout)
    ], DashboardMasterPage.prototype, "layout", void 0);
    DashboardMasterPage = __decorate([
        //jquery support
        core_1.Component({
            moduleId: module.id,
            selector: DashboardMasterPage.viewSelector,
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'dashboard.masterpage.html',
            styleUrls: ['dashboard.masterpage.css'],
        }), 
        __metadata('design:paramtypes', [framework_1.OEAppState, router_1.Router, router_1.ActivatedRoute, core_1.ElementRef, signin_service_1.SignInService])
    ], DashboardMasterPage);
    return DashboardMasterPage;
}(AuthorizedView_1.AuthorizedView));
exports.DashboardMasterPage = DashboardMasterPage;
var DashboardMasterPageModule = (function () {
    function DashboardMasterPageModule() {
    }
    DashboardMasterPageModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule,
                OECore_module_1.OECoreModule, material_components_1.MATERIAL_DESIGN_MODULES
            ],
            declarations: [
                DashboardMasterPage, leftOuterNav_partial_1.LeftOuterNavPartial
            ],
            providers: [cookies_service_1.CookieService, signin_service_1.SignInService],
            exports: [
                DashboardMasterPage
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardMasterPageModule);
    return DashboardMasterPageModule;
}());
exports.DashboardMasterPageModule = DashboardMasterPageModule;
//# sourceMappingURL=dashboard.masterpage.js.map
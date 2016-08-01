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
var framework_1 = require("../../../core/framework");
var services_1 = require("../../../core/services");
var OELayoutConfig_1 = require("../../../core/framework/layout/OELayoutConfig");
var AuthorizedView_1 = require("../../../core/framework/ui/view/AuthorizedView");
var OEAppState_1 = require("../../../core/framework/OEAppState");
var OEUIState_1 = require("../../../core/framework/layout/OEUIState");
var router_1 = require("@angular/router");
var layout_1 = require("../../../core/framework/ui/layout/layout");
var DashboardMasterPage = (function (_super) {
    __extends(DashboardMasterPage, _super);
    function DashboardMasterPage(el, appState, signinManager, router) {
        _super.call(this, appState, signinManager, router, 'oe.master.dashboard');
        this.appState = appState;
        this.signinManager = signinManager;
        this.mobileLeftNav = false;
        this.el = el.nativeElement;
        this.initView();
    }
    DashboardMasterPage.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    DashboardMasterPage.prototype.initView = function () {
        this.appState.layoutState.setState(new OELayoutConfig_1.OELayoutConfig(null, [], new OEUIState_1.OEUIState(true, true, false, null), OELayoutConfig_1.LayoutSection.TopOuter), this.viewId);
        this.appState.layoutState.setState(new OELayoutConfig_1.OELayoutConfig(null, [], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.LeftOuter), this.viewId);
        this.appState.layoutState.setState(new OELayoutConfig_1.OELayoutConfig(null, [], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.RightInner), this.viewId);
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
            console.log(leftOuterView.uiState.isActive);
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
            directives: [framework_1.OEPartialView],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, OEAppState_1.OEAppState, services_1.SignInService, router_1.Router])
    ], DashboardMasterPage);
    return DashboardMasterPage;
}(AuthorizedView_1.AuthorizedView));
exports.DashboardMasterPage = DashboardMasterPage;
//# sourceMappingURL=dashboard.masterpage.js.map
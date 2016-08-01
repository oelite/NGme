/**
 * Created by mleader1 on 02/07/2016.
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
var core_1 = require("@angular/core");
var framework_1 = require("../../../framework");
var OELayoutConfig_1 = require("../../layout/OELayoutConfig");
var OEAppState_1 = require("../../OEAppState");
var OELayout = (function () {
    function OELayout(el, appState) {
        var _this = this;
        this.appState = appState;
        this.el = el.nativeElement;
        appState.layoutState.rootLayoutsUpdated$.subscribe(function (item) { return _this.viewStateUpdated(item); });
    }
    OELayout.prototype.ngOnInit = function () {
        this.topOuterView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.TopOuter, this.viewId);
        this.mainView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.Main, this.viewId);
        this.bottomInnerView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.BottomInner, this.viewId);
        this.bottomOuterView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.BottomOuter, this.viewId);
        this.rightInnerView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.RightInner, this.viewId);
        this.rightOuterView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.RightOuter, this.viewId);
        this.leftInnerView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.LeftInner, this.viewId);
        this.leftOuterView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.LeftOuter, this.viewId);
        this.topInnerView = this.appState.layoutState.getState(OELayoutConfig_1.LayoutSection.TopInner, this.viewId);
    };
    OELayout.prototype.isViewable = function (viewConfig) {
        return viewConfig && viewConfig.isViewable();
    };
    OELayout.prototype.viewStateUpdated = function (item) {
        if (item && item.viewId == this.viewId) {
            switch (item.updatedLayoutConfig.layoutSection) {
                case OELayoutConfig_1.LayoutSection.TopOuter:
                    this.topOuterView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.TopInner:
                    this.topInnerView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.LeftOuter:
                    if (item.updatedLayoutConfig.uiState.isFixed) {
                        //shrink the main content for additional left padding for the left nav
                        $(this.el).find('.oe-screen').css('margin-left', $(this.el).find('oe-layout-left-outer').width() + 'px');
                    }
                    else {
                        $(this.el).find('.oe-screen').css('margin-left', '');
                    }
                    if (item.updatedLayoutConfig.uiState.isActive) {
                        $(this.el).find('.oe-layout-left-outer').addClass('active');
                    }
                    else
                        $(this.el).find('.oe-layout-left-outer').removeClass('active');
                    this.leftOuterView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.LeftInner:
                    this.leftInnerView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.RightOuter:
                    this.rightOuterView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.RightInner:
                    this.rightInnerView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.BottomOuter:
                    this.bottomOuterView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.BottomInner:
                    this.bottomInnerView = item.updatedLayoutConfig;
                    break;
                case OELayoutConfig_1.LayoutSection.Main:
                    this.mainView = item.updatedLayoutConfig;
                    break;
                default:
                    break;
            }
        }
    };
    __decorate([
        core_1.Input('viewId'), 
        __metadata('design:type', String)
    ], OELayout.prototype, "viewId", void 0);
    OELayout = __decorate([
        //jquery support
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-layout',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'layout.html',
            directives: [framework_1.OEPartialView],
            styleUrls: ['layout.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, OEAppState_1.OEAppState])
    ], OELayout);
    return OELayout;
}());
exports.OELayout = OELayout;
//# sourceMappingURL=layout.js.map
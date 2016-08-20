"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mleader1 on 15/08/2016.
 */
var core_1 = require('@angular/core');
var funcs_1 = require("../../utils/funcs");
(function (LayoutSection) {
    LayoutSection[LayoutSection["TopOuter"] = 10] = "TopOuter";
    LayoutSection[LayoutSection["TopInner"] = 20] = "TopInner";
    LayoutSection[LayoutSection["LeftOuter"] = 30] = "LeftOuter";
    LayoutSection[LayoutSection["LeftInner"] = 40] = "LeftInner";
    LayoutSection[LayoutSection["RightOuter"] = 50] = "RightOuter";
    LayoutSection[LayoutSection["RightInner"] = 60] = "RightInner";
    LayoutSection[LayoutSection["BottomOuter"] = 70] = "BottomOuter";
    LayoutSection[LayoutSection["BottomInner"] = 80] = "BottomInner";
    LayoutSection[LayoutSection["Main"] = 0] = "Main"; //"oe.master.main"
})(exports.LayoutSection || (exports.LayoutSection = {}));
var LayoutSection = exports.LayoutSection;
var OELayoutSectionConfig = (function () {
    function OELayoutSectionConfig(layoutSection, isVisible, isActive) {
        this.layoutSection = LayoutSection.Main;
        this.isVisible = true;
        this.isActive = false;
        this.isFixed = false;
        this.isVisible = isVisible || true;
        this.isActive = isActive || false;
        this.layoutSection = layoutSection || this.layoutSection;
    }
    OELayoutSectionConfig.prototype.isViewable = function () {
        return this.isVisible;
    };
    ;
    return OELayoutSectionConfig;
}());
exports.OELayoutSectionConfig = OELayoutSectionConfig;
var OELayoutConfig = (function () {
    function OELayoutConfig(layoutId) {
        this.layoutId = layoutId || funcs_1.Utils.NewGuid();
        this.topOuterView = new OELayoutSectionConfig(LayoutSection.TopOuter);
        this.topInnerView = new OELayoutSectionConfig(LayoutSection.TopInner);
        this.bottomOuterView = new OELayoutSectionConfig(LayoutSection.BottomOuter);
        this.bottomInnerView = new OELayoutSectionConfig(LayoutSection.BottomInner);
        this.leftOuterView = new OELayoutSectionConfig(LayoutSection.LeftOuter);
        this.leftInnerView = new OELayoutSectionConfig(LayoutSection.LeftInner);
        this.rightOuterView = new OELayoutSectionConfig(LayoutSection.RightOuter);
        this.rightInnerView = new OELayoutSectionConfig(LayoutSection.RightInner);
        this.mainView = new OELayoutSectionConfig(LayoutSection.Main);
    }
    return OELayoutConfig;
}());
exports.OELayoutConfig = OELayoutConfig;
var OELayoutComponent = (function () {
    function OELayoutComponent(oeConfig) {
        this.oeConfig = oeConfig;
        this.layout = new OELayoutConfig(this.layoutId);
    }
    OELayoutComponent.prototype.ngOnInit = function () {
        this.layout.layoutId = this.layoutId;
        this.oeConfig.UIConfig.registerLayout(this.layout);
    };
    OELayoutComponent.prototype.applyCustomLayoutSettings = function (currentLayout, customLayout) {
        if (customLayout.isActive != null)
            currentLayout.isActive = customLayout.isActive;
        if (customLayout.isFixed != null)
            currentLayout.isFixed = customLayout.isFixed;
        if (customLayout.isVisible != null)
            currentLayout.isVisible = customLayout.isVisible;
        return currentLayout;
    };
    OELayoutComponent.prototype.isHidden = function (config) {
        return !(config && config.isVisible);
    };
    OELayoutComponent.prototype.isActive = function (config) {
        return config && config.isActive && config.isVisible;
    };
    OELayoutComponent.prototype.isFixed = function (config) {
        return config && config.isFixed;
    };
    __decorate([
        core_1.Input()
    ], OELayoutComponent.prototype, "layoutId");
    OELayoutComponent = __decorate([
        core_1.Component({
            selector: 'oe-layout',
            templateUrl: 'layout.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['layout.scss']
        })
    ], OELayoutComponent);
    return OELayoutComponent;
}());
exports.OELayoutComponent = OELayoutComponent;
var OESectionComponent = (function () {
    function OESectionComponent() {
    }
    OESectionComponent.prototype.ngOnInit = function () {
    };
    OESectionComponent = __decorate([
        core_1.Component({
            selector: 'oe-section, oe-layout-top-outer, oe-layout-top-inner, oe-layout-left-outer, oe-layout-left-inner, oe-layout-right-outer, oe-layout-right-inner, oe-layout-bottom-outer, oe-layout-bottom-inner',
            template: '<ng-content></ng-content>'
        })
    ], OESectionComponent);
    return OESectionComponent;
}());
exports.OESectionComponent = OESectionComponent;
//# sourceMappingURL=layout.js.map
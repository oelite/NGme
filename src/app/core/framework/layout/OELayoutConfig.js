"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OEUIState_1 = require("./OEUIState");
var core_1 = require("@angular/core");
/**
 * Created by mleader1 on 27/06/2016.
 */
(function (LayoutSection) {
    LayoutSection[LayoutSection["TopOuter"] = 10] = "TopOuter";
    LayoutSection[LayoutSection["TopInner"] = 20] = "TopInner";
    LayoutSection[LayoutSection["LeftOuter"] = 30] = "LeftOuter";
    LayoutSection[LayoutSection["LeftInner"] = 40] = "LeftInner";
    LayoutSection[LayoutSection["RightOuter"] = 50] = "RightOuter";
    LayoutSection[LayoutSection["RightInner"] = 60] = "RightInner";
    LayoutSection[LayoutSection["BottomOuter"] = 70] = "BottomOuter";
    LayoutSection[LayoutSection["BottomInner"] = 80] = "BottomInner";
    LayoutSection[LayoutSection["Main"] = 0] = "Main"; //"oe.base.main"
})(exports.LayoutSection || (exports.LayoutSection = {}));
var LayoutSection = exports.LayoutSection;
var OELayoutConfig = (function () {
    /**
     *
     * @param viewSelector - the view Component's selector name
     * @param viewDirectives - required directives for the viewComponent in the layout
     * @param viewProviders - required providers for the viewComponent
     * @param uiState
     * @param layoutSection -
     */
    function OELayoutConfig(viewSelector, viewDirectives, uiState, layoutSection, viewProviders) {
        this.layoutSection = LayoutSection.Main;
        this.uiState = new OEUIState_1.OEUIState();
        this.viewSelector = 'unnamed-view';
        this.viewDirectives = [];
        this.viewProviders = [];
        this.layoutSection = layoutSection || this.layoutSection;
        this.uiState = uiState || this.uiState;
        this.viewSelector = viewSelector || this.viewSelector;
        this.viewDirectives = viewDirectives || this.viewDirectives;
        this.viewProviders = viewProviders || this.viewProviders;
    }
    OELayoutConfig.prototype.isViewable = function () {
        return this.uiState
            && this.uiState.visible === true
            && this.viewSelector != null
            && this.viewSelector != 'unnamed-view'
            && this.viewSelector.length > 0;
    };
    ;
    OELayoutConfig = __decorate([
        core_1.Injectable()
    ], OELayoutConfig);
    return OELayoutConfig;
}());
exports.OELayoutConfig = OELayoutConfig;
//# sourceMappingURL=OELayoutConfig.js.map
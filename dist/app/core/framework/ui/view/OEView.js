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
var OELayoutConfig_1 = require("../../layout/OELayoutConfig");
var funcs_1 = require("../../../utils/funcs");
var OEAppState_1 = require("../../OEAppState");
var router_1 = require("@angular/router");
var OEUIState_1 = require("../../layout/OEUIState");
var OEView = (function () {
    function OEView(appState, router, activatedRoute, viewId) {
        this.appState = appState;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.viewId = viewId;
    }
    OEView.prototype.isViewable = function (viewDefinition) {
        return viewDefinition && viewDefinition.isViewable();
    };
    OEView.prototype.ngOnInit = function () {
        console.log('view is now initiating....');
        this.initMainView();
    };
    /**
     * init a main view based on the route hitting the current page
     */
    OEView.prototype.initMainView = function (triggeredByRoute) {
        var mainViewLocal = null;
        if (this.activatedRoute.data) {
            mainViewLocal = new OELayoutConfig_1.OELayoutConfig(this.activatedRoute.snapshot.data['viewSelector'], [], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.Main);
        }
        if (mainViewLocal)
            this.appState.layoutState.setState(mainViewLocal, this.viewId);
        else
            this.appState.layoutState.setState(new OELayoutConfig_1.OELayoutConfig(null, [], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.Main), this.viewId);
    };
    OEView.viewSelector = 'oeView-' + funcs_1.Utils.NewGuid().toString();
    OEView = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: OEView.viewSelector,
            template: '<ng-content select="oeview-enforced"></ng-content>'
        }), 
        __metadata('design:paramtypes', [OEAppState_1.OEAppState, router_1.Router, router_1.ActivatedRoute, String])
    ], OEView);
    return OEView;
}());
exports.OEView = OEView;
//# sourceMappingURL=OEView.js.map
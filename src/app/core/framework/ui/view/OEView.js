"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OELayoutConfig_1 = require("../../layout/OELayoutConfig");
var funcs_1 = require("../../../utils/funcs");
var OEUIState_1 = require("../../layout/OEUIState");
var OEView = (function () {
    function OEView(appState, router, viewId) {
        this.appState = appState;
        this.router = router;
        this.viewId = viewId;
    }
    OEView.prototype.isViewable = function (viewDefinition) {
        return viewDefinition && viewDefinition.isViewable();
    };
    OEView.prototype.ngOnInit = function () {
        this.initMainView();
    };
    /**
     * init a main view based on the route hitting the current page
     */
    OEView.prototype.initMainView = function (triggeredByRoute) {
        var mainViewLocal = null;
        // if (mainViewLocal)
        //     return;
        if (this.appState.routeState) {
            var existingOERoute = triggeredByRoute || this.appState.routeState.findRouteByPath(document.location.pathname);
            if (!existingOERoute || !existingOERoute.page) {
                //give another try using wild card
                /**
                 ** validate   pathSec1/**,  pathSec1/pathSec2/**, ....  ,path/**  and **
                 */
                var segments = document.location.pathname.split('/');
                if (segments && segments.length > 0) {
                    var segmentGrowth = '';
                    //lowest priority check
                    existingOERoute = this.appState.routeState.findRouteByPath('**');
                    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
                        var seg = segments_1[_i];
                        segmentGrowth = segmentGrowth == '' ? seg : segmentGrowth + '/' + seg;
                        var higherPriorityCheck = this.appState.routeState.findRouteByPath(segmentGrowth + '/**');
                        if (higherPriorityCheck && higherPriorityCheck.page)
                            existingOERoute = higherPriorityCheck;
                    }
                }
            }
            if (existingOERoute) {
                mainViewLocal = new OELayoutConfig_1.OELayoutConfig(existingOERoute.viewSelector, [existingOERoute.page], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.Main);
            }
        }
        if (mainViewLocal)
            this.appState.layoutState.setState(mainViewLocal, this.viewId);
        else
            this.appState.layoutState.setState(new OELayoutConfig_1.OELayoutConfig(null, [], new OEUIState_1.OEUIState(true, false, false, null), OELayoutConfig_1.LayoutSection.Main), this.viewId);
    };
    OEView.viewSelector = 'oeView-' + funcs_1.Utils.NewGuid().toString();
    OEView = __decorate([
        core_1.Component({
            selector: OEView.viewSelector,
            template: '<ng-content select="oeview-enforced"></ng-content>'
        })
    ], OEView);
    return OEView;
}());
exports.OEView = OEView;
//# sourceMappingURL=OEView.js.map
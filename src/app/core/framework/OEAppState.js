/**
 * Created by mleader1 on 04/07/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OELayoutState_1 = require("./layout/OELayoutState");
var OERouteState_1 = require("./service/OERouteState");
var OEModuleState_1 = require("./service/OEModuleState");
var OEAppState = (function () {
    function OEAppState() {
        this.appName = "OElite Common Framework";
        this.layoutState = new OELayoutState_1.OELayoutState();
        this.routeState = new OERouteState_1.OERouteState();
        this.moduleState = new OEModuleState_1.OEModuleState(this.routeState);
    }
    OEAppState = __decorate([
        core_1.Injectable()
    ], OEAppState);
    return OEAppState;
}());
exports.OEAppState = OEAppState;
//# sourceMappingURL=OEAppState.js.map
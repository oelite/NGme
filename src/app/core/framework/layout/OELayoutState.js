"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mleader1 on 29/06/2016.
 */
var core_1 = require("@angular/core");
var async_1 = require("@angular/platform-browser-dynamic/src/facade/async");
var OELayoutStateChange = (function () {
    function OELayoutStateChange(viewId, updatedLayoutConfig) {
        this.viewId = viewId;
        this.updatedLayoutConfig = updatedLayoutConfig;
    }
    return OELayoutStateChange;
}());
exports.OELayoutStateChange = OELayoutStateChange;
var OELayoutState = (function () {
    function OELayoutState() {
        this.layouts = [];
        this.rootLayoutsUpdated$ = new async_1.EventEmitter();
    }
    OELayoutState.prototype.getState = function (layoutSection, viewId) {
        viewId = viewId || '';
        return this.layouts[viewId + layoutSection];
    };
    OELayoutState.prototype.setState = function (definition, viewId) {
        if (definition) {
            viewId = viewId || '';
            this.layouts[viewId + definition.layoutSection] = definition;
            this.rootLayoutsUpdated$.emit(new OELayoutStateChange(viewId, definition));
        }
    };
    OELayoutState.prototype.isViewable = function (layoutSet) {
        return layoutSet != null && layoutSet.isViewable();
    };
    OELayoutState = __decorate([
        core_1.Injectable()
    ], OELayoutState);
    return OELayoutState;
}());
exports.OELayoutState = OELayoutState;
//# sourceMappingURL=OELayoutState.js.map
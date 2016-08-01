"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var funcs_1 = require("../../utils/funcs");
/**
 * Created by mleader1 on 30/06/2016.
 */
var OEUIState = (function () {
    /**
     * define a UI state of a view/layout
     * @param visible - whether the viewComponent in the layout will be visible (if false it will not be rendered)
     * @param isFixed - whether the viewComponent in the layout will be static/fixed in position
     * @param isFloated - whether the viewComponent in the layout will be floated (overlay).
     * @param oeMetaData - any additional meta data to be passed in
     * @param stateName - state name (unique) to be applied, which will be stored in localStorage
     */
    function OEUIState(visible, isFixed, isFloated, stateName) {
        this.stateName = funcs_1.Utils.NewGuid().toString();
        this.visible = true;
        this.isFixed = false;
        this.isFloated = false;
        this.cssClass = '';
        this.cssInline = '';
        /**
         * define whether the ui element is currently active (i.e. opened, focused etc.)
         * @type {boolean}
         */
        this.isActive = false;
        this.stateName = stateName || this.stateName;
        this.visible = visible || this.visible;
        this.isFixed = isFixed || this.isFixed;
        this.isFloated = isFloated || this.isFloated;
    }
    OEUIState = __decorate([
        core_1.Injectable()
    ], OEUIState);
    return OEUIState;
}());
exports.OEUIState = OEUIState;
//# sourceMappingURL=OEUIState.js.map
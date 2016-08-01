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
/**
 * Created by mleader1 on 02/07/2016.
 */
var core_1 = require("@angular/core");
var framework_1 = require("../../../framework");
var OESection = (function () {
    function OESection() {
        /**
         * position of the side nav
         * @type {string}  - acceptable values: 'top', 'left', 'bottom', 'right'
         */
        this.side = 'left';
        /**
         * display mode of the side nav
         * @type {string} - acceptable values:
         *   'fixed' - display as a static layer (fixed position) on the screen
         *   'over' - display as an overlay layer (floating) above content on the screen
         *   'content' - display as part of content on the screen
         */
        this.mode = 'fixed';
        this.opened = true;
        this.side = this.side ? this.side.toLowerCase() : 'left';
        this.mode = this.mode ? this.mode.toLowerCase() : 'fixed';
    }
    OESection.prototype.toggle = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OESection.prototype, "side", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OESection.prototype, "mode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OESection.prototype, "opened", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', framework_1.OELayoutConfig)
    ], OESection.prototype, "layoutConfig", void 0);
    OESection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-section',
            template: "\n        <ng-content></ng-content>\n    ",
            styleUrls: ['section.css']
        }), 
        __metadata('design:paramtypes', [])
    ], OESection);
    return OESection;
}());
exports.OESection = OESection;
//# sourceMappingURL=section.js.map
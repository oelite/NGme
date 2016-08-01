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
var OE_JQuery_BackStretch = (function () {
    function OE_JQuery_BackStretch(el) {
        this.el = el.nativeElement;
    }
    OE_JQuery_BackStretch.prototype.ngOnInit = function () {
        $(this.target || 'body').backstretch(this.source, this.options);
    };
    __decorate([
        core_1.Input()
    ], OE_JQuery_BackStretch.prototype, "source");
    __decorate([
        core_1.Input()
    ], OE_JQuery_BackStretch.prototype, "target");
    __decorate([
        core_1.Input()
    ], OE_JQuery_BackStretch.prototype, "options");
    OE_JQuery_BackStretch = __decorate([
        //jquery support
        core_1.Component({
            selector: 'oe-backstretch',
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            template: ''
        })
    ], OE_JQuery_BackStretch);
    return OE_JQuery_BackStretch;
}());
exports.OE_JQuery_BackStretch = OE_JQuery_BackStretch;
//# sourceMappingURL=backstrech.js.map
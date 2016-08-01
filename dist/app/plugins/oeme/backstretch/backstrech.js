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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OE_JQuery_BackStretch.prototype, "source", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OE_JQuery_BackStretch.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OE_JQuery_BackStretch.prototype, "options", void 0);
    OE_JQuery_BackStretch = __decorate([
        //jquery support
        core_1.Component({
            selector: 'oe-backstretch',
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OE_JQuery_BackStretch);
    return OE_JQuery_BackStretch;
}());
exports.OE_JQuery_BackStretch = OE_JQuery_BackStretch;
//# sourceMappingURL=backstrech.js.map
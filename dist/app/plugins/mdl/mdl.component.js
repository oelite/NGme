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
 * Created by mleader1 on 01/07/2016.
 */
var core_1 = require("@angular/core");
var MdlUpgradeDirective = (function () {
    function MdlUpgradeDirective(elem) {
        this.elem = elem;
    }
    MdlUpgradeDirective.prototype.ngOnInit = function () {
        componentHandler.upgradeElements(this.elem.nativeElement);
    };
    MdlUpgradeDirective = __decorate([
        core_1.Directive({
            selector: '[mdlUpgrade], [mdl-upgrade]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlUpgradeDirective);
    return MdlUpgradeDirective;
}());
exports.MdlUpgradeDirective = MdlUpgradeDirective;
//# sourceMappingURL=mdl.component.js.map
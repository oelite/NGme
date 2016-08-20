/**
 * Created by mleader1 on 15/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OEmeBaseComponent = (function () {
    function OEmeBaseComponent(oeConfig) {
        this.oeConfig = oeConfig;
        oeConfig.apiBaseUrl = 'http://localhost:50080';
        oeConfig.apiClientId = "oe-api";
        oeConfig.notifyAppLoading("root");
    }
    OEmeBaseComponent.prototype.ngOnInit = function () {
        this.oeConfig.notifyAppLoadingComplete("root");
    };
    OEmeBaseComponent = __decorate([
        core_1.Component({
            selector: 'body',
            templateUrl: 'base.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../style/theme.scss', 'base.scss']
        })
    ], OEmeBaseComponent);
    return OEmeBaseComponent;
}());
exports.OEmeBaseComponent = OEmeBaseComponent;
//# sourceMappingURL=base.js.map
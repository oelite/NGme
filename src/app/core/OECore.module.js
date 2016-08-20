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
var core_1 = require("@angular/core");
var layout_module_1 = require("./ui/layout/layout.module");
var oeconfig_service_1 = require("./oeconfig.service");
var ApiGateway_1 = require("./api/http/ApiGateway");
var OECoreModule = (function () {
    function OECoreModule() {
    }
    OECoreModule = __decorate([
        core_1.NgModule({
            imports: [layout_module_1.OELayoutModule],
            providers: [
                oeconfig_service_1.OEUIConfig,
                oeconfig_service_1.OEConfig,
                ApiGateway_1.ApiGateway
            ],
            declarations: [],
            exports: layout_module_1.OELayout_DIRECTIVES.slice()
        })
    ], OECoreModule);
    return OECoreModule;
}());
exports.OECoreModule = OECoreModule;
//# sourceMappingURL=OECore.module.js.map
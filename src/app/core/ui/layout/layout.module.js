"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var layout_1 = require("./layout");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var OEComponents_1 = require("../../../components/OEComponents");
/**
 * Created by mleader1 on 15/08/2016.
 */
exports.OELayout_DIRECTIVES = [
    layout_1.OELayoutComponent
];
var OELayoutModule = (function () {
    function OELayoutModule() {
    }
    OELayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                OEComponents_1.OEComponentsModule
            ],
            declarations: [exports.OELayout_DIRECTIVES, layout_1.OESectionComponent],
            providers: [],
            exports: exports.OELayout_DIRECTIVES.slice()
        })
    ], OELayoutModule);
    return OELayoutModule;
}());
exports.OELayoutModule = OELayoutModule;
//# sourceMappingURL=layout.module.js.map
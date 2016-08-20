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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var OECore_module_1 = require("../../core/OECore.module");
var OEComponents_1 = require("../../components/OEComponents");
var notfound_page_1 = require("../../views/error/notfound.page");
var base_routing_1 = require("./base.routing");
var router_1 = require("@angular/router");
var login_page_1 = require("../../views/login/login.page");
exports.rootRoutes = base_routing_1.baseRoutes.slice();
var OE_MODULE_Base = (function () {
    function OE_MODULE_Base() {
    }
    OE_MODULE_Base = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule,
                router_1.RouterModule.forRoot(base_routing_1.baseRoutes)
            ],
            declarations: [notfound_page_1.NotFoundPage, login_page_1.LoginPage]
        })
    ], OE_MODULE_Base);
    return OE_MODULE_Base;
}());
exports.OE_MODULE_Base = OE_MODULE_Base;
//# sourceMappingURL=base.module.js.map
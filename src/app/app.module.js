"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var OECore_module_1 = require("./core/OECore.module");
var base_1 = require("./views/master/base");
var router_1 = require("@angular/router");
var OEComponents_1 = require("./components/OEComponents");
var dashboard_modules_1 = require("./modules/dashboard.modules");
var base_module_1 = require("./modules/base/base.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                //OEme Core Modules
                OECore_module_1.OECoreModule,
                //Shared Components
                OEComponents_1.OEComponentsModule,
                //Business Feature Components/Modules
                dashboard_modules_1.OE_MODULES_Dashboard,
                //OE Base module at the last priority
                base_module_1.OE_MODULE_Base,
            ],
            providers: [],
            declarations: [base_1.OEmeBaseComponent],
            entryComponents: [base_1.OEmeBaseComponent],
            bootstrap: [base_1.OEmeBaseComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
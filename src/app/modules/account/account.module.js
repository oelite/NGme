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
var core_1 = require("@angular/core");
var OECore_module_1 = require("../../core/OECore.module");
var OEComponents_1 = require("../../components/OEComponents");
var account_page_1 = require("../../views/account/account/account.page");
var OE_AccountModule = (function () {
    function OE_AccountModule() {
    }
    OE_AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                OECore_module_1.OECoreModule,
                OEComponents_1.OEComponentsModule
            ],
            declarations: [account_page_1.AccountPage],
            exports: [account_page_1.AccountPage]
        })
    ], OE_AccountModule);
    return OE_AccountModule;
}());
exports.OE_AccountModule = OE_AccountModule;
//# sourceMappingURL=account.module.js.map
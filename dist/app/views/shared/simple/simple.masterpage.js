/**
 * Created by mleader1 on 04/07/2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var OEView_1 = require("../../../core/framework/ui/view/OEView");
var framework_1 = require("../../../core/framework");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var OECore_module_1 = require("../../../core/framework/OECore.module");
var material_components_1 = require("../../../plugins/material.components");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var SimpleMasterPage = (function (_super) {
    __extends(SimpleMasterPage, _super);
    function SimpleMasterPage(appState, router, activatedRoute) {
        _super.call(this, appState, router, activatedRoute, 'oe.master.simple');
    }
    SimpleMasterPage.viewSelector = 'oe-masterpages.oe-pages-simple';
    SimpleMasterPage = __decorate([
        core_1.Component({
            selector: SimpleMasterPage.viewSelector,
            moduleId: module.id,
            templateUrl: 'simple.masterpage.html',
            styleUrls: ['simple.masterpage.css']
        }), 
        __metadata('design:paramtypes', [framework_1.OEAppState, router_1.Router, router_1.ActivatedRoute])
    ], SimpleMasterPage);
    return SimpleMasterPage;
}(OEView_1.OEView));
exports.SimpleMasterPage = SimpleMasterPage;
var SimpleMasterPageModule = (function () {
    function SimpleMasterPageModule() {
    }
    SimpleMasterPageModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule, router_1.RouterModule,
                OECore_module_1.OECoreModule, material_components_1.MATERIAL_DESIGN_MODULES
            ],
            providers: [cookies_service_1.CookieService],
            declarations: [
                SimpleMasterPage
            ],
            exports: [SimpleMasterPage]
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleMasterPageModule);
    return SimpleMasterPageModule;
}());
exports.SimpleMasterPageModule = SimpleMasterPageModule;
//# sourceMappingURL=simple.masterpage.js.map
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
var core_1 = require("@angular/core");
var OEView_1 = require("../../../core/framework/ui/view/OEView");
var SimpleMasterPage = (function (_super) {
    __extends(SimpleMasterPage, _super);
    function SimpleMasterPage(appState, router) {
        _super.call(this, appState, router, 'oe.master.simple');
    }
    SimpleMasterPage.viewSelector = 'oe-masterpages.oe-pages-simple';
    SimpleMasterPage = __decorate([
        core_1.Component({
            selector: SimpleMasterPage.viewSelector,
            moduleId: module.id,
            templateUrl: 'simple.masterpage.html',
            styleUrls: ['simple.masterpage.css']
        })
    ], SimpleMasterPage);
    return SimpleMasterPage;
}(OEView_1.OEView));
exports.SimpleMasterPage = SimpleMasterPage;
//# sourceMappingURL=simple.masterpage.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modules_1 = require("../../../../../custom/modules");
var funcs_1 = require("../../../utils/funcs");
/**
 * Created by mleader1 on 27/06/2016.
 * CosmosComponent Concepts:
 * 1. It's a container built to host all components within the app; i.e. from single login page to complicated
 * modularized multi-masterpages views.
 * 2. It should be able to understand all registered routes so to render components accordingly
 * 3. It should be considered to have a global setting section, working like a Commander panel.
 */
var CosmosComponent = (function () {
    function CosmosComponent(titleService, appState, router) {
        this.titleService = titleService;
        this.appState = appState;
        this.router = router;
        titleService.setTitle(appState.appName);
        // appState.onMasterPageChange$.subscribe((result)=> {
        //     this.reloadMasterPage(result);
        // });
        this.initModules();
    }
    CosmosComponent.prototype.initModules = function () {
        var modules = funcs_1.Utils.flatArrays(modules_1.OE_MODULES);
        for (var _i = 0, modules_2 = modules; _i < modules_2.length; _i++) {
            var module = modules_2[_i];
            this.appState.moduleState.registereModule(module);
        }
    };
    CosmosComponent = __decorate([
        core_1.Component({
            selector: 'body',
            moduleId: module.id,
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [],
            encapsulation: core_1.ViewEncapsulation.None,
            template: '<router-outlet></router-outlet>'
        })
    ], CosmosComponent);
    return CosmosComponent;
}());
exports.CosmosComponent = CosmosComponent;
//# sourceMappingURL=cosmos.js.map
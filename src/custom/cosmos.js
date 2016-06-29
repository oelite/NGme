"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var core_1 = require('@angular/core');
var framework_1 = require('../core/framework');
/**
 * Created by mleader1 on 27/06/2016.
 * CosmosComponent Concepts:
 * 1. It's a container built to host all components within the app; i.e. from single login page to complicated
 * modularized multi-layout views.
 * 2. It should be able to understand all registered routes so to render components accordingly
 * 3. It should be considered to have a global setting section, working like a Commander panel.
 */
var CosmosComponent = (function () {
    function CosmosComponent(appConfig, appLayout, titleService) {
        this.appConfig = appConfig;
        this.appLayout = appLayout;
        this.titleService = titleService;
        if (appConfig) {
            titleService.setTitle(appConfig.appName);
        }
    }

    CosmosComponent = __decorate([
        core_1.Component({
            selector: 'oe-NGme',
            directives: [],
            providers: [framework_1.OEmeConfig, framework_1.NGmeLayout],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './app/layouts/cosmos/cosmos.html'
        })
    ], CosmosComponent);
    return CosmosComponent;
}());
exports.CosmosComponent = CosmosComponent;
//# sourceMappingURL=cosmos.js.map
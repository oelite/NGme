"use strict";
/**
 * Created by mleader1 on 27/06/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var cosmos_component_1 = require('./../app/core/framework/ui/view/cosmos.ts');
var environment_1 = require('./environment');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
exports.NGmeModules = [];
var appRoutesProviders = [];
for (var _i = 0, NGmeModules_1 = exports.NGmeModules; _i < NGmeModules_1.length; _i++) {
    var module = NGmeModules_1[_i];
    if (module.routes && module.routes.length > 0) {
        appRoutesProviders.concat(module.routes);
    }
}
platform_browser_dynamic_1.bootstrap(cosmos_component_1.CosmosComponent, [
    platform_browser_1.Title, router_1.provideRouter(appRoutesProviders)
]);
//# sourceMappingURL=bootstrap.js.map
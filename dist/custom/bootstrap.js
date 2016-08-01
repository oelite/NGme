"use strict";
/**
 * Created by mleader1 on 27/06/2016.
 */
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var framework_1 = require("../app/core/framework");
var forms_1 = require("@angular/forms");
var oeConfig = require('./globals');
if (oeConfig.isProduction) {
    core_1.enableProdMode();
}
var appRoutesProviders = [];
var bootstrapProviders = [];
var bootstrapDirectives = [];
for (var _i = 0, _a = oeConfig.modules; _i < _a.length; _i++) {
    var module = _a[_i];
    //load routing configurations
    if (module.routes && module.routes.length > 0) {
        for (var _b = 0, _c = module.routes; _b < _c.length; _b++) {
            var oeRoute = _c[_b];
            var routerRoute = {
                name: oeRoute.name,
                path: oeRoute.path,
                component: oeRoute.master
            };
            appRoutesProviders.push(routerRoute);
            if (oeRoute.page)
                bootstrapDirectives.push(oeRoute.page);
        }
    }
}
bootstrapProviders = framework_1.Utils.mergeArray(bootstrapProviders, framework_1.Utils.flatArrays(oeConfig.registeredProviders));
bootstrapDirectives = framework_1.Utils.mergeArray(bootstrapDirectives, framework_1.Utils.flatArrays(oeConfig.registeredDirectives));
platform_browser_dynamic_1.bootstrap(oeConfig.projectInitiator, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    router_1.provideRouter(appRoutesProviders), bootstrapProviders, bootstrapDirectives
]);
//# sourceMappingURL=bootstrap.js.map
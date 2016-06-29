/**
 * Created by mleader1 on 27/06/2016.
 */
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";
import {Utils} from "../app/core/framework";
import oeConfig = require('./globals');

if (oeConfig.isProduction) {
    enableProdMode();
}

var appRoutesProviders:any[] = [];
var bootstrapProviders = [];
var bootstrapDirectives = [];

for (var module of oeConfig.registeredModules) {
    console.log(module.oeId);
    //load routing configurations
    if (module.routes && module.routes.length > 0) {
        appRoutesProviders = Utils.mergeArray(appRoutesProviders, module.routes, "path");
    }
    //load provider configurations
    if (module.moduleProviders && module.moduleProviders.length > 0) {
        var moduleProviders = Utils.flatArrays(module.moduleProviders);

        if (moduleProviders.length > 0)
            bootstrapProviders = Utils.mergeArray(bootstrapProviders, moduleProviders);
    }
    //load directive configurations
    if (module.moduleDirectives && module.moduleDirectives.length > 0) {
        var moduleDirectives = Utils.flatArrays(module.moduleDirectives);

        if (moduleDirectives.length > 0)
            bootstrapDirectives = Utils.mergeArray(bootstrapDirectives, moduleDirectives);
    }
}

bootstrapProviders = Utils.mergeArray(bootstrapProviders, Utils.flatArrays(oeConfig.registeredProviders));
bootstrapDirectives = Utils.mergeArray(bootstrapDirectives, Utils.flatArrays(oeConfig.registeredDirectives));

bootstrap(oeConfig.projectInitiator, [
    provideRouter(appRoutesProviders), bootstrapProviders
]);


/**
 * Created by mleader1 on 27/06/2016.
 */
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";
import {Utils} from "../app/core/framework";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import oeConfig = require('./globals');

if (oeConfig.isProduction) {
    enableProdMode();
}

var appRoutesProviders:any[] = [];
var bootstrapProviders = [];
var bootstrapDirectives = [];


for (var module of oeConfig.modules) {
    //load routing configurations
    if (module.routes && module.routes.length > 0) {
        for (var oeRoute of module.routes) {
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

bootstrapProviders = Utils.mergeArray(bootstrapProviders, Utils.flatArrays(oeConfig.registeredProviders));
bootstrapDirectives = Utils.mergeArray(bootstrapDirectives, Utils.flatArrays(oeConfig.registeredDirectives));

bootstrap(oeConfig.projectInitiator, [
    disableDeprecatedForms(),
    provideForms(),
    provideRouter(appRoutesProviders), bootstrapProviders, bootstrapDirectives
]);

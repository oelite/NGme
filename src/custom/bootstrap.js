"use strict";
/**
 * Created by mleader1 on 27/06/2016.
 */
// import {enableProdMode} from "@angular/core";
// import oeConfig = require('./globals');
var app_module_1 = require("../app/views/app.module");
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//
// if (oeConfig.isProduction) {
//     enableProdMode();
// }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=bootstrap.js.map
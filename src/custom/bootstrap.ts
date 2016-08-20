/**
 * Created by mleader1 on 27/06/2016.
 */
// import {enableProdMode} from "@angular/core";
// import oeConfig = require('./globals');
import {AppModule} from "../app/views/app.module";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//
// if (oeConfig.isProduction) {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule);

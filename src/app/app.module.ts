import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OECoreModule} from "./core/OECore.module";
import {OEmeBaseComponent} from "./views/master/base";
import {RouterModule} from "@angular/router";
import {OEComponentsModule} from "./components/OEComponents";
import {OE_MODULES_Dashboard} from "./modules/dashboard.modules";
import {OE_MODULE_Base} from "./modules/base/base.module";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        //OEme Core Modules
        OECoreModule,

        //Shared Components
        OEComponentsModule,

        //Business Feature Components/Modules
        OE_MODULES_Dashboard,

        //OE Base module at the last priority
        OE_MODULE_Base,

        //Root Routes
    ],
    providers: [],
    declarations: [OEmeBaseComponent],
    entryComponents: [OEmeBaseComponent],
    bootstrap: [OEmeBaseComponent]
})
export class AppModule {

}

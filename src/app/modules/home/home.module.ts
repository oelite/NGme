/**
 * Created by mleader1 on 15/08/2016.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {OECoreModule} from "../../core/OECore.module";
import {OEComponentsModule} from "../../components/OEComponents";
import {HomePage} from "../../views/home/home.page";
import {homeRoutes} from "./home.routing";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        OECoreModule,
        OEComponentsModule,
    ],
    declarations: [HomePage],
    exports: [HomePage]
})

export class OE_HomeModule {
}
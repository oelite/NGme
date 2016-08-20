/**
 * Created by mleader1 on 10/08/2016.
 */


import {NgModule, ElementRef, Component, provide} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from "@angular/http";
import {CosmosComponent} from "../core/framework/ui/view/cosmos";

import {OE_ACCORDION_PROVIDERS} from "../plugins/mdl/accordion/accordion";
import {OE_MODULES} from "../../custom/modules";
import {OECoreModule} from "../core/framework/OECore.module";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {OE_MD_MODULES} from "../plugins/material.components";
import {defaultRoutes} from "./default.routing";
import {RouterModule} from "@angular/router";
import {ErrorPage} from "./error/error.page";
import {HomePage} from "./home/home.page";

const registeredModules: any[] = [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    OECoreModule,
    OE_MD_MODULES
];

const registeredProviders: any[] = [
    CookieService,
    Title,
    Location,
];


@NgModule({
    imports: [
        registeredModules,
        RouterModule.forRoot(defaultRoutes),
        OE_MODULES,
    ]
    ,
    declarations: [CosmosComponent, HomePage, ErrorPage],
    providers: [registeredProviders],
    bootstrap: [CosmosComponent]
})
export class AppModule {

}

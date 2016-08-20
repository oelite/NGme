/**
 * Created by mleader1 on 15/08/2016.
 */


import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {OECoreModule} from "../../core/OECore.module";
import {OEComponentsModule} from "../../components/OEComponents";
import {NotFoundPage} from "../../views/error/notfound.page";
import {baseRoutes} from "./base.routing";
import {RouterModule} from "@angular/router";
import {LoginPage} from "../../views/login/login.page";

export const rootRoutes = [
    ...baseRoutes,
];


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        OECoreModule,
        OEComponentsModule,
        RouterModule.forRoot(baseRoutes)
    ],
    declarations: [NotFoundPage, LoginPage]
})

export class OE_MODULE_Base {
}
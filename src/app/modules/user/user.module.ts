/**
 * Created by mleader1 on 20/08/2016.
 */


import {NgModule} from "@angular/core";
import {OEComponentsModule} from "../../components/OEComponents";
import {OECoreModule} from "../../core/OECore.module";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {SignInService} from "./signin.service";

export const OEFeatures_User_PROVIDERS = [
    SignInService
];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        OECoreModule,
        OEComponentsModule,
    ],
    declarations: [],
    providers: [
        ...OEFeatures_User_PROVIDERS
    ],
    exports: []
})
export class OE_UserModule {

}
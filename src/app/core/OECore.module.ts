/**
 * Created by mleader1 on 15/08/2016.
 */


import {NgModule} from "@angular/core";
import {OELayoutModule, OELayout_DIRECTIVES} from "./ui/layout/layout.module";
import {OEConfig, OEUIConfig} from "./oeconfig.service";
import {ApiGateway} from "./api/http/ApiGateway";

@NgModule({
    imports: [OELayoutModule],
    providers: [
        OEUIConfig,
        OEConfig,
        ApiGateway
    ],
    declarations: [],
    exports: [
        ...OELayout_DIRECTIVES
    ]
})

export class OECoreModule {
}
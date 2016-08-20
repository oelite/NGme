/**
 * Created by mleader1 on 12/08/2016.
 */


import {NgModule} from "@angular/core";
import {OELayout} from "./ui/layout/layout";
import {OELayoutConfig} from "./layout/OELayoutConfig";
import {OELayoutState} from "./layout/OELayoutState";
import {OEAppState} from "./OEAppState";
import {OERouteState} from "./service/OERouteState";
import {OEUIState} from "./layout/OEUIState";
import {ApiGateway} from "./service/ApiGateway";
import {OESection} from "./ui/section/section";
import {OEView} from "./ui/view/OEView";
import {OEPartialView} from "./ui/view/OEPartialView";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {SignInService} from "../abstractions/users/signin.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [OESection, OEView, OEPartialView, OELayout],
    providers: [
        CookieService,
        //HTTP Services
        ApiGateway,
        SignInService,

        //Layout Services
        OELayoutState,
        OELayoutConfig,

        //State Services
        OEUIState,
        OERouteState,
        OEAppState,

    ],
    exports: [
        OESection, OEView, OEPartialView, OELayout,
    ]
})

export class OECoreModule {
}
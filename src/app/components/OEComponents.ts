/**
 * Created by mleader1 on 15/08/2016.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {OEJqueryBackstretchModule} from "./backstretch/backstrech";
import {OE_MD_AccordionModule} from "./mdl/accordion/accordion";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {MdButtonModule} from "@angular2-material/button";
import {MdButtonToggleModule} from "@angular2-material/button-toggle";
import {MdCardModule} from "@angular2-material/card";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdGridListModule} from "@angular2-material/grid-list";
import {MdIconModule} from "@angular2-material/icon";
import {MdInputModule} from "@angular2-material/input";
import {MdListModule} from "@angular2-material/list";
import {MdMenuModule} from "@angular2-material/menu";
import {MdProgressBarModule} from "@angular2-material/progress-bar";
import {MdProgressCircleModule} from "@angular2-material/progress-circle";
import {MdRadioModule} from "@angular2-material/radio";
import {MdRippleModule, OverlayModule, PortalModule, RtlModule} from "@angular2-material/core";
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdSliderModule} from "@angular2-material/slider";
import {MdSlideToggleModule} from "@angular2-material/slide-toggle";
import {MdTabsModule} from "@angular2-material/tabs";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdTooltipModule} from "@angular2-material/tooltip";
import {SimpleNotificationsModule} from "angular2-notifications";

require("hammerjs");

export const GOOGLE_MATERIAL_DESIGN_MODULES = [
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    //MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
];

export const THIRD_PARTY_UI_MODULES = [
    SimpleNotificationsModule
];

export const OE_MD_MODULES = [
    OEJqueryBackstretchModule,
    OE_MD_AccordionModule
];

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule,
        ...GOOGLE_MATERIAL_DESIGN_MODULES,
        ...THIRD_PARTY_UI_MODULES,

        ...OE_MD_MODULES
    ],
    providers: [CookieService],
    exports: [
        ...GOOGLE_MATERIAL_DESIGN_MODULES,
        ...THIRD_PARTY_UI_MODULES,
        ...OE_MD_MODULES
    ]
})

export class OEComponentsModule {
}
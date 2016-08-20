import {OE_JQuery_BackStretch, OEmeJqueryBackstretch} from "./oeme/backstretch/backstrech";
import {MdlSnackbar, OEmeMdlSnackbarModule} from "./mdl/mdl-snackbar/snackbar";
import {OE_ACCORDION_DIRECTIVES, OEmeAccordionModule} from "./mdl/accordion/accordion";

import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {
    MdCoreModule,
    RtlModule,
    PortalModule,
    MdRippleModule,
    OverlayModule,
    MdLineModule
} from '@angular2-material/core';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdIconModule} from '@angular2-material/icon';
import {MdInputModule} from '@angular2-material/input';
import {MdListModule} from '@angular2-material/list';
import {MdMenuModule} from '@angular2-material/menu';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdSliderModule} from '@angular2-material/slider';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MdlUpgradeDirective, OEmeMdlUpgradeDirectiveModule} from "./mdl/mdl.component";

//export * from './materials/index';


export * from './mdl/mdl.component';


//OElite Custom Plugins
export * from './mdl/accordion/accordion';

export * from './oeme/backstretch/backstrech';
export * from './mdl/mdl-snackbar/snackbar';


export const OE_MATERIAL_DESIGN_MODULES = [
    OEmeMdlSnackbarModule,
    OEmeMdlUpgradeDirectiveModule,

    OEmeJqueryBackstretch,

    OEmeAccordionModule,
];


export const MATERIAL_DESIGN_MODULES = [
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

export const OE_MD_MODULES = [
    MATERIAL_DESIGN_MODULES,
    OE_MATERIAL_DESIGN_MODULES
]



/**
 * Created by mleader1 on 15/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var backstrech_1 = require("./backstretch/backstrech");
var accordion_1 = require("./mdl/accordion/accordion");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var button_1 = require("@angular2-material/button");
var button_toggle_1 = require("@angular2-material/button-toggle");
var card_1 = require("@angular2-material/card");
var checkbox_1 = require("@angular2-material/checkbox");
var grid_list_1 = require("@angular2-material/grid-list");
var icon_1 = require("@angular2-material/icon");
var input_1 = require("@angular2-material/input");
var list_1 = require("@angular2-material/list");
var menu_1 = require("@angular2-material/menu");
var progress_bar_1 = require("@angular2-material/progress-bar");
var progress_circle_1 = require("@angular2-material/progress-circle");
var radio_1 = require("@angular2-material/radio");
var core_2 = require("@angular2-material/core");
var sidenav_1 = require("@angular2-material/sidenav");
var slider_1 = require("@angular2-material/slider");
var slide_toggle_1 = require("@angular2-material/slide-toggle");
var tabs_1 = require("@angular2-material/tabs");
var toolbar_1 = require("@angular2-material/toolbar");
var tooltip_1 = require("@angular2-material/tooltip");
var angular2_notifications_1 = require("angular2-notifications");
require("hammerjs");
exports.GOOGLE_MATERIAL_DESIGN_MODULES = [
    button_1.MdButtonModule,
    button_toggle_1.MdButtonToggleModule,
    card_1.MdCardModule,
    checkbox_1.MdCheckboxModule,
    //MdDialogModule,
    grid_list_1.MdGridListModule,
    icon_1.MdIconModule,
    input_1.MdInputModule,
    list_1.MdListModule,
    menu_1.MdMenuModule,
    progress_bar_1.MdProgressBarModule,
    progress_circle_1.MdProgressCircleModule,
    radio_1.MdRadioModule,
    core_2.MdRippleModule,
    sidenav_1.MdSidenavModule,
    slider_1.MdSliderModule,
    slide_toggle_1.MdSlideToggleModule,
    tabs_1.MdTabsModule,
    toolbar_1.MdToolbarModule,
    tooltip_1.MdTooltipModule,
    core_2.OverlayModule,
    core_2.PortalModule,
    core_2.RtlModule,
];
exports.THIRD_PARTY_UI_MODULES = [
    angular2_notifications_1.SimpleNotificationsModule
];
exports.OE_MD_MODULES = [
    backstrech_1.OEJqueryBackstretchModule,
    accordion_1.OE_MD_AccordionModule
];
var OEComponentsModule = (function () {
    function OEComponentsModule() {
    }
    OEComponentsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule].concat(exports.GOOGLE_MATERIAL_DESIGN_MODULES, exports.THIRD_PARTY_UI_MODULES, exports.OE_MD_MODULES),
            providers: [cookies_service_1.CookieService],
            exports: exports.GOOGLE_MATERIAL_DESIGN_MODULES.concat(exports.THIRD_PARTY_UI_MODULES, exports.OE_MD_MODULES)
        })
    ], OEComponentsModule);
    return OEComponentsModule;
}());
exports.OEComponentsModule = OEComponentsModule;
//# sourceMappingURL=OEComponents.js.map
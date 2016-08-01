/**
 * Created by mleader1 on 28/06/2016.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var modules_1 = require("./modules");
var cosmos_1 = require("../app/core/framework/ui/view/cosmos");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var OE_SERVICES = require("../app/core/services");
var OE_CORE = require("../app/core/components");
var OE_MD = require("../app/plugins/material.components");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("angular2-cookie/core");
__export(require('./modules'));
exports.appName = "OElite Common UI Framework";
exports.loginPath = '/login';
exports.isProduction = false;
//export const apiBaseUrl:string = 'http://10.10.100.50:50080';
exports.apiBaseUrl = 'http://localhost:50080';
exports.apiClientId = "oe-api";
exports.projectInitiator = cosmos_1.CosmosComponent;
exports.isAppLoading = false;
exports.spinLogo = false;
exports.modules = modules_1.OE_MODULES;
exports.registeredProviders = [
    platform_browser_1.Title,
    http_1.HTTP_PROVIDERS,
    Location,
    OE_SERVICES.ApiGateway,
    OE_SERVICES.SignInService,
    OE_SERVICES.ALL_SERVICES,
    OE_MD.MdIconRegistry,
    core_2.CookieService
];
exports.registeredDirectives = [
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_CORE.OE_CORE_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_ICON_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_BUTTON_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_CARD_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_CHECKBOX_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_GRID_LIST_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_INPUT_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_LIST_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_PROGRESS_BAR_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_PROGRESS_CIRCLE_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_RADIO_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_SIDENAV_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_SLIDE_TOGGLE_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_TABS_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MD_TOOLBAR_DIRECTIVES, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.MdlUpgradeDirective, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: OE_MD.OE_MD_DIRECTIVES, multi: true }),
];
//# sourceMappingURL=globals.js.map
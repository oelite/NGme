/**
 * Created by mleader1 on 28/06/2016.
 */

import {IOEModule} from "../app/core/framework";
import {OEMODULES} from "./modules";
import {CosmosComponent} from "./cosmos";
import {Title} from "@angular/platform-browser";
import {ApiGateway} from "../app/core/framework/service/ApiGateway";
import {HTTP_PROVIDERS} from "@angular/http";
import * as OE_SERVICES from "../app/core/services";
import * as OE_CORE from "../app/core/components";
import * as OE_MD from "../app/plugins/material.components";
import {PLATFORM_DIRECTIVES, provide} from "@angular/core";
export * from './modules';


export const appName:string = "OElite Common UI Framework";
export const loginPath:string = '/login';
export const isProduction:boolean = false;

export const projectInitiator = CosmosComponent;
export const isAppLoading = false;
export const spinLogo = false;
export const registeredModules:IOEModule[] = OEMODULES;
export const registeredProviders:any[] = [
    Title,
    HTTP_PROVIDERS,
    ApiGateway,
    OE_SERVICES.SignInService,
    OE_SERVICES.UserService,
    OE_SERVICES.OELayoutState,
    OE_SERVICES.OEUIState,
    OE_SERVICES.OELayoutConfig,
    OE_MD.MdIconRegistry
];

export const registeredDirectives:any[] = [
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_ICON_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_BUTTON_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_CARD_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_CHECKBOX_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_GRID_LIST_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_INPUT_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_LIST_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_PROGRESS_BAR_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_PROGRESS_CIRCLE_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_RADIO_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_SIDENAV_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_SLIDE_TOGGLE_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_TABS_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MD_TOOLBAR_DIRECTIVES, multi: true}),

    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.MdlUpgradeDirective, multi: true}),

    provide(PLATFORM_DIRECTIVES, {useValue: OE_MD.OE_MD_DIRECTIVES, multi: true}),

    provide(PLATFORM_DIRECTIVES, {useValue: OE_CORE.OE_CORE_DIRECTIVES, multi: true})
];

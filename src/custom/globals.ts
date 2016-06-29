/**
 * Created by mleader1 on 28/06/2016.
 */

import {IOEmeModule} from "../app/core/framework";
import {OEMODULES} from "./modules";
import {HTTP_PROVIDERS} from "@angular/http";
import * as OE_MD from "../app/plugins/material.components";
import {CosmosComponent} from "./cosmos";
import {Title} from "@angular/platform-browser";
import {HomeComponent} from "../app/views/home/home.component";

export * from './modules';

export const appName:string = "OElite Common UI Framework";
export const isProduction:boolean = false;

export const projectInitiator = CosmosComponent;
export const projectHomepage = new HomeComponent();

export const registeredModules:IOEmeModule[] = OEMODULES;
export const registeredProviders:any[] = [
    Title,
    HTTP_PROVIDERS
];
export const registeredDirectives:any[] = [
    OE_MD
];

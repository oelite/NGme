/**
 * Created by mleader1 on 28/06/2016.
 */

import {OE_MODULES} from "./modules";
import {CosmosComponent} from "../app/core/framework/ui/view/cosmos";

export * from './modules';


export const appName: string = "OElite Common UI Framework";
export const loginPath: string = '/login';
export const isProduction: boolean = false;

//export const apiBaseUrl:string = 'http://10.10.100.50:50080';
export const apiBaseUrl: string = 'http://localhost:50080';
export const apiClientId: string = "oe-api";
export const projectInitiator = CosmosComponent;
export const isAppLoading = false;
export const spinLogo = false;

export const modules = OE_MODULES;


import {OELayout} from "./framework/ui/layout/layout";
import {OELayoutState} from "./framework/layout/OELayoutState";
import {OELayoutConfig} from "./framework/layout/OELayoutConfig";
import {OEUIState} from "./framework/layout/OEUIState";
import {OEView} from "./framework/ui/view/OEView";
import {OERouteState} from "./framework/service/OERouteState";
import {OEModuleState} from "./framework/service/OEModuleState";
import {OEAppState} from "./framework/OEAppState";
import {ApiGateway} from "./framework/service/ApiGateway";

/**
 * Created by mleader1 on 29/06/2016.
 */

/** Core*/


export * from './framework/OEAppState';
export * from './framework/layout/OELayoutState';
export * from './framework/layout/OEUIState';
export * from './framework/layout/OELayoutConfig';
export * from './framework/ui/view/OEView';
export * from './framework/service/OEModuleState';
export * from './framework/OEAppState';

export * from './framework/service/ApiGateway';

/** Users */
//export * from './abstractions/users/user.service';
export * from './abstractions/users/signin.service';

export const LAYOUT_SERVICES = [
    OELayout, OELayoutState,
    OELayoutConfig,
    OEView
];
export const STATE_SERVICES = [
    OEUIState,
    OERouteState,
    OEModuleState,
    OEAppState
];
export const HTTP_SERVICES = [
    ApiGateway
];
export const ENTITY_SERVICES = [];
export const ALL_SERVICES = [
    LAYOUT_SERVICES, STATE_SERVICES,
    HTTP_SERVICES
];


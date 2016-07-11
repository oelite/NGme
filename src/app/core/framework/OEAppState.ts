/**
 * Created by mleader1 on 04/07/2016.
 */

import {Injectable} from "@angular/core";
import {OELayoutState} from "./layout/OELayoutState";
import {OERouteState} from "./service/OERouteState";
import {OEModuleState} from "./service/OEModuleState";

@Injectable()
export class OEAppState {
    public layoutState:OELayoutState;
    public routeState:OERouteState;
    public moduleState:OEModuleState;
    public appName:string = "OElite Common Framework";

    constructor() {
        this.layoutState = new OELayoutState();
        this.routeState = new OERouteState();
        this.moduleState = new OEModuleState(this.routeState);
    }

}
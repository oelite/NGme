/**
 * Created by mleader1 on 04/07/2016.
 */

import {Injectable} from "@angular/core";
import {OELayoutState} from "./layout/OELayoutState";
import {OERouteState} from "./service/OERouteState";

@Injectable()
export class OEAppState {
    public layoutState:OELayoutState;
    public appName:string = "OElite Common Framework";

    constructor() {
        this.layoutState = new OELayoutState();
    }

}
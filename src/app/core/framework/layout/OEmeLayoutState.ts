/**
 * Created by mleader1 on 29/06/2016.
 */
import {Injectable} from "@angular/core";
import {OEmeLayoutDefinition} from "../IOEmeLayout";


@Injectable()
//extend OEmeLayoutState if your class is specifically used for defining a layout
export class OEmeLayoutState {
    public layouts:Array<OEmeLayoutDefinition>;

    constructor() {
        this.layouts = [];
    }

    isViewable(layoutSet:OEmeLayoutDefinition):boolean {
        return layoutSet != null && layoutSet.isViewable();
    }

}

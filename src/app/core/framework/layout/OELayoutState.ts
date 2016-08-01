/**
 * Created by mleader1 on 29/06/2016.
 */
import {Injectable} from "@angular/core";
import {OELayoutConfig, LayoutSection} from "./OELayoutConfig";
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";

export class OELayoutStateChange {
    constructor(public viewId:string, public updatedLayoutConfig:OELayoutConfig) {
    }
}

@Injectable()
//extend OELayoutState if your class is specifically used for defining a layout
export class OELayoutState {
    public layouts:Array<OELayoutConfig>;

    public rootLayoutsUpdated$:EventEmitter<OELayoutStateChange>;

    constructor() {
        this.layouts = [];
        this.rootLayoutsUpdated$ = new EventEmitter<OELayoutStateChange>();
    }

    public getState(layoutSection:LayoutSection, viewId:string):OELayoutConfig {
        viewId = viewId || '';
        return this.layouts[viewId + layoutSection];

    }

    public setState(definition:OELayoutConfig, viewId:string):void {

        if (definition) {
            viewId = viewId || '';
            this.layouts[viewId + definition.layoutSection] = definition;
            this.rootLayoutsUpdated$.emit(new OELayoutStateChange(viewId, definition));
        }
    }


    isViewable(layoutSet:OELayoutConfig):boolean {
        return layoutSet != null && layoutSet.isViewable();
    }

}

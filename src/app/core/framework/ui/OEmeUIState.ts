import {Injectable} from "@angular/core";
import {Utils} from "../../utils/funcs";
/**
 * Created by mleader1 on 30/06/2016.
 */

@Injectable()
export class OEmeUIState {

    public stateName:string = Utils.NewGuid().toString();
    public visible:boolean = true;
    public isFixed:boolean = false;
    public isFloated:boolean = false;

    /**
     * define a UI state of a view/layout
     * @param stateName - state name (unique) to be applied, which will be stored in localStorage
     * @param visible - whether the viewComponent in the layout will be visible (if false it will not be rendered)
     * @param isFixed - whether the viewComponent in the layout will be static/fixed in position
     * @param isFloated - whether the viewComponent in the layout will be floated (overlay).
     * @param oeMetaData - any additional meta data to be passed in
     */
    constructor(stateName?:string, visible?:boolean, isFixed?:boolean, isFloated?:boolean) {
        this.stateName = stateName || this.stateName;
        this.visible = visible;
        this.isFixed = isFixed;
        this.isFloated = isFloated;

    }

}
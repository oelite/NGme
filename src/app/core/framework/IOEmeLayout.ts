import {OEmeUIState} from "./ui/OEmeUIState";
import {Injectable} from "@angular/core";
import {Utils} from "../utils/funcs";
/**
 * Created by mleader1 on 27/06/2016.
 */

export const OEmeBaseLayoutIdConstants = {
    TopOuter: "oe.base.top.outer",
    TopInner: "oe.base.top.inner",
    LeftOuter: "oe.base.left.outer",
    LeftInner: "oe.base.left.inner",
    RightOuter: "oe.base.right.outer",
    RightInner: "oe.base.right.inner",
    BottomOuter: "oe.base.bottom.outer",
    BottomInner: "oe.base.bottom.inner",
    Main: "oe.base.main"
};


@Injectable()
export class OEmeLayoutViewDefinition {
    public viewSelector:string = 'unnamed-view';
    public viewDirectives:any[] = [];
    public viewProviders:any[] = [];

    /**
     * Create new state for a layout definition
     * @param viewSelector - the view Component's selector name
     * @param viewDirectives - required directives for the viewComponent in the layout
     * @param viewProviders - required providers for the viewComponent
     */
    constructor(viewSelector?:string, viewDirectives?:any[], viewProviders?:any[]) {
        this.viewSelector = viewSelector || this.viewSelector;
        this.viewDirectives = viewDirectives || this.viewDirectives;
        this.viewProviders = viewProviders || this.viewProviders;
    }
}


@Injectable()
export class OEmeLayoutDefinition {
    isViewable():boolean {
        return this.uiState
            && this.uiState.visible === true
            && this.viewDefinition.viewSelector != null
            && this.viewDefinition.viewSelector.length > 0;
    };

    public layoutId:string = Utils.NewGuid().toString();
    public uiState:OEmeUIState = new OEmeUIState();
    public viewDefinition:OEmeLayoutViewDefinition = new OEmeLayoutViewDefinition();

    constructor(layoutId?:string, uiState?:OEmeUIState, viewDefinition?:OEmeLayoutViewDefinition) {
        this.layoutId = layoutId || this.layoutId;
        this.uiState = uiState || this.uiState;
        this.viewDefinition = viewDefinition || this.viewDefinition;
    }
}


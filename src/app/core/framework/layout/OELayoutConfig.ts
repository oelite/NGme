import {OEUIState} from "./OEUIState";
import {Injectable} from "@angular/core";
/**
 * Created by mleader1 on 27/06/2016.
 */

export enum  LayoutSection
{
    TopOuter = 10, // "oe.base.top.outer",
    TopInner = 20, //"oe.base.top.inner",
    LeftOuter = 30, //"oe.base.left.outer",
    LeftInner = 40, //"oe.base.left.inner",
    RightOuter = 50, //"oe.base.right.outer",
    RightInner = 60, //"oe.base.right.inner",
    BottomOuter = 70, //"oe.base.bottom.outer",
    BottomInner = 80, //"oe.base.bottom.inner",
    Main = 0 //"oe.base.main"
}


@Injectable()
export class OELayoutConfig {
    isViewable():boolean {
        return this.uiState
            && this.uiState.visible === true
            && this.viewSelector != null
            && this.viewSelector.length > 0;
    };

    public layoutSection:LayoutSection = LayoutSection.Main;
    public uiState:OEUIState = new OEUIState();


    public viewSelector:string = 'unnamed-view';
    public viewDirectives:any[] = [];
    public viewProviders:any[] = [];


    /**
     *
     * @param viewSelector - the view Component's selector name
     * @param viewDirectives - required directives for the viewComponent in the layout
     * @param viewProviders - required providers for the viewComponent
     * @param uiState
     * @param layoutSection -
     */
    constructor(viewSelector?:string, viewDirectives?:any[], uiState?:OEUIState, layoutSection?:LayoutSection, viewProviders?:any[]) {
        this.layoutSection = layoutSection || this.layoutSection;
        this.uiState = uiState || this.uiState;

        this.viewSelector = viewSelector || this.viewSelector;
        this.viewDirectives = viewDirectives || this.viewDirectives;
        this.viewProviders = viewProviders || this.viewProviders;
    }
}


import {OELayoutState} from "../../layout/OELayoutState";
import {Component, Input} from "@angular/core";
import {OELayoutConfig, LayoutSection} from "../../layout/OELayoutConfig";
import {Utils} from "../../../utils/funcs";

/**
 * Created by mleader1 on 28/06/2016.
 */
export interface IOEView {
    layoutState:OELayoutState;
}

@Component({
    selector: 'oeView',
    template: '<ng-content></ng-content>'
})


export class OEView implements IOEView {

    @Input()
    public parentView:OEView = null;
    @Input()
    public viewId:string = Utils.NewGuid().toString();
    public layoutState:OELayoutState = new OELayoutState();

    constructor(appLayoutState?:OELayoutState, parentView?:OEView) {
        this.layoutState = appLayoutState || this.layoutState;
        this.parentView = parentView || this.parentView;
        if (!parentView)
            this.viewId = '';
    }

    public isViewable(viewDefinition:OELayoutConfig):boolean {
        return viewDefinition && viewDefinition.isViewable();
    }

    public getLayoutDefinition(layoutSection:LayoutSection):OELayoutConfig {
        return this.layoutState.getState(layoutSection, this.viewId);
    }

    public setLayoutDefinition(definition:OELayoutConfig):void {
        this.layoutState.setState(definition, this.viewId);
    }

    public get topOuterView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.TopOuter);
    }

    public set topOuterView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get mainView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.Main);
    }

    public set mainView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get bottomInnerView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.BottomInner);
    }

    public set bottomInnerView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get bottomOuterView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.BottomOuter);
    }

    public set bottomOuterView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get rightInnerView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.RightInner);
    }

    public set rightInnerView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get rightOuterView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.RightOuter);
    }

    public set rightOuterView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get leftInnerView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.LeftInner);
    }

    public set leftInnerView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get leftOuterView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.LeftOuter);
    }

    public set leftOuterView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    public get topInnerView():OELayoutConfig {
        return this.getLayoutDefinition(LayoutSection.TopInner);
    }

    public set topInnerView(value:OELayoutConfig) {
        this.setLayoutDefinition(value);
    }

    ngOnChangess(changes) {
        console.log(changes);
    }

}
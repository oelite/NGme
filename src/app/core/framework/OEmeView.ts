import {OEmeLayoutState} from "./layout/OEmeLayoutState";
import {Component} from "@angular/core";
import {OEmeLayoutDefinition, OEmeBaseLayoutIdConstants} from "./IOEmeLayout";

/**
 * Created by mleader1 on 28/06/2016.
 */
export interface IOEmeView {
    layoutState:OEmeLayoutState;
}

@Component({
    selector: 'oeView',
    template: '<ng-content></ng-content>'
})


export class OEmeView implements IOEmeView {


    public layoutState:OEmeLayoutState = new OEmeLayoutState();

    private _topOuterView:OEmeLayoutDefinition;
    private _topInnerView:OEmeLayoutDefinition;
    private _leftOuterView:OEmeLayoutDefinition;
    private _leftInnerView:OEmeLayoutDefinition;
    private _rightOuterView:OEmeLayoutDefinition;
    private _rightInnerView:OEmeLayoutDefinition;
    private _bottomOuterView:OEmeLayoutDefinition;
    private _bottomInnerView:OEmeLayoutDefinition;
    private _mainView:OEmeLayoutDefinition;

    constructor() {
    }

    public isViewable(viewDefinition:OEmeLayoutDefinition):boolean {
        return viewDefinition && viewDefinition.isViewable();
    }

    public getLayoutDefinition(layoutId:string):OEmeLayoutDefinition {
        return this.layoutState.layouts.filter((item)=>item.layoutId === layoutId)[0];
    }

    public setLayoutDefinition(layoutId:string, definition:OEmeLayoutDefinition):void {
        this.layoutState.layouts[layoutId] = definition;
    }

    get topOuterView():OEmeLayoutDefinition {
        if (!this._topOuterView)
            this._topOuterView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.TopOuter);
        if (!this._topOuterView)
            this._topOuterView = new OEmeLayoutDefinition();
        return this._topOuterView;
    }

    set topOuterView(value:OEmeLayoutDefinition) {
        this._topOuterView = value || new OEmeLayoutDefinition();
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.TopOuter, value);
    }

    get mainView():OEmeLayoutDefinition {
        if (!this._mainView)
            this._mainView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.Main);
        if (!this._mainView)
            this._mainView = new OEmeLayoutDefinition();
        return this._mainView;
    }

    set mainView(value:OEmeLayoutDefinition) {
        this._mainView = value || new OEmeLayoutDefinition();
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.Main, value);
    }

    get bottomInnerView():OEmeLayoutDefinition {
        if (!this._bottomInnerView)
            this._bottomInnerView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.BottomInner);
        if (!this._bottomInnerView)
            this._bottomInnerView = new OEmeLayoutDefinition();
        return this._bottomInnerView;
    }

    set bottomInnerView(value:OEmeLayoutDefinition) {
        this._bottomInnerView = value || new OEmeLayoutDefinition();
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.BottomInner, value);
    }

    get bottomOuterView():OEmeLayoutDefinition {
        if (!this._bottomOuterView)
            this._bottomOuterView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.BottomOuter);
        return this._bottomOuterView;
    }

    set bottomOuterView(value:OEmeLayoutDefinition) {
        this._bottomOuterView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.BottomOuter, value);
    }

    get rightInnerView():OEmeLayoutDefinition {
        if (!this._rightInnerView)
            this._rightInnerView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.RightInner);
        return this._rightInnerView;
    }

    set rightInnerView(value:OEmeLayoutDefinition) {
        this._rightInnerView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.RightInner, value);
    }

    get rightOuterView():OEmeLayoutDefinition {
        if (!this._rightOuterView)
            this._rightOuterView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.RightOuter);
        return this._rightOuterView;
    }

    set rightOuterView(value:OEmeLayoutDefinition) {
        this._rightOuterView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.RightOuter, value);
    }

    get leftInnerView():OEmeLayoutDefinition {
        if (!this._leftInnerView)
            this._leftInnerView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.LeftInner);
        return this._leftInnerView;
    }

    set leftInnerView(value:OEmeLayoutDefinition) {
        this._leftInnerView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.LeftInner, value);
    }

    get leftOuterView():OEmeLayoutDefinition {
        if (!this._leftOuterView)
            this._leftOuterView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.LeftOuter);
        return this._leftOuterView;
    }

    set leftOuterView(value:OEmeLayoutDefinition) {
        this._leftOuterView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.LeftOuter, value);
    }

    get topInnerView():OEmeLayoutDefinition {
        if (!this._topInnerView)
            this._topInnerView = this.getLayoutDefinition(OEmeBaseLayoutIdConstants.TopInner);
        return this._topInnerView;
    }

    set topInnerView(value:OEmeLayoutDefinition) {
        this._topInnerView = value;
        this.setLayoutDefinition(OEmeBaseLayoutIdConstants.TopInner, value);
    }


}
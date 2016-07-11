import {Component, Input, Output} from "@angular/core";
import {OELayoutConfig, LayoutSection} from "../../layout/OELayoutConfig";
import {Utils} from "../../../utils/funcs";
import {IOERoute} from "../../IOEModule";
import {OEUIState} from "../../layout/OEUIState";
import {OEAppState} from "../../OEAppState";

/**
 * Created by mleader1 on 28/06/2016.
 */
export interface IOEView {
    appState:OEAppState;
}

@Component({
    selector: OEView.viewSelector,
    template: '<ng-content select="oeview-enforced"></ng-content>'
})


export class OEView implements IOEView {
    public static viewSelector:string = 'oeView-' + Utils.NewGuid().toString();


    @Input()
    public parentView:OEView = null;
    @Output()
    public view:OEView = this;
    @Input()
    public viewId:string = Utils.NewGuid().toString();

    constructor(public appState:OEAppState) {

        if (!this.parentView)
            this.viewId = '';
        this.view = this;
        if (this.viewId == '')
            this.initMainView();
    }

    public isViewable(viewDefinition:OELayoutConfig):boolean {
        return viewDefinition && viewDefinition.isViewable();
    }

    public getLayoutDefinition(layoutSection:LayoutSection):OELayoutConfig {
        return this.appState.layoutState.getState(layoutSection, this.viewId);
    }

    public setLayoutDefinition(definition:OELayoutConfig):void {
        this.appState.layoutState.setState(definition, this.viewId);
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

    /**
     * init a main view based on the route hitting the current page
     */
    private initMainView(triggeredByRoute?:IOERoute) {
        var mainViewLocal = this.mainView;
        // if (mainViewLocal)
        //     return;

        if (this.appState.routeState) {
            var existingOERoute:IOERoute = triggeredByRoute || this.appState.routeState.findRouteByPath(document.location.pathname);

            if (!existingOERoute || !existingOERoute.page) {
                //give another try using wild card
                /**
                 ** validate   pathSec1/**,  pathSec1/pathSec2/**, ....  ,path/**  and **
                 */
                var segments = document.location.pathname.split('/');
                if (segments && segments.length > 0) {
                    var segmentGrowth = '';
                    //lowest priority check
                    existingOERoute = this.appState.routeState.findRouteByPath('**');
                    for (var seg of segments) {
                        segmentGrowth = segmentGrowth == '' ? seg : segmentGrowth + '/' + seg;
                        var higherPriorityCheck = this.appState.routeState.findRouteByPath(segmentGrowth + '/**');
                        if (higherPriorityCheck && higherPriorityCheck.page)
                            existingOERoute = higherPriorityCheck;
                    }
                }

            }
            if (!mainViewLocal || (existingOERoute && existingOERoute.page && existingOERoute.viewSelector != mainViewLocal.viewSelector)) {
                mainViewLocal = new OELayoutConfig(existingOERoute.viewSelector, [existingOERoute.page], new OEUIState(true, false, false, null), LayoutSection.Main);
                this.mainView = mainViewLocal;
            }
        }

    }

}
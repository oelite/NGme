import {Component, Output} from "@angular/core";
import {OELayoutConfig, LayoutSection} from "../../layout/OELayoutConfig";
import {Utils} from "../../../utils/funcs";
import {OEAppState} from "../../OEAppState";
import {Router} from "@angular/router";
import {IOERoute} from "../../IOEModule";
import {OEUIState} from "../../layout/OEUIState";

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

    constructor(public appState:OEAppState, public router:Router, public viewId:string) {

    }

    public isViewable(viewDefinition:OELayoutConfig):boolean {
        return viewDefinition && viewDefinition.isViewable();
    }

    ngOnInit() {
        this.initMainView();
    }


    /**
     * init a main view based on the route hitting the current page
     */
    private initMainView(triggeredByRoute?:IOERoute) {
        var mainViewLocal = null;
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
            if (existingOERoute) {
                mainViewLocal = new OELayoutConfig(existingOERoute.viewSelector, [existingOERoute.page], new OEUIState(true, false, false, null), LayoutSection.Main);
            }
        }
        if (mainViewLocal)
            this.appState.layoutState.setState(mainViewLocal, this.viewId);
        else
            this.appState.layoutState.setState(new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.Main), this.viewId);

    }
}
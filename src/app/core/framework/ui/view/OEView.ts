import {Component, Output} from "@angular/core";
import {OELayoutConfig, LayoutSection} from "../../layout/OELayoutConfig";
import {Utils} from "../../../utils/funcs";
import {OEAppState} from "../../OEAppState";
import {Router, ActivatedRoute, RouterStateSnapshot} from "@angular/router";
import {IOERoute} from "../../IOEModule";
import {OEUIState} from "../../layout/OEUIState";

/**
 * Created by mleader1 on 28/06/2016.
 */
export interface IOEView {
    appState: OEAppState;
}

@Component({
    moduleId: module.id,
    selector: OEView.viewSelector,
    template: '<ng-content select="oeview-enforced"></ng-content>'
})


export class OEView implements IOEView {
    public static viewSelector: string = 'oeView-' + Utils.NewGuid().toString();

    constructor(public appState: OEAppState, public router: Router, public activatedRoute: ActivatedRoute, public viewId: string) {

    }

    public isViewable(viewDefinition: OELayoutConfig): boolean {
        return viewDefinition && viewDefinition.isViewable();
    }

    ngOnInit() {
        console.log('view is now initiating....');
        this.initMainView();
    }


    /**
     * init a main view based on the route hitting the current page
     */
    private initMainView(triggeredByRoute?: IOERoute) {
        var mainViewLocal = null;
        if(this.activatedRoute.data){
            mainViewLocal = new OELayoutConfig(this.activatedRoute.snapshot.data['viewSelector'], [], new OEUIState(true, false, false, null), LayoutSection.Main);
        }
        if (mainViewLocal)
            this.appState.layoutState.setState(mainViewLocal, this.viewId);
        else
            this.appState.layoutState.setState(new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.Main), this.viewId);

    }
}
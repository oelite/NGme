/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {OEPartialView} from "../../../core/framework";
import {SignInService} from "../../../core/services";
import {LayoutSection, OELayoutConfig} from "../../../core/framework/layout/OELayoutConfig";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";
import {OEAppState} from "../../../core/framework/OEAppState";
import {OEUIState} from "../../../core/framework/layout/OEUIState";

@Component({
    moduleId: module.id,
    selector: DashboardMasterPage.viewSelector,
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.masterpage.html',
    styleUrls: ['dashboard.masterpage.css'],
    directives: [OEPartialView],
    providers: []
})

export class DashboardMasterPage extends AuthorizedView {
    public static viewSelector:string = "oe-masterpages.oe-pages-dashboard";

    constructor(public appState:OEAppState,
                private signinManager:SignInService) {
        super(appState, signinManager);

        this.initView();
        // if (signinManager.isAuthenticated())
        //     userManager.getCurrentUser().subscribe(result=> {
        //         this.currentUser = result;
        //     }, (error:any)=> {
        //         console.warn("failed retrieving user details.");
        //         console.dir(error);
        //     });
    }

    initView():void {
        if (!this.topOuterView)
            this.topOuterView = new OELayoutConfig(null, [], new OEUIState(true, true, false, null), LayoutSection.TopOuter);

        if (!this.leftOuterView)
            this.leftOuterView = new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.LeftOuter);
        if (!this.rightInnerView)
            this.rightInnerView = new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.RightInner);

    }

    toggleLeftNav(e) {
        var leftOuterView = this.leftOuterView;
        if (leftOuterView) {
            if (e) {
                if (e.checked)
                    leftOuterView.uiState.isFixed = true;
                else
                    leftOuterView.uiState.isFixed = false;
            }
            leftOuterView.uiState.isActive = !leftOuterView.uiState.isActive;
            this.leftOuterView = leftOuterView;
        }
        else
            console.log('unexpected event');
    }

    toggleRightNav(e) {
        var rightInnerView = this.rightInnerView;
        if (rightInnerView) {
            if (e) {
                if (e.checked)
                    rightInnerView.uiState.isFixed = true;
                else
                    rightInnerView.uiState.isFixed = false;
            }
            rightInnerView.uiState.isActive = !rightInnerView.uiState.isActive;
            this.rightInnerView = rightInnerView;
        }
        else
            console.log('unexpected event');
    }

}
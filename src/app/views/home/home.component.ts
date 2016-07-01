/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {OEmeLayoutDefinition, OEmeUIState, OEmePartialView} from "../../core/framework";
import {SignInService, UserService} from "../../core/services";
import {User} from "../../core/abstractions/entities";
import {DashboardTopNavComponent} from "../shared/dashboard-topnav/dashboardTopNav.component";
import {DashboardLeftNavComponent} from "../shared/dashboard-leftnav/dashboardLeftNav.component";
import {OEmeLayoutViewDefinition, OEmeBaseLayoutIdConstants} from "../../core/framework/IOEmeLayout";
import {OEmeLayoutState} from "../../core/framework/layout/OEmeLayoutState";
import {OEmeView} from "../../core/framework/OEmeView";

@Component({
    moduleId: module.id,
    selector: '.oe-layout',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../layouts/fullLayout.html',
    directives: [OEmePartialView],
    providers: []
})

export class HomeComponent extends OEmeView {
    currentUser:User;

    constructor(public parentLayoutState:OEmeLayoutState,
                private signinManager:SignInService, private userManager:UserService) {
        super();
        //this is the root page, so assign states to current page
        this.layoutState = parentLayoutState || this.layoutState;
        this.initView();

        if (signinManager.isAuthenticated())
            userManager.getCurrentUser().subscribe(result=> {
                this.currentUser = result;
            }, (error:any)=> {
                console.warn("failed retrieving user details.");
                console.dir(error);
            });

        console.log(this.layoutState);
    }

    initView():void {
        this.topOuterView = new OEmeLayoutDefinition(OEmeBaseLayoutIdConstants.TopOuter,
            new OEmeUIState(OEmeBaseLayoutIdConstants.TopOuter, true, true, false),
            new OEmeLayoutViewDefinition('oe-topOuterNav', [DashboardTopNavComponent]));

        this.leftOuterView = new OEmeLayoutDefinition(OEmeBaseLayoutIdConstants.LeftOuter,
            new OEmeUIState(OEmeBaseLayoutIdConstants.LeftOuter, true, true, true),
            new OEmeLayoutViewDefinition('oe-leftOuterNav', [DashboardLeftNavComponent]));

        this.rightOuterView = new OEmeLayoutDefinition(OEmeBaseLayoutIdConstants.RightOuter,
            new OEmeUIState(OEmeBaseLayoutIdConstants.RightOuter, true, true, true),
            new OEmeLayoutViewDefinition('oe-rightOuterNav', [DashboardLeftNavComponent]));

        this.leftInnerView = new OEmeLayoutDefinition(OEmeBaseLayoutIdConstants.LeftInner,
            new OEmeUIState(OEmeBaseLayoutIdConstants.LeftInner, true, false, false),
            new OEmeLayoutViewDefinition('oe-leftInnerNav', [DashboardLeftNavComponent]));

        this.rightInnerView = new OEmeLayoutDefinition(OEmeBaseLayoutIdConstants.RightInner,
            new OEmeUIState(OEmeBaseLayoutIdConstants.RightInner, true, false, false),
            new OEmeLayoutViewDefinition('oe-rightInnerNav', [DashboardLeftNavComponent]));
    }

}
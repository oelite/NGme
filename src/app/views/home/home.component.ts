/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {
    OEmeView,
    NavLayoutSet,
    OEmeLayoutSelector,
    OEmeLayoutDirectives,
    OEmeLayoutProviders
} from "../../core/framework";
import {DashboardTopNavComponent} from "../shared/dashboard-topnav/dashboardTopNav.component";
@Component({
    moduleId: module.id,
    selector: OEmeLayoutSelector,
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../layouts/fullLayout.html',
    directives: [OEmeLayoutDirectives],
    providers: [OEmeLayoutProviders]
})

export class HomeComponent extends OEmeView {
    initTopOutNav():void {
        this.topOuterNav = new NavLayoutSet({
            visible: true,
            contentViewSelector: 'oe-topNav',
            contentViewDirectives: [DashboardTopNavComponent],
            contentViewProviders: []
        });
    }
}
/**
 * Created by mleader1 on 29/06/2016.
 */
import {Component} from "@angular/core";
import {User} from "../../../core/abstractions/users/user";
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {UserService} from "../../../core/abstractions/users/user.service";
import {OEmeView} from "../../../core/framework/OEmeView";
import {OEmeLayoutState} from "../../../core/framework/layout/OEmeLayoutState";

@Component({
    moduleId: module.id,
    selector: 'oe-topOuterNav',
    templateUrl: 'dashboardTopNav.component.html',
    styleUrls: ['dashboardTopNav.component.css']
})

export class DashboardTopNavComponent extends OEmeView {
    private currentUser:User;

    constructor(public parentLayoutState:OEmeLayoutState, private signinManager:SignInService, private userManager:UserService) {
        super();
        userManager.getCurrentUser().subscribe(result=> {
            this.currentUser = result;
        });
    }
}
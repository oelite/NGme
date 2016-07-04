/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component, ViewEncapsulation} from "@angular/core";
import {OEPartialView} from "../../../core/framework/ui/view/OEPartialView";
import {UserService} from "../../../core/abstractions/users/user.service";
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {OELayoutState} from "../../../core/framework/layout/OELayoutState";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";
@Component({
    moduleId: module.id,
    selector: "page[class='oe-pages-website']",
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.css'],
    directives: [OEPartialView],
    providers: []
})

export class WebsitePageView extends AuthorizedView {

    constructor(private appLayoutState:OELayoutState,
                private signinManager:SignInService, private userManager:UserService) {
        super(appLayoutState, signinManager, userManager);

        if (signinManager.isAuthenticated())
            userManager.getCurrentUser().subscribe(result=> {
                this.currentUser = result;
            }, (error:any)=> {
                console.warn("failed retrieving user details.");
                console.dir(error);
            });
    }

}
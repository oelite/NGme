/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component, ViewEncapsulation} from "@angular/core";
import {OEPartialView} from "../../../core/framework/ui/view/OEPartialView";
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";
import {OEAppState} from "../../../core/framework/OEAppState";
@Component({
    moduleId: module.id,
    selector: WebsitePageView.viewSelector,
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.masterpage.html',
    styleUrls: ['dashboard.page.css'],
    directives: [OEPartialView],
    providers: []
})

export class WebsitePageView extends AuthorizedView {
    public static viewSelector = "page[class='oe-pages-website']";

    constructor(appState:OEAppState,
                private signinManager:SignInService) {
        super(appState, signinManager);
    }

}
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
    selector: WebsitePage.viewSelector,
    //encapsulation: ViewEncapsulation.None,
    templateUrl: 'website.page.html',
    styleUrls: ['website.page.css'],
    directives: [OEPartialView],
    providers: []
})

export class WebsitePage {
    public static viewSelector = "oe-page.oe-page-website";

    constructor(appState:OEAppState,
                private signinManager:SignInService) {
        console.log('website page called');
    }

}
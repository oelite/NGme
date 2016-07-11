/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component} from "@angular/core";
import {DashboardMasterPage} from "../../masterpages/dashboard/dashboard.masterpage";
import {OEAppState} from "../../../core/framework/OEAppState";
import {SignInService} from "../../../core/abstractions/users/signin.service";

@Component({
    selector: HomePage.viewSelector,
    moduleId: module.id,
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.css']
})

export class HomePage extends DashboardMasterPage {
    public static viewSelector:string = 'oe-page.oe-page-home';

    constructor(appState:OEAppState,
                signinManager:SignInService) {
        super(appState, signinManager);
        console.log('home page called');
    }

}
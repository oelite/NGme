/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component} from "@angular/core";
import {OEAppState} from "../../core/framework";
import {SignInService} from "../../core/services";

@Component({
    selector: HomePage.viewSelector,
    moduleId: module.id,
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.css']
})

export class HomePage {
    public static viewSelector: string = 'oe-page.oe-page-home';

    constructor(appState: OEAppState) {
    }

}
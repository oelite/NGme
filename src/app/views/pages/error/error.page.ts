/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component} from "@angular/core";
import {SimpleMasterPage} from "../../masterpages/simple/simple.masterpage";
import {OEAppState} from "../../../core/framework/OEAppState";
@Component({
    selector: ErrorPage.viewSelector,
    moduleId: module.id,
    templateUrl: 'error.page.html',
    styleUrls: ['error.page.css']
})

export class ErrorPage {
    public static viewSelector:string = 'oe-page.oe-page-error';

    private errorText = "error";

    constructor(appState:OEAppState) {
        //super(appState)
        //console.log(this.mainView);
        // if (this.mainView) {
        //
        //     //this.mainView by default should be inherited from OEView therefore containing current page details
        //     // if (this.mainView.viewDirectives && this.mainView.viewDirectives[0] == ErrorPage)
        //     //     this.errorText = "error";
        //     // else
        //     //     this.errorText = "Opps, an error...";
        //
        // }
        // else if (!window.location.pathname.startsWith('error'))
        this.errorText = "404";
    }
}
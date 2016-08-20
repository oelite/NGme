/**
 * Created by mleader1 on 04/07/2016.
 */

import {Component, NgModule} from "@angular/core";
import {OEView} from "../../../core/framework/ui/view/OEView";
import {OEAppState} from "../../../core/framework";
import {Router, ActivatedRoute, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {OECoreModule} from "../../../core/framework/OECore.module";
import {MATERIAL_DESIGN_MODULES} from "../../../plugins/material.components";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({
    selector: SimpleMasterPage.viewSelector,
    moduleId: module.id,
    templateUrl: 'simple.masterpage.html',
    styleUrls: ['simple.masterpage.css']
})
export class SimpleMasterPage extends OEView {
    public static viewSelector: string = 'oe-masterpages.oe-pages-simple';

    constructor(appState: OEAppState, router: Router, activatedRoute: ActivatedRoute) {
        super(appState, router, activatedRoute, 'oe.master.simple');
    }
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, RouterModule,
        OECoreModule, MATERIAL_DESIGN_MODULES
    ],
    providers: [CookieService],
    declarations: [
        SimpleMasterPage
    ],
    exports: [SimpleMasterPage]
})

export class SimpleMasterPageModule {
}
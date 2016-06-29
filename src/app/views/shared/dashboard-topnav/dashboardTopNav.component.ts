/**
 * Created by mleader1 on 29/06/2016.
 */
import {Component} from "@angular/core";
import {MdToolbar, MdButton, MdSlideToggle} from "../../../plugins/material.components";

@Component({
    moduleId: module.id,
    selector: 'oe-topNav',
    templateUrl: 'dashboardTopNav.component.html',
    directives: [MdToolbar, MdButton, MdSlideToggle]
})

export class DashboardTopNavComponent {
    constructor() {
    }
}
/**
 * Created by mleader1 on 04/07/2016.
 */

import {Component} from "@angular/core";
import {OEView} from "../../../core/framework/ui/view/OEView";
import {OEAppState} from "../../../core/framework";

@Component({
    selector: SimpleMasterPage.viewSelector,
    moduleId: module.id,
    templateUrl: 'simple.masterpage.html',
    styleUrls: ['simple.masterpage.css']
})
export class SimpleMasterPage extends OEView {
    public static viewSelector:string = 'oe-masterpages.oe-pages-simple';

    constructor(appState:OEAppState) {
        super(appState);
    }
}
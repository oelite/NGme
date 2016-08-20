import {Component, ViewEncapsulation} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {OE_MODULES} from "../../../../../custom/modules";
import {OEAppState} from "../../OEAppState";
import {Utils} from "../../../utils/funcs";
import {CookieService} from "angular2-cookie/services/cookies.service";

/**
 * Created by mleader1 on 27/06/2016.
 * CosmosComponent Concepts:
 * 1. It's a container built to host all components within the app; i.e. from single login page to complicated
 * modularized multi-masterpages views.
 * 2. It should be able to understand all registered routes so to render components accordingly
 * 3. It should be considered to have a global setting section, working like a Commander panel.
 */

@Component({
    selector: 'body',
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    template: '<router-outlet></router-outlet>'
})


export class CosmosComponent {

    constructor(private titleService: Title, private appState: OEAppState, private cookies: CookieService) {
        titleService.setTitle(appState.appName);
        console.log('even I can have it');
        console.log(cookies);
    }


}

import {Component, ViewEncapsulation} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Title} from "@angular/platform-browser";
import oeConfig = require("./globals");

/**
 * Created by mleader1 on 27/06/2016.
 * CosmosComponent Concepts:
 * 1. It's a container built to host all components within the app; i.e. from single login page to complicated
 * modularized multi-layout views.
 * 2. It should be able to understand all registered routes so to render components accordingly
 * 3. It should be considered to have a global setting section, working like a Commander panel.
 */

@Component({
    selector: 'body',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    encapsulation: ViewEncapsulation.None,
    template: '<router-outlet></router-outlet>'
})


export class CosmosComponent {

    constructor(private titleService:Title) {
        titleService.setTitle(oeConfig.appName);
    }

    ngOnChanges(changes) {
        console.log('cosmos changes');
        console.log(changes);
    }

}

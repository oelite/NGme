import {Component, ViewEncapsulation} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {OE_MODULES} from "../../../../../custom/modules";
import {OEAppState} from "../../OEAppState";
import {Utils} from "../../../utils/funcs";

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
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    encapsulation: ViewEncapsulation.None,
    template: '<router-outlet></router-outlet>'
})


export class CosmosComponent {

    constructor(private titleService:Title, public appState:OEAppState, private router:Router) {
        titleService.setTitle(appState.appName);
        // appState.onMasterPageChange$.subscribe((result)=> {
        //     this.reloadMasterPage(result);
        // });
        this.initModules();
    }

    initModules() {
        var modules = Utils.flatArrays(OE_MODULES);
        for (var module of modules) {
            this.appState.moduleState.registereModule(module);
        }
    }

    // reloadMasterPage(route:IOERoute):void {
    //     this.router.navigateByUrl(route.path);
    //
    // }

}

/**
 * Created by mleader1 on 29/06/2016.
 */

import {IOEmeModule} from "../../core/framework";
import {HomeComponent} from "../../views/home/home.component";

export class DefaultModule implements IOEmeModule {

    moduleId = module.id;
    oeId = "modules.default";
    oeVersion = "1.0.0";
    moduleProviders:any[] = [];
    moduleDirectives:any[] = [];
    routes = [
        {
            path: '',
            name: 'home',
            component: HomeComponent
        }
    ];


}
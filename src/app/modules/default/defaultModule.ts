/**
 * Created by mleader1 on 29/06/2016.
 */

import {IOEModule} from "../../core/framework";
import {HomePageView} from "../../views/pages/dashboard/dashboard.page";

export class DefaultModule implements IOEModule {

    moduleId = module.id;
    oeId = "modules.default";
    oeVersion = "1.0.0";
    moduleProviders:any[] = [];
    moduleDirectives:any[] = [];
    routes = [
        {
            path: '',
            name: 'base',
            component: HomePageView
        }
    ];


}
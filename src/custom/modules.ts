import {MODULE_Default} from "../app/views/default.module";
import {MODULE_Account} from "../app/views/account/account.module";
import {IOEModule} from "../app/core/framework/IOEModule";
import {DashboardMasterPageModule} from "../app/views/shared/dashboard/dashboard.masterpage";
import {SimpleMasterPageModule} from "../app/views/shared/simple/simple.masterpage";
/**
 * Created by mleader1 on 28/06/2016.
 */

//this config file is used to load all modules that should be used in the application


//Instantiate a global module serivce and pre-configure all required modules
export const OE_MODULES: any[] = [
    DashboardMasterPageModule,
    SimpleMasterPageModule,
    
    MODULE_Account
];


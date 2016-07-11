import {MODULES_ERRORHANDLING} from "../app/modules/errorHandlings/errorHandlingModule";
import {MODULES_DEFAULT} from "../app/modules/default/default.module";
import {MODULES_Account} from "../app/modules/account/account.module";
/**
 * Created by mleader1 on 28/06/2016.
 */

//this config file is used to load all modules that should be used in the application


//Instantiate a global module serivce and pre-configure all required modules
export const OE_MODULES = [
    MODULES_DEFAULT,
    MODULES_ERRORHANDLING,

    MODULES_Account,
];
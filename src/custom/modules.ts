import {IOEModule} from "../app/core/framework/IOEModule";
import {ErrorHandlingModule} from "../app/modules/errorHandlings/errorHandlingModule";
import {DefaultModule} from "../app/modules/default/defaultModule";
/**
 * Created by mleader1 on 28/06/2016.
 */

//this config file is used to load all modules that should be used in the application
export const OEMODULES:IOEModule[] = [
    new DefaultModule,
    new ErrorHandlingModule,
];
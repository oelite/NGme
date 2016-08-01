"use strict";
var errorHandlingModule_1 = require("../app/modules/errorHandlings/errorHandlingModule");
var default_module_1 = require("../app/modules/default/default.module");
var account_module_1 = require("../app/modules/account/account.module");
/**
 * Created by mleader1 on 28/06/2016.
 */
//this config file is used to load all modules that should be used in the application
//Instantiate a global module serivce and pre-configure all required modules
exports.OE_MODULES = [
    default_module_1.MODULES_DEFAULT,
    errorHandlingModule_1.MODULES_ERRORHANDLING,
    account_module_1.MODULES_Account,
];
//# sourceMappingURL=modules.js.map
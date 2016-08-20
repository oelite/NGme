"use strict";
var account_module_1 = require("../app/views/account/account.module");
var dashboard_masterpage_1 = require("../app/views/shared/dashboard/dashboard.masterpage");
var simple_masterpage_1 = require("../app/views/shared/simple/simple.masterpage");
/**
 * Created by mleader1 on 28/06/2016.
 */
//this config file is used to load all modules that should be used in the application
//Instantiate a global module serivce and pre-configure all required modules
exports.OE_MODULES = [
    dashboard_masterpage_1.DashboardMasterPageModule,
    simple_masterpage_1.SimpleMasterPageModule,
    account_module_1.MODULE_Account
];
//# sourceMappingURL=modules.js.map
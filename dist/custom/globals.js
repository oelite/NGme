/**
 * Created by mleader1 on 28/06/2016.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var modules_1 = require("./modules");
var cosmos_1 = require("../app/core/framework/ui/view/cosmos");
__export(require('./modules'));
exports.appName = "OElite Common UI Framework";
exports.loginPath = '/login';
exports.isProduction = false;
//export const apiBaseUrl:string = 'http://10.10.100.50:50080';
exports.apiBaseUrl = 'http://localhost:50080';
exports.apiClientId = "oe-api";
exports.projectInitiator = cosmos_1.CosmosComponent;
exports.isAppLoading = false;
exports.spinLogo = false;
exports.modules = modules_1.OE_MODULES;
//# sourceMappingURL=globals.js.map
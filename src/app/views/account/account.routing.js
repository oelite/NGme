"use strict";
var dashboard_masterpage_1 = require("../shared/dashboard/dashboard.masterpage");
var login_page_1 = require("../login/login.page");
var account_page_1 = require("./account.page");
var funcs_1 = require("../../core/utils/funcs");
/**
 * Created by mleader1 on 12/08/2016.
 */
exports.accountRoutes = [
    {
        path: 'login', component: dashboard_masterpage_1.DashboardMasterPage,
        data: { viewSelector: login_page_1.LoginPage.viewSelector, page: login_page_1.LoginPage }
    },
    {
        path: 'account', component: dashboard_masterpage_1.DashboardMasterPage,
        data: { viewSelector: account_page_1.AccountPage.viewSelector, page: account_page_1.AccountPage }
    }
];
exports.accountRoutingDirectives = funcs_1.Utils.ExtractOEViewDirectivesFromRoutes(exports.accountRoutes);
//# sourceMappingURL=account.routing.js.map
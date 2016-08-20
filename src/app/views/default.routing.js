"use strict";
var dashboard_masterpage_1 = require("./shared/dashboard/dashboard.masterpage");
var home_page_1 = require("./home/home.page");
var simple_masterpage_1 = require("./shared/simple/simple.masterpage");
var error_page_1 = require("./error/error.page");
/**
 * Created by mleader1 on 12/08/2016.
 */
exports.defaultRoutes = [
    {
        path: '', component: dashboard_masterpage_1.DashboardMasterPage,
        data: { viewSelector: home_page_1.HomePage.viewSelector, page: home_page_1.HomePage }
    },
    {
        path: '**', component: simple_masterpage_1.SimpleMasterPage,
        data: { viewSelector: error_page_1.ErrorPage.viewSelector, page: error_page_1.ErrorPage }
    }
];
//# sourceMappingURL=default.routing.js.map
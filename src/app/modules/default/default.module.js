/**
 * Created by mleader1 on 29/06/2016.
 */
"use strict";
var dashboard_masterpage_1 = require("../../views/masterpages/dashboard/dashboard.masterpage");
var error_page_1 = require("../../views/pages/error/error.page");
var home_page_1 = require("../../views/pages/home/home.page");
var simple_masterpage_1 = require("../../views/masterpages/simple/simple.masterpage");
var website_page_1 = require("../../views/pages/website/website.page");
exports.MODULES_DEFAULT = {
    oeId: "modules.default",
    oeVersion: "1.0.0",
    routes: [
        {
            path: '',
            name: 'oe.base',
            viewSelector: home_page_1.HomePage.viewSelector,
            page: home_page_1.HomePage,
            master: dashboard_masterpage_1.DashboardMasterPage,
            useAsDefault: true
        },
        {
            path: 'abc',
            name: 'oe.abc',
            viewSelector: website_page_1.WebsitePage.viewSelector,
            page: website_page_1.WebsitePage,
            master: dashboard_masterpage_1.DashboardMasterPage
        },
        {
            path: '**',
            name: 'oe.wildcard',
            viewSelector: error_page_1.ErrorPage.viewSelector,
            page: error_page_1.ErrorPage,
            master: simple_masterpage_1.SimpleMasterPage
        }
    ]
};
//# sourceMappingURL=default.module.js.map
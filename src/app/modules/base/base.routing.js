"use strict";
var notfound_page_1 = require("../../views/error/notfound.page");
var login_page_1 = require("../../views/login/login.page");
/**
 * Created by mleader1 on 15/08/2016.
 */
exports.baseRoutes = [{
        path: "login",
        component: login_page_1.LoginPage
    }, {
        path: "**",
        component: notfound_page_1.NotFoundPage
    }];
//# sourceMappingURL=base.routing.js.map
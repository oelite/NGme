"use strict";
var login_page_1 = require("../../views/pages/login/login.page");
var simple_masterpage_1 = require("../../views/masterpages/simple/simple.masterpage");
/**
 * Created by mleader1 on 04/07/2016.
 */
exports.MODULES_Account = {
    oeId: "modules.account",
    oeVersion: "1.0.0",
    routes: [
        {
            path: 'login',
            name: 'account.login',
            viewSelector: login_page_1.LoginPage.viewSelector,
            page: login_page_1.LoginPage,
            master: simple_masterpage_1.SimpleMasterPage
        }
    ]
};
//# sourceMappingURL=account.module.js.map
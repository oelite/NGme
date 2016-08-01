"use strict";
var error_page_1 = require("../../views/pages/error/error.page");
var simple_masterpage_1 = require("../../views/masterpages/simple/simple.masterpage");
exports.MODULES_ERRORHANDLING = {
    oeId: "app.modules.errorHandling",
    oeVersion: "1.0.0",
    routes: [
        {
            path: 'error',
            name: 'general error',
            viewSelector: error_page_1.ErrorPage.viewSelector,
            page: error_page_1.ErrorPage,
            master: simple_masterpage_1.SimpleMasterPage
        }
    ]
};
//# sourceMappingURL=errorHandlingModule.js.map
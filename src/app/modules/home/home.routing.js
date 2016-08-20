/**
 * Created by mleader1 on 15/08/2016.
 */
"use strict";
var home_page_1 = require("../../views/home/home.page");
exports.homeRoutes = [
    {
        path: '',
        component: home_page_1.HomePage
    },
    {
        path: 'dashboard',
        component: home_page_1.HomePage
    }
];
//# sourceMappingURL=home.routing.js.map
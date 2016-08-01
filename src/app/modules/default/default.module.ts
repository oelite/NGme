/**
 * Created by mleader1 on 29/06/2016.
 */

import {DashboardMasterPage} from "../../views/masterpages/dashboard/dashboard.masterpage";
import {ErrorPage} from "../../views/pages/error/error.page";
import {HomePage} from "../../views/pages/home/home.page";
import {SimpleMasterPage} from "../../views/masterpages/simple/simple.masterpage";
import {WebsitePage} from "../../views/pages/website/website.page";

export const MODULES_DEFAULT = {
    oeId: "modules.default",
    oeVersion: "1.0.0",
    routes: [
        {
            path: '',
            name: 'oe.base',
            viewSelector: HomePage.viewSelector,
            page: HomePage,
            master: DashboardMasterPage,
            useAsDefault: true
        },
        {
            path: 'abc',
            name: 'oe.abc',
            viewSelector: WebsitePage.viewSelector,
            page: WebsitePage,
            master: DashboardMasterPage,
        }
        ,
        {
            path: '**',
            name: 'oe.wildcard',
            viewSelector: ErrorPage.viewSelector,
            page: ErrorPage,
            master: SimpleMasterPage
        }
    ]
};
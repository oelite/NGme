import {Routes, RouterModule} from "@angular/router";
import {DashboardMasterPage} from "./shared/dashboard/dashboard.masterpage";
import {HomePage} from "./home/home.page";
import {SimpleMasterPage} from "./shared/simple/simple.masterpage";
import {ErrorPage} from "./error/error.page";
import {Utils} from "../core/utils/funcs";
/**
 * Created by mleader1 on 12/08/2016.
 */


export const defaultRoutes: Routes = [
    {
        path: '', component: DashboardMasterPage,
        data: {viewSelector: HomePage.viewSelector, page: HomePage}
    },
    {
        path: '**', component: SimpleMasterPage,
        data: {viewSelector: ErrorPage.viewSelector, page: ErrorPage}
    }
];


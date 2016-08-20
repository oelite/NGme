import {Routes} from "@angular/router";
import {DashboardMasterPage} from "../shared/dashboard/dashboard.masterpage";
import {LoginPage} from "../login/login.page";
import {AccountPage} from "./account.page";
import {Utils} from "../../core/utils/funcs";
/**
 * Created by mleader1 on 12/08/2016.
 */



export const accountRoutes: Routes = [
    {
        path: 'login', component: DashboardMasterPage,
        data: {viewSelector: LoginPage.viewSelector, page: LoginPage}
    },
    {
        path: 'account', component: DashboardMasterPage,
        data: {viewSelector: AccountPage.viewSelector, page: AccountPage}
    }
];
export const accountRoutingDirectives = Utils.ExtractOEViewDirectivesFromRoutes(accountRoutes);


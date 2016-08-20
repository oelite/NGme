import {NgModule} from "@angular/core";
import {OE_AccountModule} from "./account/account.module";
import {OE_HomeModule} from "./home/home.module";
import {DashboardMasterPage, DashboardMasterPageModule} from "../views/master/dashboard/dashboard.master";
import {RouterModule, Routes} from "@angular/router";
import {homeRoutes} from "./home/home.routing";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {OECoreModule} from "../core/OECore.module";
import {OEComponentsModule, GOOGLE_MATERIAL_DESIGN_MODULES} from "../components/OEComponents";
import {accountRoutes} from "./account/account.routing";
import {AuthGuard} from "./AuthGuard";
import {OE_UserModule} from "./user/user.module";
/**
 * Created by mleader1 on 15/08/2016.
 */

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardMasterPage,
        canActivate: [AuthGuard],
        children: [
            ...homeRoutes,
            ...accountRoutes
        ]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        OECoreModule,
        OEComponentsModule,

        DashboardMasterPageModule,
        OE_HomeModule,
        OE_AccountModule,
        OE_UserModule,
        RouterModule.forRoot(dashboardRoutes)
    ],
    declarations: [],
    providers: [AuthGuard],
    entryComponents: [DashboardMasterPage]
})
export class OE_MODULES_Dashboard {
}
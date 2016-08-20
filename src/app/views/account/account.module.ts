import {NgModule} from "@angular/core";
import {accountRoutes} from "./account.routing";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DashboardMasterPageModule} from "../shared/dashboard/dashboard.masterpage";
import {LoginPage} from "../login/login.page";
import {AccountPage} from "./account.page";
import {SimpleMasterPageModule} from "../shared/simple/simple.masterpage";
import {OECoreModule} from "../../core/framework/OECore.module";
import {OE_MD_MODULES} from "../../plugins/material.components";
/**
 * Created by mleader1 on 04/07/2016.
 */

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        OECoreModule,
        OE_MD_MODULES,
        DashboardMasterPageModule,
        SimpleMasterPageModule,
        RouterModule.forChild(accountRoutes)
    ],
    declarations: [LoginPage, AccountPage],
    providers: []
})

export class MODULE_Account {
}
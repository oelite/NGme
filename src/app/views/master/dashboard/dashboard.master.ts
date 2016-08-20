/**
 * Created by mleader1 on 16/08/2016.
 */

import {Component, OnInit, NgModule, ViewEncapsulation, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {OECoreModule} from "../../../core/OECore.module";
import {OEComponentsModule} from "../../../components/OEComponents";
import {LeftOuterNavPartial} from "./left-nav/leftOuterNav.partial";
import {RouterModule} from "@angular/router";
import {OEConfig} from "../../../core/oeconfig.service";
import {OENavItem, OEUINavPosition} from "../../../core/ui/nav/navItem";
import {Utils} from "../../../core/utils/funcs";
import {OELayoutConfig, OELayoutComponent} from "../../../core/ui/layout/layout";

@Component({
    templateUrl: 'dashboard.master.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['dashboard.master.scss']
})
export class DashboardMasterPage implements OnInit {
    @ViewChild(OELayoutComponent)
    private layout: OELayoutComponent;

    constructor(private oeConfig: OEConfig) {
    }

    ngOnInit() {
        if (!this.oeConfig.isDashboardInitiated) {
            this.loadNav_ExistingWebsites();
            this.loadNav_ExistingEmailAccounts();


            this.oeConfig.isDashboardInitiated = true;
        }
    }

    loadNav_ExistingWebsites() {
        var emailNavItem1 = new OENavItem("navWebsite-1", "Lida Weng", [], {siteId: Utils.NewGuid()});
        var emailNavItem2 = new OENavItem("navWebsite-2", "Lida Weng", [], {siteId: Utils.NewGuid()});

        this.oeConfig.UIConfig.registerNavItem(emailNavItem1, OEUINavPosition.LeftOuter);
        this.oeConfig.UIConfig.registerNavItem(emailNavItem2, OEUINavPosition.LeftOuter);
    }

    loadNav_ExistingEmailAccounts() {
        var emailNavItem1 = new OENavItem("navEmail-1", "Lida Weng", [], {emailAccountId: Utils.NewGuid()});
        var emailNavItem2 = new OENavItem("navEmail-2", "Lida Weng", [], {emailAccountId: Utils.NewGuid()});

        this.oeConfig.UIConfig.registerNavItem(emailNavItem1, OEUINavPosition.LeftOuter);
        this.oeConfig.UIConfig.registerNavItem(emailNavItem2, OEUINavPosition.LeftOuter);

    }

    toggleLeftNav() {

    }
}


@NgModule({
    imports: [CommonModule, FormsModule,
        RouterModule,
        OECoreModule,
        OEComponentsModule
    ],
    declarations: [DashboardMasterPage, LeftOuterNavPartial],
    exports: [DashboardMasterPage]
})

export class DashboardMasterPageModule {
}
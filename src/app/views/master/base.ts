/**
 * Created by mleader1 on 15/08/2016.
 */

import {Component, OnInit, NgModule, ViewEncapsulation} from '@angular/core';
import {OEConfig} from "../../core/oeconfig.service";


@Component({
    selector: 'body',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../style/theme.scss', 'base.scss']
})
export class OEmeBaseComponent implements OnInit {
    constructor(private oeConfig: OEConfig) {
        oeConfig.apiBaseUrl = 'http://localhost:50080';
        oeConfig.apiClientId = "oe-api";
        oeConfig.notifyAppLoading("root");
    }

    ngOnInit() {
        this.oeConfig.notifyAppLoadingComplete("root");

    }

}

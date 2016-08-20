/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation, ViewChild, ElementRef, NgModule} from "@angular/core";
import {Router, ActivatedRoute, RouterModule} from "@angular/router";
import {LayoutSection, OELayoutConfig, OEAppState, OEUIState} from "../../../core/framework";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";
import {OELayout} from "../../../core/framework/ui/layout/layout";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {OECoreModule} from "../../../core/framework/OECore.module";
import {MATERIAL_DESIGN_MODULES} from "../../../plugins/material.components";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {LeftOuterNavPartial} from "../leftOuterNav/leftOuterNav.partial";

declare var $: any;  //jquery support

@Component({
    moduleId: module.id,
    selector: DashboardMasterPage.viewSelector,
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.masterpage.html',
    styleUrls: ['dashboard.masterpage.css'],
    // directives: [LeftOuterNavPartial],
})

export class DashboardMasterPage extends AuthorizedView {
    public static viewSelector: string = "oe-masterpages.oe-pages-dashboard";
    @ViewChild(OELayout) layout: OELayout;

    private mobileLeftNav: boolean = false;
    private el: HTMLElement;

    constructor(public appState: OEAppState, router: Router, activatedRoute: ActivatedRoute, el: ElementRef, signInService: SignInService) {
        super(appState, router, activatedRoute, signInService, 'oe.master.dashboard');
        this.el = el.nativeElement;
        this.initView();
    }

    ngOnInit() {
        super.ngOnInit();
    }


    initView(): void {
        this.appState.layoutState.setState(new OELayoutConfig(null, [], new OEUIState(true, true, false, null), LayoutSection.TopOuter), this.viewId);
        this.appState.layoutState.setState(new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.LeftOuter), this.viewId);
        this.appState.layoutState.setState(new OELayoutConfig(null, [], new OEUIState(true, false, false, null), LayoutSection.RightInner), this.viewId);
    }


    toggleLeftNav(e) {
        var leftOuterView = this.layout.leftOuterView;
        if (leftOuterView) {
            if (e) {
                if (e.checked)
                    leftOuterView.uiState.isFixed = true;
                else
                    leftOuterView.uiState.isFixed = false;
            }
            leftOuterView.uiState.isActive = !leftOuterView.uiState.isActive;
            this.appState.layoutState.setState(leftOuterView, this.viewId);
            if (this.mobileLeftNav) {
                $(this.el).find("md-card").trigger("focus");
            }
        }
        else
            console.log('unexpected event');
    }

    toggleRightNav(e) {
        var rightInnerView = this.layout.rightInnerView;
        if (rightInnerView) {
            if (e) {
                if (e.checked)
                    rightInnerView.uiState.isFixed = true;
                else
                    rightInnerView.uiState.isFixed = false;

            }
            rightInnerView.uiState.isActive = !rightInnerView.uiState.isActive;
            this.appState.layoutState.setState(rightInnerView, this.viewId);
        }
        else
            console.log('unexpected event');
    }

}

@NgModule({
    imports: [
        BrowserModule, FormsModule, RouterModule,
        OECoreModule, MATERIAL_DESIGN_MODULES
    ],
    declarations: [
        DashboardMasterPage, LeftOuterNavPartial
    ],
    providers: [CookieService, SignInService],
    exports: [
        DashboardMasterPage
    ]
})

export class DashboardMasterPageModule {
}
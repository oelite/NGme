/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation, ViewChild, ElementRef} from "@angular/core";
import {OEPartialView} from "../../../core/framework";
import {SignInService} from "../../../core/services";
import {LayoutSection, OELayoutConfig} from "../../../core/framework/layout/OELayoutConfig";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";
import {OEAppState} from "../../../core/framework/OEAppState";
import {OEUIState} from "../../../core/framework/layout/OEUIState";
import {Router} from "@angular/router";
import {OELayout} from "../../../core/framework/ui/layout/layout";

declare var $: any;  //jquery support

@Component({
    moduleId: module.id,
    selector: DashboardMasterPage.viewSelector,
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.masterpage.html',
    styleUrls: ['dashboard.masterpage.css'],
    directives: [OEPartialView],
    providers: []
})

export class DashboardMasterPage extends AuthorizedView {
    public static viewSelector: string = "oe-masterpages.oe-pages-dashboard";
    @ViewChild(OELayout) layout: OELayout;

    private mobileLeftNav: boolean = false;
    private el: HTMLElement;

    constructor(el: ElementRef, public appState: OEAppState,
                private signinManager: SignInService, router: Router) {
        super(appState, signinManager, router, 'oe.master.dashboard');
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
            console.log(leftOuterView.uiState.isActive);
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
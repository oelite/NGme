/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {OEPartialView, OELayoutState} from "../../../core/framework";
import {SignInService, UserService} from "../../../core/services";
import {LayoutSection, OELayoutConfig} from "../../../core/framework/layout/OELayoutConfig";
import {AuthorizedView} from "../../../core/framework/ui/view/AuthorizedView";

@Component({
    moduleId: module.id,
    selector: "page[class='oe-pages-dashboard']",
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.css'],
    directives: [OEPartialView],
    providers: []
})

export class HomePageView extends AuthorizedView {
    appLayoutState:OELayoutState;

    constructor(appLayoutState:OELayoutState,
                private signinManager:SignInService, private userManager:UserService) {
        super(appLayoutState, signinManager, userManager);
        this.appLayoutState = appLayoutState;

        this.initView();
        if (signinManager.isAuthenticated())
            userManager.getCurrentUser().subscribe(result=> {
                this.currentUser = result;
            }, (error:any)=> {
                console.warn("failed retrieving user details.");
                console.dir(error);
            });
    }

    initView():void {
        var topOuter = new OELayoutConfig(null, null, null, LayoutSection.TopOuter, null);
        topOuter.layoutSection = LayoutSection.TopOuter;
        topOuter.uiState.isFixed = true;

        var leftOuter = new OELayoutConfig(null, null, null, LayoutSection.LeftOuter, null);
        leftOuter.layoutSection = LayoutSection.LeftOuter;
        leftOuter.uiState.isFixed = false;

        this.topOuterView = topOuter;

        this.leftOuterView = leftOuter;

    }


    ngOnChanges(changes) {
        console.log(3);
        console.log(changes);
    }

    toggleLeftNav(e) {
        var leftOuterView = this.leftOuterView;
        if (leftOuterView) {
            if (e) {
                if (e.checked)
                    leftOuterView.uiState.isFixed = true;
                else
                    leftOuterView.uiState.isFixed = false;
            }
            leftOuterView.uiState.isActive = !leftOuterView.uiState.isActive;
            this.leftOuterView = leftOuterView;
        }
        else
            console.log('unexpected event');
    }

    callme() {
        console.log(1);
        var view = this.rightOuterView;
        console.log(view);
        view.uiState.isActive = !view.uiState.isActive;
        console.log(2);
        console.log(view);
    }
}
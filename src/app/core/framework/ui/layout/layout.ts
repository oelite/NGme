/**
 * Created by mleader1 on 02/07/2016.
 */

import {Component, ViewEncapsulation, Input, ElementRef} from "@angular/core";
import {OELayoutConfig, OEPartialView} from "../../../framework";
import {LayoutSection} from "../../layout/OELayoutConfig";
import {OELayoutStateChange} from "../../layout/OELayoutState";
import {OEAppState} from "../../OEAppState";
import {OEUIState} from "../../layout/OEUIState";
import {IOERoute} from "../../IOEModule";
declare var $:any;  //jquery support


@Component({
    moduleId: module.id,
    selector: 'oe-layout',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'layout.html',
    directives: [OEPartialView],
    styleUrls: ['layout.css'],
    providers: []
})

export class OELayout {
    private el:HTMLElement;

    public topOuterView:OELayoutConfig;
    public mainView:OELayoutConfig;
    public bottomInnerView:OELayoutConfig;
    public bottomOuterView:OELayoutConfig;
    public rightInnerView:OELayoutConfig;
    public rightOuterView:OELayoutConfig;
    public leftInnerView:OELayoutConfig;
    public leftOuterView:OELayoutConfig;
    public topInnerView:OELayoutConfig;


    @Input('viewId')
    viewId:string;

    constructor(el:ElementRef, public appState:OEAppState) {
        this.el = el.nativeElement;
        appState.layoutState.rootLayoutsUpdated$.subscribe(item=>this.viewStateUpdated(item));
    }

    ngOnInit() {
        this.topOuterView = this.appState.layoutState.getState(LayoutSection.TopOuter, this.viewId);
        this.mainView = this.appState.layoutState.getState(LayoutSection.Main, this.viewId);
        this.bottomInnerView = this.appState.layoutState.getState(LayoutSection.BottomInner, this.viewId);
        this.bottomOuterView = this.appState.layoutState.getState(LayoutSection.BottomOuter, this.viewId);
        this.rightInnerView = this.appState.layoutState.getState(LayoutSection.RightInner, this.viewId);
        this.rightOuterView = this.appState.layoutState.getState(LayoutSection.RightOuter, this.viewId);
        this.leftInnerView = this.appState.layoutState.getState(LayoutSection.LeftInner, this.viewId);
        this.leftOuterView = this.appState.layoutState.getState(LayoutSection.LeftOuter, this.viewId);
        this.topInnerView = this.appState.layoutState.getState(LayoutSection.TopInner, this.viewId);
    }

    isViewable(viewConfig:OELayoutConfig):boolean {
        return viewConfig && viewConfig.isViewable();
    }

    viewStateUpdated(item:OELayoutStateChange) {
        if (item && item.viewId == this.viewId) {
            switch (item.updatedLayoutConfig.layoutSection) {
                case LayoutSection.TopOuter:
                    this.topOuterView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.TopInner:
                    this.topInnerView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.LeftOuter:
                    if (item.updatedLayoutConfig.uiState.isFixed) {
                        //shrink the main content for additional left padding for the left nav
                        $(this.el).find('.oe-screen').css('margin-left', $(this.el).find('oe-layout-left-outer').width() + 'px');
                    }
                    else {
                        $(this.el).find('.oe-screen').css('margin-left', '');
                    }
                    if (item.updatedLayoutConfig.uiState.isActive) {
                        $(this.el).find('.oe-layout-left-outer').addClass('active');
                    }
                    else
                        $(this.el).find('.oe-layout-left-outer').removeClass('active');
                    this.leftOuterView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.LeftInner:
                    this.leftInnerView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.RightOuter:
                    this.rightOuterView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.RightInner:
                    this.rightInnerView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.BottomOuter:
                    this.bottomOuterView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.BottomInner:
                    this.bottomInnerView = item.updatedLayoutConfig;
                    break;
                case LayoutSection.Main:
                    this.mainView = item.updatedLayoutConfig;
                    break;
                default:
                    break;
            }

        }
    }

}

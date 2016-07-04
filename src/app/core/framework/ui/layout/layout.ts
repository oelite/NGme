/**
 * Created by mleader1 on 02/07/2016.
 */

import {Component, ViewEncapsulation, Input, ElementRef} from "@angular/core";
import {OEView, OELayoutState, OELayoutConfig, OEPartialView} from "../../../framework";
import {LayoutSection} from "../../layout/OELayoutConfig";
import {OELayoutStateChange} from "../../layout/OELayoutState";
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

    @Input('view')
    view:OEView;

    constructor(el:ElementRef, appLayoutState:OELayoutState) {
        this.el = el.nativeElement;
        appLayoutState.rootLayoutsUpdated$.subscribe(item=>this.viewStateUpdated(item));

    }


    isViewable(viewConfig:OELayoutConfig):boolean {
        return viewConfig && viewConfig.isViewable();
    }

    viewStateUpdated(item:OELayoutStateChange) {
        console.log(item);
        if (item && this.view && item.viewId == this.view.viewId) {
            switch (item.updatedLayoutConfig.layoutSection) {
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
                    break;
                default:
                    break;
            }

        }
    }

    get mainView():OELayoutConfig {
        return this.view ? this.view.mainView : null;
    }

    set mainView(value:OELayoutConfig) {
        if (this.view)
            this.view.mainView = value;
    }

    get bottomInnerView():OELayoutConfig {
        return this.view ? this.view.bottomInnerView : null;
    }

    set bottomInnerView(value:OELayoutConfig) {
        if (this.view)
            this.view.bottomInnerView = value;
    }

    get bottomOuterView():OELayoutConfig {
        return this.view ? this.view.bottomOuterView : null;
    }

    set bottomOuterView(value:OELayoutConfig) {
        if (this.view)
            this.view.bottomOuterView = value;
    }

    get rightInnerView():OELayoutConfig {
        return this.view ? this.view.rightInnerView : null;
    }

    set rightInnerView(value:OELayoutConfig) {
        if (this.view)
            this.view.rightInnerView = value;
    }

    get rightOuterView():OELayoutConfig {
        return this.view ? this.view.rightOuterView : null;
    }

    set rightOuterView(value:OELayoutConfig) {
        if (this.view)
            this.view.rightOuterView = value;
    }

    get leftInnerView():OELayoutConfig {
        return this.view ? this.view.leftInnerView : null;
    }

    set leftInnerView(value:OELayoutConfig) {
        if (this.view)
            this.view.leftInnerView = value;
    }

    get leftOuterView():OELayoutConfig {
        return this.view ? this.view.leftOuterView : null;
    }

    set leftOuterView(value:OELayoutConfig) {
        if (this.view)
            this.view.leftOuterView = value;
    }

    get topInnerView():OELayoutConfig {
        return this.view ? this.view.topInnerView : null;
    }

    set topInnerView(value:OELayoutConfig) {
        if (this.view)
            this.view.topInnerView = value;
    }

    get topOuterView():OELayoutConfig {
        return this.view ? this.view.topOuterView : null;
    }

    set topOuterView(value:OELayoutConfig) {
        if (this.view)
            this.view.topOuterView = value;
    }
}
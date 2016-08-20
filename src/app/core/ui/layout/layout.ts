/**
 * Created by mleader1 on 15/08/2016.
 */
import {Component, OnInit, Input, Injectable, ViewEncapsulation} from '@angular/core';
import {Utils} from "../../utils/funcs";
import {OEConfig} from "../../oeconfig.service";


export enum  LayoutSection
{
    TopOuter = 10, // "oe.master.top.outer",
    TopInner = 20, //"oe.master.top.inner",
    LeftOuter = 30, //"oe.master.left.outer",
    LeftInner = 40, //"oe.master.left.inner",
    RightOuter = 50, //"oe.master.right.outer",
    RightInner = 60, //"oe.master.right.inner",
    BottomOuter = 70, //"oe.master.bottom.outer",
    BottomInner = 80, //"oe.master.bottom.inner",
    Main = 0 //"oe.master.main"
}


export class OELayoutSectionConfig {
    isViewable(): boolean {
        return this.isVisible;
    };

    public layoutSection: LayoutSection = LayoutSection.Main;
    public isVisible: boolean = true;
    public isActive: boolean = false;
    public isFixed: boolean = false;


    constructor(layoutSection: LayoutSection, isVisible?: boolean, isActive?: boolean) {
        this.isVisible = isVisible || true;
        this.isActive = isActive || false;
        this.layoutSection = layoutSection || this.layoutSection;
    }
}

export class OELayoutConfig {
    layoutId: string;
    topOuterView: OELayoutSectionConfig;
    topInnerView: OELayoutSectionConfig;
    bottomOuterView: OELayoutSectionConfig;
    bottomInnerView: OELayoutSectionConfig;
    leftOuterView: OELayoutSectionConfig;
    leftInnerView: OELayoutSectionConfig;
    rightOuterView: OELayoutSectionConfig;
    rightInnerView: OELayoutSectionConfig;
    mainView: OELayoutSectionConfig;

    constructor(layoutId: string) {
        this.layoutId = layoutId || Utils.NewGuid();
        this.topOuterView = new OELayoutSectionConfig(LayoutSection.TopOuter);
        this.topInnerView = new OELayoutSectionConfig(LayoutSection.TopInner);
        this.bottomOuterView = new OELayoutSectionConfig(LayoutSection.BottomOuter);
        this.bottomInnerView = new OELayoutSectionConfig(LayoutSection.BottomInner);
        this.leftOuterView = new OELayoutSectionConfig(LayoutSection.LeftOuter);
        this.leftInnerView = new OELayoutSectionConfig(LayoutSection.LeftInner);
        this.rightOuterView = new OELayoutSectionConfig(LayoutSection.RightOuter);
        this.rightInnerView = new OELayoutSectionConfig(LayoutSection.RightInner);
        this.mainView = new OELayoutSectionConfig(LayoutSection.Main);
    }

}

@Component({
    selector: 'oe-layout',
    templateUrl: 'layout.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['layout.scss']
})
export class OELayoutComponent implements OnInit {

    @Input()
    public layoutId: string;
    public layout: OELayoutConfig;

    constructor(private oeConfig: OEConfig) {
        this.layout = new OELayoutConfig(this.layoutId);
    }

    ngOnInit() {
        this.layout.layoutId = this.layoutId;
        this.oeConfig.UIConfig.registerLayout(this.layout);
    }

    applyCustomLayoutSettings(currentLayout: OELayoutSectionConfig, customLayout: any) {
        if (customLayout.isActive != null)
            currentLayout.isActive = customLayout.isActive;
        if (customLayout.isFixed != null)
            currentLayout.isFixed = customLayout.isFixed;
        if (customLayout.isVisible != null)
            currentLayout.isVisible = customLayout.isVisible;
        return currentLayout;
    }

    isHidden(config: OELayoutSectionConfig) {
        return !(config && config.isVisible);
    }

    isActive(config: OELayoutSectionConfig) {
        return config && config.isActive && config.isVisible;
    }

    isFixed(config: OELayoutSectionConfig) {
        return config && config.isFixed;
    }


}
@Component({

    selector: 'oe-section, oe-layout-top-outer, oe-layout-top-inner, oe-layout-left-outer, oe-layout-left-inner, oe-layout-right-outer, oe-layout-right-inner, oe-layout-bottom-outer, oe-layout-bottom-inner',
    template: '<ng-content></ng-content>'
})
export class OESectionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
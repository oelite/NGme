/**
 * Created by mleader1 on 20/08/2016.
 */

import {Injectable, EventEmitter} from "@angular/core";
import {OENavItem, OEUINavChangeItem, OEUINavPosition} from "./ui/nav/navItem";
import {OELayoutComponent, LayoutSection, OELayoutConfig} from "./ui/layout/layout";


@Injectable()
export class OEUIConfig {
    uiNav: OENavItem;
    layouts: OELayoutConfig[];

    onNavItemRegistered$: EventEmitter<OEUINavChangeItem>;
    onNavItemDeregistered$: EventEmitter<OEUINavChangeItem>;

    constructor() {
        this.uiNav = new OENavItem("navigationSets", "Navigation Sets",
            [
                new OENavItem("oe-nav-" + OEUINavPosition.TopOuter, "Top Outer Navigation"),    //position 0
                new OENavItem("oe-nav-" + OEUINavPosition.TopInner, "Top Inner Navigation"),    //position 1
                new OENavItem("oe-nav-" + OEUINavPosition.RightOuter, "Right Outer Navigation"),    //position 2
                new OENavItem("oe-nav-" + OEUINavPosition.RightInner, "Right Inner Navigation"),    //position 3
                new OENavItem("oe-nav-" + OEUINavPosition.BottomOuter, "Bottom Outer Navigation"),    //position 4
                new OENavItem("oe-nav-" + OEUINavPosition.BottomInner, "Bottom Inner Navigation"),    //position 5
                new OENavItem("oe-nav-" + OEUINavPosition.LeftOuter, "Left Outer Navigation"),    //position 6
                new OENavItem("oe-nav-" + OEUINavPosition.LeftInner, "Left Inner Navigation"),    //position 7
            ]
        );
        this.onNavItemDeregistered$ = new EventEmitter<OEUINavChangeItem>();
        this.onNavItemRegistered$ = new EventEmitter<OEUINavChangeItem>();

        this.layouts = [];
    }

    registerNavItem(navItem: OENavItem, navPosition: OEUINavPosition, targetedPositioningItemId?: string, addAfter?: boolean) {
        if (navItem) {
            var existingNavItem = this.uiNav.children[navPosition].children.filter(function (item: OENavItem) {
                return item.itemId === navItem.itemId;
            });
            if (!existingNavItem.length) {
                if (targetedPositioningItemId) {
                    var targetedItems = this.uiNav.children[navPosition].children.filter(function (item: OENavItem) {
                        return item.itemId === targetedPositioningItemId;
                    });
                    if (targetedItems.length) {
                        var index = this.uiNav.children[navPosition].children.indexOf(targetedItems[0]);
                        if (index >= 0) {
                            if (!addAfter)
                                this.uiNav.children[navPosition].children.splice((index + 1), 0, navItem);
                            else
                                this.uiNav.children[navPosition].children.splice(index, 0, navItem);
                        }
                        else
                            this.uiNav.children[navPosition].children.push(navItem);
                    }
                }
                else
                    this.uiNav.children[navPosition].children.push(navItem);

                var navChangeItem = new OEUINavChangeItem();
                navChangeItem.navigationPosition = navPosition;
                navChangeItem.item = navItem;

                this.onNavItemRegistered$.emit(navChangeItem);
            }
            else console.warn("nav item id already exists. - " + navItem.itemId);
        }
    }

    deregisterNavItem(navItemId: string, navPosition: OEUINavPosition) {
        if (navItemId && navItemId.length && navPosition) {
            var existingItem = this.uiNav.children[navPosition].children.filter(function (item: OENavItem) {
                return item.itemId === navItemId;
            });
            if (existingItem.length) {
                this.uiNav[navPosition].splice(this.uiNav.children[navPosition].children.indexOf(existingItem[0]), 1);
            }

            var navChangeItem = new OEUINavChangeItem();
            navChangeItem.navigationPosition = navPosition;
            navChangeItem.item = existingItem[0];

            this.onNavItemDeregistered$.emit(navChangeItem);
        }
        else console.warn("requested nav item id for deletion does not exist");
    }

    registerLayout(layout: OELayoutConfig) {
        if (layout) {
            var existingLayout = this.getLayout(layout.layoutId);
            if (!existingLayout) {
                this.layouts.push(layout);
            }
        }
    }

    deregisterLayout(layoutId: string) {
        if (layoutId) {
            var existingLayout = this.getLayout(layoutId);
            if (existingLayout) {
                this.layouts.splice(this.layouts.indexOf(existingLayout), 1);
            }
        }
    }

    getLayout(layoutId: string) {
        if (layoutId) {
            var existingLayout = this.layouts.filter(function (item: OELayoutConfig) {
                return item.layoutId === layoutId;
            });
            if (existingLayout.length)
                return existingLayout[0];
        }
        return null;
    }

}


@Injectable()
export class OEConfig {
    public apiBaseUrl: string = 'http://localhost:50080';
    public apiClientId: string = "oe-api";
    public loginPath: string = "/login";
    public isAppLoading: boolean = false;
    public isDashboardInitiated: boolean = false;


    onAppLoadingTriggered$: EventEmitter<string>;


    constructor(public UIConfig: OEUIConfig) {
        this.onAppLoadingTriggered$ = new EventEmitter<string>();

        this.UIConfig = new OEUIConfig();
    }


    notifyAppLoading(loadingComponentName?: string) {

    }

    notifyAppLoadingComplete(loadingComponentName?: string) {

    }


}
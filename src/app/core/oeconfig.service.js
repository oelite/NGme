/**
 * Created by mleader1 on 20/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var navItem_1 = require("./ui/nav/navItem");
var OEUIConfig = (function () {
    function OEUIConfig() {
        this.uiNav = new navItem_1.OENavItem("navigationSets", "Navigation Sets", [
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.TopOuter, "Top Outer Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.TopInner, "Top Inner Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.RightOuter, "Right Outer Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.RightInner, "Right Inner Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.BottomOuter, "Bottom Outer Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.BottomInner, "Bottom Inner Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.LeftOuter, "Left Outer Navigation"),
            new navItem_1.OENavItem("oe-nav-" + navItem_1.OEUINavPosition.LeftInner, "Left Inner Navigation"),
        ]);
        this.onNavItemDeregistered$ = new core_1.EventEmitter();
        this.onNavItemRegistered$ = new core_1.EventEmitter();
        this.layouts = [];
    }
    OEUIConfig.prototype.registerNavItem = function (navItem, navPosition, targetedPositioningItemId, addAfter) {
        if (navItem) {
            var existingNavItem = this.uiNav.children[navPosition].children.filter(function (item) {
                return item.itemId === navItem.itemId;
            });
            if (!existingNavItem.length) {
                if (targetedPositioningItemId) {
                    var targetedItems = this.uiNav.children[navPosition].children.filter(function (item) {
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
                var navChangeItem = new navItem_1.OEUINavChangeItem();
                navChangeItem.navigationPosition = navPosition;
                navChangeItem.item = navItem;
                this.onNavItemRegistered$.emit(navChangeItem);
            }
            else
                console.warn("nav item id already exists. - " + navItem.itemId);
        }
    };
    OEUIConfig.prototype.deregisterNavItem = function (navItemId, navPosition) {
        if (navItemId && navItemId.length && navPosition) {
            var existingItem = this.uiNav.children[navPosition].children.filter(function (item) {
                return item.itemId === navItemId;
            });
            if (existingItem.length) {
                this.uiNav[navPosition].splice(this.uiNav.children[navPosition].children.indexOf(existingItem[0]), 1);
            }
            var navChangeItem = new navItem_1.OEUINavChangeItem();
            navChangeItem.navigationPosition = navPosition;
            navChangeItem.item = existingItem[0];
            this.onNavItemDeregistered$.emit(navChangeItem);
        }
        else
            console.warn("requested nav item id for deletion does not exist");
    };
    OEUIConfig.prototype.registerLayout = function (layout) {
        if (layout) {
            var existingLayout = this.getLayout(layout.layoutId);
            if (!existingLayout) {
                this.layouts.push(layout);
            }
        }
    };
    OEUIConfig.prototype.deregisterLayout = function (layoutId) {
        if (layoutId) {
            var existingLayout = this.getLayout(layoutId);
            if (existingLayout) {
                this.layouts.splice(this.layouts.indexOf(existingLayout), 1);
            }
        }
    };
    OEUIConfig.prototype.getLayout = function (layoutId) {
        if (layoutId) {
            var existingLayout = this.layouts.filter(function (item) {
                return item.layoutId === layoutId;
            });
            if (existingLayout.length)
                return existingLayout[0];
        }
        return null;
    };
    OEUIConfig = __decorate([
        core_1.Injectable()
    ], OEUIConfig);
    return OEUIConfig;
}());
exports.OEUIConfig = OEUIConfig;
var OEConfig = (function () {
    function OEConfig(UIConfig) {
        this.UIConfig = UIConfig;
        this.apiBaseUrl = 'http://localhost:50080';
        this.apiClientId = "oe-api";
        this.loginPath = "/login";
        this.isAppLoading = false;
        this.isDashboardInitiated = false;
        this.onAppLoadingTriggered$ = new core_1.EventEmitter();
        this.UIConfig = new OEUIConfig();
    }
    OEConfig.prototype.notifyAppLoading = function (loadingComponentName) {
    };
    OEConfig.prototype.notifyAppLoadingComplete = function (loadingComponentName) {
    };
    OEConfig = __decorate([
        core_1.Injectable()
    ], OEConfig);
    return OEConfig;
}());
exports.OEConfig = OEConfig;
//# sourceMappingURL=oeconfig.service.js.map
/**
 * Created by mleader1 on 03/07/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var funcs_1 = require("../../../core/utils/funcs");
var OENavList = (function () {
    function OENavList(el) {
        this.el = el.nativeElement;
    }
    OENavList = __decorate([
        //jquery support
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-nav-list',
            template: '<ng-content></ng-content>',
            styleUrls: ['navlist.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OENavList);
    return OENavList;
}());
exports.OENavList = OENavList;
var OENavItem = (function () {
    function OENavItem(el) {
        this.el = el.nativeElement;
    }
    OENavItem.prototype.handleFocus = function () {
        console.log('I\' focused');
    };
    OENavItem.prototype.handleBlur = function () {
        console.log('blurred');
    };
    OENavItem.prototype.handleClick = function () {
    };
    OENavItem.prototype.NewGuid = function () {
        return funcs_1.Utils.NewGuid().toString();
    };
    OENavItem = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-nav-list-item',
            host: {
                'role': 'list-item',
                '(focus)': 'handleFocus()',
                '(blur)': 'handleBlur()',
                '(click)': 'handleClick()'
            },
            templateUrl: 'navlist-item.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OENavItem);
    return OENavItem;
}());
exports.OENavItem = OENavItem;
var OENavItemHeading = (function () {
    function OENavItemHeading(el) {
        this.el = el.nativeElement;
    }
    OENavItemHeading.prototype.handleClick = function () {
        var item = $(this.el).closest('oe-nav-list-item');
        if (item) {
            if ($(item).hasClass('active')) {
                $(item).closest('oe-nav-list-item').children('oe-nav-list-item').removeClass('active');
                $(item).removeClass('active');
            }
            else {
                if (!this.isChildItemHeading())
                    $(item).closest('oe-nav-list').find('oe-nav-list-item').removeClass('active');
                else
                    $(item).closest('oe-nav-list-group').find('oe-nav-list-item').removeClass('active');
                $(item).addClass('active');
            }
        }
    };
    OENavItemHeading.prototype.isChildItemHeading = function () {
        var item = $(this.el).parents('oe-nav-list-item');
        if (item && item.length > 1)
            return true;
        else
            return false;
    };
    OENavItemHeading = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-nav-list-item-heading',
            template: '<div class="oe-nav-list-item-heading" guid="' + funcs_1.Utils.NewGuid().toString() + '"><ng-content></ng-content></div>',
            host: {
                '(click)': 'handleClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OENavItemHeading);
    return OENavItemHeading;
}());
exports.OENavItemHeading = OENavItemHeading;
var OENavItemGroup = (function () {
    function OENavItemGroup(el) {
        this.el = el.nativeElement;
    }
    OENavItemGroup = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-nav-list-group',
            templateUrl: 'navlist-item-group.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OENavItemGroup);
    return OENavItemGroup;
}());
exports.OENavItemGroup = OENavItemGroup;
var OENavItemGroupHeading = (function () {
    function OENavItemGroupHeading(el) {
        this.el = el.nativeElement;
    }
    OENavItemGroupHeading = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-nav-list-group-heading',
            template: '<div class="oe-nav-list-group-heading" guid="' + funcs_1.Utils.NewGuid().toString() + '"><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OENavItemGroupHeading);
    return OENavItemGroupHeading;
}());
exports.OENavItemGroupHeading = OENavItemGroupHeading;
exports.OE_NAVLIST_DIRECTIVES = [OENavList, OENavItem, OENavItemHeading, OENavItemGroup, OENavItemGroupHeading];
//# sourceMappingURL=navlist.js.map
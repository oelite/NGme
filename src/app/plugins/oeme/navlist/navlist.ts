/**
 * Created by mleader1 on 03/07/2016.
 */


import {Component, ElementRef} from "@angular/core";
import {Utils} from "../../../core/utils/funcs";
declare var $:any;  //jquery support


@Component({
    moduleId: module.id,
    selector: 'oe-nav-list',
    template: '<ng-content></ng-content>',
    styleUrls: ['navlist.css'],
})

export class OENavList {
    private el:HTMLElement;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;

    }
}


@Component({
    moduleId: module.id,
    selector: 'oe-nav-list-item',
    host: {
        'role': 'list-item',
        '(focus)': 'handleFocus()',
        '(blur)': 'handleBlur()',
        '(click)': 'handleClick()'
    },
    templateUrl: 'navlist-item.html'
})
export class OENavItem {
    private el:HTMLElement;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;

    }

    handleFocus():void {
        console.log('I\' focused');
    }

    handleBlur():void {
        console.log('blurred');
    }

    handleClick():void {

    }

    NewGuid():string {
        return Utils.NewGuid().toString();
    }

}

@Component({
    moduleId: module.id,
    selector: 'oe-nav-list-item-heading',
    template: '<div class="oe-nav-list-item-heading" guid="' + Utils.NewGuid().toString() + '"><ng-content></ng-content></div>',
    host: {
        '(click)': 'handleClick()'
    }
})
export class OENavItemHeading {
    private el:HTMLElement;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;

    }

    handleClick():void {
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

    }

    isChildItemHeading():boolean {
        var item = $(this.el).parents('oe-nav-list-item');
        if (item && item.length > 1)
            return true;
        else
            return false;

    }
}

@Component({
    moduleId: module.id,
    selector: 'oe-nav-list-group',
    templateUrl: 'navlist-item-group.html'
})

export class OENavItemGroup {
    private el:HTMLElement;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;

    }
}
@Component({
    moduleId: module.id,
    selector: 'oe-nav-list-group-heading',
    template: '<div class="oe-nav-list-group-heading" guid="' + Utils.NewGuid().toString() + '"><ng-content></ng-content></div>'
})
export class OENavItemGroupHeading {
    private el:HTMLElement;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;

    }
}

export const OE_NAVLIST_DIRECTIVES = [OENavList, OENavItem, OENavItemHeading, OENavItemGroup, OENavItemGroupHeading];
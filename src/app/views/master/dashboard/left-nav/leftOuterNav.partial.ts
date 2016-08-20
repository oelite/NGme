/**
 * Created by mleader1 on 08/08/2016.
 */


import {Component, OnInit} from '@angular/core';
import {OEConfig} from "../../../../core/oeconfig.service";
import {OEUINavChangeItem, OEUINavPosition, OENavItem} from "../../../../core/ui/nav/navItem";
// import {SignInService} from "../../../core/abstractions/users/signin.service";
// import {User} from "../../../core/abstractions/users/user";

@Component({
    selector: '[oe-portal-leftnav]',
    templateUrl: 'leftOuterNav.partial.html'
})
export class LeftOuterNavPartial implements OnInit {
    private websiteNavItems: OENavItem[] = [];
    private emailAccountNavItems: OENavItem[] = [];

    constructor(private oeConfig: OEConfig) {
        oeConfig.UIConfig.onNavItemRegistered$.subscribe((item: OEUINavChangeItem) => {
            if (item.navigationPosition == OEUINavPosition.LeftOuter)
                this.onNavItemRegistered(item);
        });
        oeConfig.UIConfig.onNavItemDeregistered$.subscribe((item: OEUINavChangeItem)=> {
            if (item.navigationPosition == OEUINavPosition.LeftOuter)
                this.onNavItemRemoved(item);
        })
        // if (!this.currentUser)
        //     this.currentUser = loginService.loggedInUser;
    }

    ngOnInit() {
    }


    onNavItemRegistered(item: OEUINavChangeItem) {
        if (item.item.itemId.indexOf("navEmail-") === 0)
            this.emailAccountNavItems.push(item.item);
        else if (item.item.itemId.indexOf("navWebsite-") === 0)
            this.websiteNavItems.push(item.item);

    }

    onNavItemRemoved(item: OEUINavChangeItem) {
        if (item.item.itemId.indexOf("navEmail-") === 0)
            this.emailAccountNavItems.splice(this.emailAccountNavItems.indexOf(item.item), 1);
        if (item.item.itemId.indexOf("navWebsite-") === 0)
            this.websiteNavItems.splice(this.websiteNavItems.indexOf(item.item), 1);
    }


}
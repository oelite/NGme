/**
 * Created by mleader1 on 08/08/2016.
 */


import {Component, OnInit} from '@angular/core';
import {SignInService} from "../../../core/abstractions/users/signin.service";
import {User} from "../../../core/abstractions/users/user";

@Component({
    moduleId: module.id,
    selector: '[oe-portal-leftnav]',
    templateUrl: 'leftOuterNav.partial.html'
})
export class LeftOuterNavPartial implements OnInit {
    private currentUser: User;

    constructor(private loginService: SignInService) {
        if (!this.currentUser)
            this.currentUser = loginService.loggedInUser;
    }

    ngOnInit() {
    }

}
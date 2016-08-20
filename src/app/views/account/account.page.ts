/**
 * Created by mleader1 on 08/08/2016.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: AccountPage.viewSelector,
    templateUrl: 'account.page.html',
    styleUrls: ['account.page.css']
})
export class AccountPage implements OnInit {
    public static viewSelector: string = 'oe-page.account';

    constructor() {
    }

    ngOnInit() {
    }

}
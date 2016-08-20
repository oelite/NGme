/**
 * Created by mleader1 on 08/08/2016.
 */


import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: ProductPage.viewSelector,
    templateUrl: 'product.page.html',
    styleUrls: ['product.page.css']
})
export class ProductPage implements OnInit {
    public static viewSelector: string = 'oe-page.inventory-product';

    constructor() {
    }

    ngOnInit() {
    }

}
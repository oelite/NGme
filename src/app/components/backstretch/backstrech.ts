/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component, Input, ViewEncapsulation, ElementRef, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
require("jquery");
require("./jquery.backstretch.min.js");

declare var $: any;  //jquery support

@Component({
    selector: 'oe-backstretch',
    encapsulation: ViewEncapsulation.None,
    template: ''
})

export class OEJqueryBackstretch {
    @Input() source: string[]|string;
    @Input() target: string;
    @Input() options: any;

    el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        $(this.target || 'body').backstretch(this.source, this.options);
    }
}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [OEJqueryBackstretch],
    providers: [],
    exports: [OEJqueryBackstretch]
})
export class OEJqueryBackstretchModule {
}
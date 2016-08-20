/**
 * Created by mleader1 on 04/07/2016.
 */


import {Component, Input, ViewEncapsulation, ElementRef, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


declare var $: any;  //jquery support

@Component({
    selector: 'oe-backstretch',
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    template: ''
})

export class OE_JQuery_BackStretch {
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
    declarations: [OE_JQuery_BackStretch],
    providers:[],
    exports: [OE_JQuery_BackStretch]
})
export class OEmeJqueryBackstretch {
}
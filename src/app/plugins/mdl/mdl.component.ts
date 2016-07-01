/**
 * Created by mleader1 on 01/07/2016.
 */
import {Directive, OnInit, ElementRef} from "@angular/core";

declare var componentHandler:any;

@Directive({
    selector: '[mdlUpgrade], [mdl-upgrade]'
})

export class MdlUpgradeDirective implements OnInit {
    constructor(public elem:ElementRef) {
        console.log('mdl called');
    }

    ngOnInit() {
        componentHandler.upgradeElements(this.elem.nativeElement);
    }
}

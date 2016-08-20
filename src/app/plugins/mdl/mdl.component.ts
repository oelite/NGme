/**
 * Created by mleader1 on 01/07/2016.
 */
import {Directive, OnInit, ElementRef, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

declare var componentHandler: any;

@Directive({
    selector: '[mdlUpgrade], [mdl-upgrade]'
})

export class MdlUpgradeDirective implements OnInit {
    constructor(public elem: ElementRef) {
    }

    ngOnInit() {
        componentHandler.upgradeElements(this.elem.nativeElement);
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [MdlUpgradeDirective],
    exports: [MdlUpgradeDirective]
})

export class OEmeMdlUpgradeDirectiveModule {
}
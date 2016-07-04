/**
 * Created by mleader1 on 02/07/2016.
 */
import {Component, Input} from "@angular/core";
import {OELayoutConfig} from "../../../framework";

@Component({
    moduleId: module.id,
    selector: 'oe-section',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['section.css']
})

export class OESection {
    /**
     * position of the side nav
     * @type {string}  - acceptable values: 'top', 'left', 'bottom', 'right'
     */
    @Input()
    side:string = 'left';
    /**
     * display mode of the side nav
     * @type {string} - acceptable values:
     *   'fixed' - display as a static layer (fixed position) on the screen
     *   'over' - display as an overlay layer (floating) above content on the screen
     *   'content' - display as part of content on the screen
     */
    @Input()
    mode:string = 'fixed';
    @Input()
    opened:boolean = true;
    @Input()
    layoutConfig:OELayoutConfig;

    constructor() {
        this.side = this.side ? this.side.toLowerCase() : 'left';
        this.mode = this.mode ? this.mode.toLowerCase() : 'fixed';
    }

    toggle():void {

    }

}
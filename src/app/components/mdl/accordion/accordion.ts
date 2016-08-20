/**
 * Created by mleader1 on 03/08/2016.
 */
import {
    Component, OnInit, Input, ElementRef, Injectable, EventEmitter,
    NgModule
} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Utils} from "../../../core/utils/funcs";
declare var $: any;

export class OEAccordionState {
    accordionId: string;
    activeItemId: string;
    activeGroupIds: any[];

    constructor(accordionId: string, activeItemId?: string, activeGroupIds?: any[]) {
        this.accordionId = accordionId;
        this.activeItemId = activeItemId || null;
        this.activeGroupIds = activeGroupIds || null;
    }
}

@Injectable()
export class OEAccordionService {
    public onActiveItemChanged$: EventEmitter<OEAccordionState>;
    private accordionPrefix: string = 'oe.ui.accordions-';

    constructor() {
        this.onActiveItemChanged$ = new EventEmitter<OEAccordionState>();
    }

    public registerAccordion(accordionId: string) {
        if (accordionId) {
            var state = new OEAccordionState(accordionId);
            localStorage.setItem(this.accordionPrefix.concat(accordionId), JSON.stringify(state));
        }
    }

    public deregisterAccordion(accordionId: string) {
        if (accordionId)
            localStorage.removeItem(this.accordionPrefix.concat(accordionId));
    }

    public  getAccordion(accordionId: string): OEAccordionState {
        if (accordionId) {
            var item = localStorage.getItem(this.accordionPrefix.concat(accordionId));
            if (item)
                return JSON.parse(item);
        }
        return null;
    }

    public updateAccordionState(accordionId, activeItemId, activeGroupIds?: any[]) {
        if (accordionId) {
            var state = this.getAccordion(accordionId) || new OEAccordionState(accordionId, activeItemId, activeGroupIds);
            if (state) {
                state.activeItemId = activeItemId;
                state.activeGroupIds = activeGroupIds;
                localStorage.setItem(this.accordionPrefix.concat(accordionId), JSON.stringify(state));
                this.onActiveItemChanged$.emit(state);
            }
        }
    }


}

@Component({
    selector: 'accordion-item',
    templateUrl: 'accordion.item.html',
})
export class OEAccordionItemComponent implements OnInit {
    @Input("md-icon")
    private mdIcon: string = null;
    @Input("md-badge")
    private mdBadge: string = null;
    @Input("md-badge-overlap")
    private mdBadgeOverlap: boolean = true;
    @Input("md-badge-no-background")
    private mdBadgeNoBackground: boolean = false;
    @Input("md-divider")
    private mdDivider: boolean = false;

    private isActive: boolean = false;
    private el: HTMLElement;
    @Input('id')
    private itemId: string = Utils.NewGuid();

    constructor(private accordionService: OEAccordionService, el: ElementRef) {
        this.el = el.nativeElement;
        accordionService.onActiveItemChanged$.subscribe(item=>this.onActiveItemChange(item));
    }

    ngOnInit() {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var state = this.accordionService.getAccordion(accordionId);
        if (state != null)
            this.onActiveItemChange(state);
    }

    onActiveItemChange(item: OEAccordionState) {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        if (item) {
            if (item.accordionId == accordionId && item.activeItemId != this.itemId) {
                this.isActive = false;
            }
            else if (item.activeItemId == this.itemId)
                this.isActive = true;
        }

    }

    activate() {
        this.isActive = true;
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var groupIds = [];
        $(this.el).parents('.oe-accordion__group').each(function () {
            groupIds.push($(this).attr('itemid'));
        });
        this.accordionService.updateAccordionState(accordionId, this.itemId, groupIds);
    }
}

@Component({
    selector: 'accordion-group',
    templateUrl: 'accordion.group.html',
    directives: [OEAccordionGroupComponent, OEAccordionItemComponent],
})
export class OEAccordionGroupComponent implements OnInit {
    @Input("md-icon")
    private mdIcon: string = null;
    @Input("md-badge")
    private mdBadge: string = null;
    @Input("md-badge-overlap")
    private mdBadgeOverlap: boolean = true;
    @Input("md-badge-no-background")
    private mdBadgeNoBackground: boolean = false;
    @Input("md-divider")
    private mdDivider: boolean = false;

    private isExpanded: boolean = false;
    private isActive: boolean = false;
    private el: HTMLElement;
    @Input('id')
    private itemId: string = Utils.NewGuid();

    constructor(private accordionService: OEAccordionService, el: ElementRef) {
        this.el = el.nativeElement;
        accordionService.onActiveItemChanged$.subscribe(item=>this.onActiveItemChange(item));
    }

    ngOnInit() {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var state = this.accordionService.getAccordion(accordionId);
        if (state != null)
            this.onActiveItemChange(state);
    }

    onActiveItemChange(item: OEAccordionState) {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        if (accordionId && item && item.accordionId == accordionId &&
            (item.activeGroupIds != null && item.activeGroupIds.indexOf(this.itemId) >= 0)) {
            this.isActive = true;
            this.isExpanded = true;
        }
        else {
            this.isActive = false;
            if (item == null || item.activeGroupIds == null || item.activeGroupIds.indexOf(this.itemId) < 0)
                this.isExpanded = false;
        }
    }

    toggle($event?) {
        if ($event)
            $event.stopPropagation();
        this.isExpanded = !this.isExpanded;
    }


}


@Component({
    selector: 'oe-accordion',
    templateUrl: 'accordion.html',
    styleUrls: ['accordion.scss'],
    directives: [OEAccordionGroupComponent, OEAccordionItemComponent]
})
export class OEAccordionComponent implements OnInit {
    @Input('id')
    private itemId: string = Utils.NewGuid();

    constructor() {
    }

    ngOnInit() {
    }

}

export const OE_MD_ACCORDION_DIRECTIVES = [
    OEAccordionGroupComponent, OEAccordionItemComponent, OEAccordionComponent
];

export const OE_MD_ACCORDION_PROVIDERS = [
    OEAccordionService
];

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        OE_MD_ACCORDION_DIRECTIVES
    ],
    providers: [OEAccordionService],
    exports: [OE_MD_ACCORDION_DIRECTIVES]
})
export class OE_MD_AccordionModule {
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mleader1 on 03/08/2016.
 */
var core_1 = require('@angular/core');
var funcs_1 = require("../../../core/utils/funcs");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var OEAccordionState = (function () {
    function OEAccordionState(accordionId, activeItemId, activeGroupIds) {
        this.accordionId = accordionId;
        this.activeItemId = activeItemId || null;
        this.activeGroupIds = activeGroupIds || null;
    }
    return OEAccordionState;
}());
exports.OEAccordionState = OEAccordionState;
var OEAccordionService = (function () {
    function OEAccordionService() {
        this.accordionPrefix = 'oe.ui.accordions-';
        this.onActiveItemChanged$ = new core_1.EventEmitter();
    }
    OEAccordionService.prototype.registerAccordion = function (accordionId) {
        if (accordionId) {
            var state = new OEAccordionState(accordionId);
            localStorage.setItem(this.accordionPrefix.concat(accordionId), JSON.stringify(state));
        }
    };
    OEAccordionService.prototype.deregisterAccordion = function (accordionId) {
        if (accordionId)
            localStorage.removeItem(this.accordionPrefix.concat(accordionId));
    };
    OEAccordionService.prototype.getAccordion = function (accordionId) {
        if (accordionId) {
            var item = localStorage.getItem(this.accordionPrefix.concat(accordionId));
            if (item)
                return JSON.parse(item);
        }
        return null;
    };
    OEAccordionService.prototype.updateAccordionState = function (accordionId, activeItemId, activeGroupIds) {
        if (accordionId) {
            var state = this.getAccordion(accordionId) || new OEAccordionState(accordionId, activeItemId, activeGroupIds);
            if (state) {
                state.activeItemId = activeItemId;
                state.activeGroupIds = activeGroupIds;
                localStorage.setItem(this.accordionPrefix.concat(accordionId), JSON.stringify(state));
                this.onActiveItemChanged$.emit(state);
            }
        }
    };
    OEAccordionService = __decorate([
        core_1.Injectable()
    ], OEAccordionService);
    return OEAccordionService;
}());
exports.OEAccordionService = OEAccordionService;
var OEAccordionItemComponent = (function () {
    function OEAccordionItemComponent(accordionService, el) {
        var _this = this;
        this.accordionService = accordionService;
        this.mdIcon = null;
        this.mdBadge = null;
        this.mdBadgeOverlap = true;
        this.mdBadgeNoBackground = false;
        this.mdDivider = false;
        this.isActive = false;
        this.itemId = funcs_1.Utils.NewGuid();
        this.el = el.nativeElement;
        accordionService.onActiveItemChanged$.subscribe(function (item) { return _this.onActiveItemChange(item); });
    }
    OEAccordionItemComponent.prototype.ngOnInit = function () {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var state = this.accordionService.getAccordion(accordionId);
        if (state != null)
            this.onActiveItemChange(state);
    };
    OEAccordionItemComponent.prototype.onActiveItemChange = function (item) {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        if (item) {
            if (item.accordionId == accordionId && item.activeItemId != this.itemId) {
                this.isActive = false;
            }
            else if (item.activeItemId == this.itemId)
                this.isActive = true;
        }
    };
    OEAccordionItemComponent.prototype.activate = function () {
        this.isActive = true;
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var groupIds = [];
        $(this.el).parents('.oe-accordion__group').each(function () {
            groupIds.push($(this).attr('itemid'));
        });
        this.accordionService.updateAccordionState(accordionId, this.itemId, groupIds);
    };
    __decorate([
        core_1.Input("md-icon")
    ], OEAccordionItemComponent.prototype, "mdIcon");
    __decorate([
        core_1.Input("md-badge")
    ], OEAccordionItemComponent.prototype, "mdBadge");
    __decorate([
        core_1.Input("md-badge-overlap")
    ], OEAccordionItemComponent.prototype, "mdBadgeOverlap");
    __decorate([
        core_1.Input("md-badge-no-background")
    ], OEAccordionItemComponent.prototype, "mdBadgeNoBackground");
    __decorate([
        core_1.Input("md-divider")
    ], OEAccordionItemComponent.prototype, "mdDivider");
    __decorate([
        core_1.Input('id')
    ], OEAccordionItemComponent.prototype, "itemId");
    OEAccordionItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'accordion-item',
            templateUrl: 'accordion.item.html'
        })
    ], OEAccordionItemComponent);
    return OEAccordionItemComponent;
}());
exports.OEAccordionItemComponent = OEAccordionItemComponent;
var OEAccordionGroupComponent = (function () {
    function OEAccordionGroupComponent(accordionService, el) {
        var _this = this;
        this.accordionService = accordionService;
        this.mdIcon = null;
        this.mdBadge = null;
        this.mdBadgeOverlap = true;
        this.mdBadgeNoBackground = false;
        this.mdDivider = false;
        this.isExpanded = false;
        this.isActive = false;
        this.itemId = funcs_1.Utils.NewGuid();
        this.el = el.nativeElement;
        accordionService.onActiveItemChanged$.subscribe(function (item) { return _this.onActiveItemChange(item); });
    }
    OEAccordionGroupComponent.prototype.ngOnInit = function () {
        var accordionId = $(this.el).closest('.oe-accordion').attr('itemId') || $(this.el).closest('oe-accordion').attr('id');
        var state = this.accordionService.getAccordion(accordionId);
        if (state != null)
            this.onActiveItemChange(state);
    };
    OEAccordionGroupComponent.prototype.onActiveItemChange = function (item) {
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
    };
    OEAccordionGroupComponent.prototype.toggle = function ($event) {
        if ($event)
            $event.stopPropagation();
        this.isExpanded = !this.isExpanded;
        // if (this.isActive) {
        //     $(this.el).closest('.oe-accordion').find('.active').removeClass('active');
        //     $(this.el).addClass('active');
        // }
        //$(this.el).find('.oe-accordion__group__items').slideToggle();
    };
    __decorate([
        core_1.Input("md-icon")
    ], OEAccordionGroupComponent.prototype, "mdIcon");
    __decorate([
        core_1.Input("md-badge")
    ], OEAccordionGroupComponent.prototype, "mdBadge");
    __decorate([
        core_1.Input("md-badge-overlap")
    ], OEAccordionGroupComponent.prototype, "mdBadgeOverlap");
    __decorate([
        core_1.Input("md-badge-no-background")
    ], OEAccordionGroupComponent.prototype, "mdBadgeNoBackground");
    __decorate([
        core_1.Input("md-divider")
    ], OEAccordionGroupComponent.prototype, "mdDivider");
    __decorate([
        core_1.Input('id')
    ], OEAccordionGroupComponent.prototype, "itemId");
    OEAccordionGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'accordion-group',
            templateUrl: 'accordion.group.html',
            directives: [OEAccordionGroupComponent, OEAccordionItemComponent]
        })
    ], OEAccordionGroupComponent);
    return OEAccordionGroupComponent;
}());
exports.OEAccordionGroupComponent = OEAccordionGroupComponent;
var OEAccordionComponent = (function () {
    function OEAccordionComponent() {
        this.itemId = funcs_1.Utils.NewGuid();
    }
    OEAccordionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('id')
    ], OEAccordionComponent.prototype, "itemId");
    OEAccordionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oe-accordion',
            templateUrl: 'accordion.html',
            styleUrls: ['accordion.css'],
            directives: [OEAccordionGroupComponent, OEAccordionItemComponent]
        })
    ], OEAccordionComponent);
    return OEAccordionComponent;
}());
exports.OEAccordionComponent = OEAccordionComponent;
exports.OE_ACCORDION_DIRECTIVES = [
    OEAccordionGroupComponent, OEAccordionItemComponent, OEAccordionComponent
];
exports.OE_ACCORDION_PROVIDERS = [
    OEAccordionService
];
var OEmeAccordionModule = (function () {
    function OEmeAccordionModule() {
    }
    OEmeAccordionModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                exports.OE_ACCORDION_DIRECTIVES
            ],
            providers: [OEAccordionService],
            exports: [exports.OE_ACCORDION_DIRECTIVES]
        })
    ], OEmeAccordionModule);
    return OEmeAccordionModule;
}());
exports.OEmeAccordionModule = OEmeAccordionModule;
//# sourceMappingURL=accordion.js.map
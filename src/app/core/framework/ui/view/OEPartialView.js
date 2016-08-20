"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by mleader1 on 29/06/2016.
 */
var OEPartialView = (function () {
    function OEPartialView(compiler) {
        this.compiler = compiler;
        this.layoutConfig = null;
    }
    OEPartialView.prototype._createDynamicComponent = function () {
        var metaData = new core_1.ComponentMetadata({
            selector: 'view',
            template: this.parseViewSelectorToTags(this.layoutConfig.viewSelector),
            encapsulation: core_1.ViewEncapsulation.None
        });
        var cmpClass = (function () {
            function _() {
            }
            return _;
        }());
        cmpClass.prototype = this.viewContainerRef;
        return core_1.Component(metaData)(cmpClass);
    };
    OEPartialView.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.layoutConfig)
            return;
        this.compiler.compileComponentAsync(this._createDynamicComponent())
            .then(function (factory) {
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.viewContainerRef.parentInjector);
            _this.viewContainerRef.clear();
            _this.viewContainerRef.createComponent(factory, 0, injector);
        });
    };
    /**
     * parsing view selector into a valid secondary selector for dynamically generated view
     * TODO: should be improved, it' lack of full functionality
     * @param viewSelector
     */
    OEPartialView.prototype.parseViewSelectorToTags = function (viewSelector) {
        var result = "";
        var tag = "";
        var classes = "";
        var attributes = "";
        if (viewSelector.startsWith('.')) {
            tag = "div";
            classes = viewSelector.replace('.', ' ');
            var squareBracketIndex = classes.indexOf('[');
            if (squareBracketIndex > 0) {
                classes = classes.substr(0, squareBracketIndex);
            }
        }
        else if (viewSelector.startsWith('[')) {
            tag = "div";
            attributes = viewSelector.substring(1, viewSelector.indexOf(']') - 2);
        }
        else {
            var dotIndex = viewSelector.indexOf('.');
            var bracketIndex = viewSelector.indexOf('[');
            if (dotIndex > 0) {
                tag = viewSelector.substring(0, dotIndex);
                classes = viewSelector.substring(dotIndex + 1);
            }
            else if (bracketIndex > 0) {
                tag = viewSelector.substring(0, bracketIndex);
                attributes = viewSelector.substring(bracketIndex + 1).replace(']', '').replace('"', "'").trim().replace("'", "").replace('"', '');
                ;
                if (attributes.startsWith('class')) {
                    var attrsToClasses = attributes.substring(5).trim().substring(1);
                    attributes = "";
                    classes = (classes + ' ' + attrsToClasses).trim();
                }
            }
            else {
                tag = viewSelector;
            }
        }
        tag = (tag || "div").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
        classes = (classes || "").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
        attributes = (attributes || "").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
        result = ("<" + tag + " class=\"" + (classes.trim().length > 0 ? classes : '') + "\" " + attributes + " ><ng-content></ng-content></" + tag + ">").trim();
        if (tag.trim() != 'unnamed view')
            return result;
        else
            return '';
    };
    __decorate([
        core_1.Input()
    ], OEPartialView.prototype, "layoutConfig");
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef })
    ], OEPartialView.prototype, "viewContainerRef");
    OEPartialView = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "oe-partial-view",
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div #target></div>"
        })
    ], OEPartialView);
    return OEPartialView;
}());
exports.OEPartialView = OEPartialView;
//# sourceMappingURL=OEPartialView.js.map
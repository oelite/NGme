// import {
//     Input, ViewContainerRef, ComponentMetadata, Component, Directive,
//     ViewEncapsulation, ReflectiveInjector, Compiler
// } from "@angular/core";
// import {OELayoutSectionConfig} from "./layout";
// /**
//  * Created by mleader1 on 15/08/2016.
//  */
//
//
// @Directive({
//     selector: 'oe-partial-view',
//
// })
// export class OEPartialViewDirective {
//     @Input('layoutConfig') private layoutConfig: OELayoutSectionConfig;
//
//     constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {
//     }
//
//     private _createDynamicComponent(): any {
//         const metaData = new ComponentMetadata({
//             selector: 'view',
//             template: this.parseViewSelectorToTags(this.layoutConfig.viewSelector),
//             encapsulation: ViewEncapsulation.None,
//         });
//
//         const cmpClass = class _ {
//         };
//         cmpClass.prototype = this.vcRef;
//         return Component(metaData)(cmpClass);
//     }
//
//     ngOnChanges() {
//         if (!this.layoutConfig) return;
//         this.compiler.compileComponentAsync(this._createDynamicComponent())
//             .then(factory => {
//                 const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
//                 this.vcRef.clear();
//                 this.vcRef.createComponent(factory, 0, injector);
//             });
//     }
//
//
//     /**
//      * parsing view selector into a valid secondary selector for dynamically generated view
//      * TODO: should be improved, it' lack of full functionality
//      * @param viewSelector
//      */
//     parseViewSelectorToTags(viewSelector: string): string {
//         var result = "";
//         var tag = "";
//         var classes = "";
//         var attributes = "";
//         if (viewSelector.indexOf('.') === 0) {
//             tag = "div";
//             classes = viewSelector.replace('.', ' ');
//             var squareBracketIndex = classes.indexOf('[')
//             if (squareBracketIndex > 0) {
//                 classes = classes.substr(0, squareBracketIndex);
//             }
//         }
//         else if (viewSelector.indexOf('[') === 0) {
//             tag = "div";
//             attributes = viewSelector.substring(1, viewSelector.indexOf(']') - 2);
//         }
//         else {
//             var dotIndex = viewSelector.indexOf('.');
//             var bracketIndex = viewSelector.indexOf('[');
//             if (dotIndex > 0) {
//                 tag = viewSelector.substring(0, dotIndex);
//                 classes = viewSelector.substring(dotIndex + 1);
//             }
//             else if (bracketIndex > 0) {
//                 tag = viewSelector.substring(0, bracketIndex);
//                 attributes = viewSelector.substring(bracketIndex + 1).replace(']', '').replace('"', "'").trim().replace("'", "").replace('"', '');
//                 ;
//                 if (attributes.indexOf('class') === 0) {
//                     var attrsToClasses = attributes.substring(5).trim().substring(1);
//                     attributes = "";
//                     classes = (classes + ' ' + attrsToClasses).trim();
//                 }
//             }
//             else {
//                 tag = viewSelector;
//             }
//         }
//         tag = (tag || "div").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
//         classes = (classes || "").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
//         attributes = (attributes || "").replace('.', '').replace('[', '').replace(']', '').replace('"', "\'").replace("'", "\'");
//
//         result = `<${tag} class="${classes.trim().length > 0 ? classes : ''}" ${attributes} ><ng-content></ng-content></${tag}>`.trim();
//         if (tag.trim() != 'unnamed view')
//             return result;
//         else
//             return '';
//     }
//
//
// }
import {
    Component,
    ViewContainerRef,
    ComponentResolver,
    ComponentMetadata,
    ComponentFactory,
    ReflectiveInjector,
    ViewEncapsulation,
    OnChanges,
    Input,
    ViewChild
} from "@angular/core";
import {OELayoutConfig} from "../../layout/OELayoutConfig";

/**
 * Created by mleader1 on 29/06/2016.
 */

export function createComponentFactory(resolver:ComponentResolver, metadata:ComponentMetadata):Promise<ComponentFactory<any>> {
    const cmpClass = class OEmePartialView {
    };
    const decoratedCmp = Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}

@Component({
    selector: "oe-partial-view",
    encapsulation: ViewEncapsulation.None,
    template: "<div #target></div>"
})

export class OEPartialView implements OnChanges {
    @Input()
    public layoutConfig:OELayoutConfig;
    @ViewChild('target', {read: ViewContainerRef}) viewContainerRef:ViewContainerRef;

    constructor(private resolver:ComponentResolver) {
        this.layoutConfig = null;
    }
    ngOnChanges() {

        if (!this.layoutConfig) return;

        this.viewContainerRef.clear();

        const metaData = new ComponentMetadata({
            selector: 'view',
            template: this.parseViewSelectorToTags(this.layoutConfig.viewSelector),
            directives: this.layoutConfig.viewDirectives,
            providers: this.layoutConfig.viewProviders
        });

        createComponentFactory(this.resolver, metaData)
            .then(factory=> {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
                this.viewContainerRef.createComponent(factory, 0, injector, []);
            });
    }


    /**
     * parsing view selector into a valid secondary selector for dynamically generated view
     * TODO: should be improved, it' lack of full functionality
     * @param viewSelector
     */
    parseViewSelectorToTags(viewSelector:string):string {
        var result = "";
        var tag = "";
        var classes = "";
        var attributes = "";
        if (viewSelector.startsWith('.')) {
            tag = "div";
            classes = viewSelector.replace('.', ' ');
            var squareBracketIndex = classes.indexOf('[')
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

        result = `<${tag} [view]='this' class="${classes.trim().length > 0 ? classes : ''}" ${attributes} ><ng-content></ng-content></${tag}>`.trim();
        if (tag.trim() != 'unnamed view')
            return result;
        else
            return '';
    }

}
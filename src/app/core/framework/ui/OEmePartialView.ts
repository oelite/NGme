import {
    Component,
    ViewContainerRef,
    ComponentResolver,
    ComponentMetadata,
    ComponentFactory,
    ReflectiveInjector,
    ViewEncapsulation,
    OnChanges
} from "@angular/core";
import {OEmeLayoutDefinition} from "../IOEmeLayout";

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
    inputs: ["oeSelect"],
    encapsulation: ViewEncapsulation.None,
    template: ""
})

export class OEmePartialView implements OnChanges {
    public oeSelect:OEmeLayoutDefinition;

    constructor(private viewContainerRef:ViewContainerRef, private resolver:ComponentResolver) {
        this.oeSelect = null;
    }

    ngOnChanges() {
        if (!this.oeSelect) return;
        var src = '<' + this.oeSelect.viewDefinition.viewSelector + ' ></' + this.oeSelect.viewDefinition.viewSelector + '>';
        const metaData = new ComponentMetadata({
            selector: 'view',
            template: src,
            directives: this.oeSelect.viewDefinition.viewDirectives,
            providers: this.oeSelect.viewDefinition.viewProviders
        });

        createComponentFactory(this.resolver, metaData)
            .then(factory=> {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
                this.viewContainerRef.createComponent(factory, 0, injector, []);
            });
    }

}
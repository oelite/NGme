import {
    Component,
    ViewContainerRef,
    ComponentResolver,
    ComponentMetadata,
    ComponentFactory,
    ReflectiveInjector,
    ViewEncapsulation,
    OnChanges,
    Input
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
    template: ""
})

export class OEPartialView implements OnChanges {
    @Input()
    public layoutConfig:OELayoutConfig;

    constructor(private viewContainerRef:ViewContainerRef, private resolver:ComponentResolver) {
        this.layoutConfig = null;
    }

    ngOnChanges() {
        if (!this.layoutConfig) return;
        var src = '<' + this.layoutConfig.viewSelector + ' ></' + this.layoutConfig.viewSelector + '>';
        const metaData = new ComponentMetadata({
            selector: 'view',
            template: src,
            directives: this.layoutConfig.viewDirectives,
            providers: this.layoutConfig.viewProviders
        });

        createComponentFactory(this.resolver, metaData)
            .then(factory=> {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
                this.viewContainerRef.createComponent(factory, 0, injector, []);
            });
    }

}
import {OELayoutComponent, OESectionComponent} from "./layout";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OEComponentsModule} from "../../../components/OEComponents";
/**
 * Created by mleader1 on 15/08/2016.
 */


export const OELayout_DIRECTIVES = [
    OELayoutComponent
];


@NgModule({
    imports: [
        CommonModule,
        OEComponentsModule
    ],
    declarations: [OELayout_DIRECTIVES, OESectionComponent],
    providers: [],
    exports: [
        ...OELayout_DIRECTIVES
    ]

})

export class OELayoutModule {
}
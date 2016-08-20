/**
 * Created by mleader1 on 15/08/2016.
 */


import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {OECoreModule} from "../../core/OECore.module";
import {OEComponentsModule} from "../../components/OEComponents";
import {AccountPage} from "../../views/account/account/account.page";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        OECoreModule,
        OEComponentsModule
    ],
    declarations: [AccountPage],
    exports: [AccountPage]
})

export class OE_AccountModule {
}
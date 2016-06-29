/**
 * Created by mleader1 on 29/06/2016.
 */
import {Component} from "@angular/core";
import {IOEmeLayout, NavLayoutSet, MainLayoutSet} from "../IOEmeLayout";
import {OEmePartialView} from "../ui/OEmePartialView";
import {OEmeLayoutHtml, OEmeLayoutSelector} from "./OEmeLayout.html";

@Component({
    moduleId: module.id,
    selector: OEmeLayoutSelector,
    templateUrl: OEmeLayoutHtml,
    directives: [OEmePartialView]
})

//extend OEmeLayout if your class is specifically used for defining a layout
export abstract class OEmeLayout implements IOEmeLayout {
    topOuterNav:NavLayoutSet = null;
    topInnerNav:NavLayoutSet = null;
    leftOuterNav:NavLayoutSet = null;
    leftInnerNav:NavLayoutSet = null;
    rightOuterNav:NavLayoutSet = null;
    rightInnerNav:NavLayoutSet = null;
    bottomOuterNav:NavLayoutSet = null;
    bottomInnerNav:NavLayoutSet = null;
    mainContent:MainLayoutSet = null;


    isViewable(layoutSet:NavLayoutSet):boolean {
        return layoutSet != null && layoutSet.isViewable();
    }

    constructor() {
        this.initTopOutNav();
        this.initTopInnerNav();
        this.initLeftOuterNav();
        this.initLeftInnerNav();
        this.initRightOuterNav();
        this.initRightInnerNav();
        this.initBottomInnerNav();
        this.initBottomOuterNav();
        this.initMainContent();
    }

    initTopOutNav():void {
    }

    initTopInnerNav():void {

    }

    initLeftOuterNav():void {

    }

    initLeftInnerNav():void {

    }

    initRightOuterNav():void {

    }

    initRightInnerNav():void {

    }

    initBottomOuterNav():void {

    }

    initBottomInnerNav():void {

    }

    initMainContent():void {

    }
}

/**
 * Created by mleader1 on 28/06/2016.
 */
import {Component} from "@angular/core";
import {IOEmeLayout, NavLayoutSet, MainLayoutSet} from "../../core/framework/IOEmeLayout";

@Component({
    selector: 'oe-error',
    template: 'Opps, an error'
})

export class ErrorComponent implements IOEmeLayout {
    topOuterNav:NavLayoutSet;
    topInnerNav:NavLayoutSet;
    leftOuterNav:NavLayoutSet;
    leftInnerNav:NavLayoutSet;
    rightOuterNav:NavLayoutSet;
    rightInnerNav:NavLayoutSet;
    bottomOuterNav:NavLayoutSet;
    bottomInnerNav:NavLayoutSet;
    mainContent:MainLayoutSet;

    isViewable(layoutSet:NavLayoutSet):boolean {
        return undefined;
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
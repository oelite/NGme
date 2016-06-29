/**
 * Created by mleader1 on 27/06/2016.
 */
export interface IOEmeLayout {
    topOuterNav:NavLayoutSet;
    topInnerNav:NavLayoutSet;

    leftOuterNav:NavLayoutSet;
    leftInnerNav:NavLayoutSet;

    rightOuterNav:NavLayoutSet;
    rightInnerNav:NavLayoutSet;

    bottomOuterNav:NavLayoutSet;
    bottomInnerNav:NavLayoutSet;

    mainContent:MainLayoutSet;

    isViewable(layoutSet:NavLayoutSet):boolean;

    initTopOutNav():void;
    initTopInnerNav():void;
    initLeftOuterNav():void;
    initLeftInnerNav():void;
    initRightOuterNav():void;
    initRightInnerNav():void;
    initBottomOuterNav():void;
    initBottomInnerNav():void;
    initMainContent():void;

}

export class NavLayoutSet {
    visible:boolean = false;
    contentViewSelector:string = null;
    contentViewDirectives:any[] = [];
    contentViewProviders:any[] = [];
    oeMetaData:any;

    isViewable():boolean {
        return this.visible === true
            && this.contentViewSelector != null
            && this.contentViewSelector.length > 0;
    };

    constructor(options:{visible:boolean,
        contentViewSelector:string,
        contentViewDirectives:any[],
        contentViewProviders:any[]}) {
        this.oeMetaData = {};
        if (options) {
            this.visible = options.visible || false;
            this.contentViewSelector = options.contentViewSelector != null && options.contentViewSelector.length > 0 ?
                options.contentViewSelector : null;
            this.contentViewDirectives = options.contentViewDirectives;
            this.contentViewProviders = options.contentViewProviders;
        }
    }
}
export class MainLayoutSet {
    visible:boolean;
}
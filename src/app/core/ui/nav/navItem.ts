import {Utils} from "../../utils/funcs";
/**
 * Created by mleader1 on 20/08/2016.
 */

export class OENavItem {
    mdIcon: string;
    mdBadge: string;
    mdBadgeOverlap: boolean;
    mdBadgeNoBackground: boolean;
    mdDivider: boolean;

    isActive: boolean;
    itemId: string;

    title: string;

    children: OENavItem[];
    data: any;

    constructor(itemId?: string, title?: string, children?: OENavItem[], data?: any) {
        this.itemId = itemId || Utils.NewGuid();
        this.children = children || [];
        this.title = title || "Untitled";
        this.data = data || {};
    }
}


export enum OEUINavPosition{
    TopOuter = 0,
    TopInner = 1,
    RightOuter = 2,
    RightInner = 3,
    BottomOuter = 4,
    BottomInner = 5,
    LeftOuter = 6,
    LeftInner = 7
}

export class OEUINavChangeItem {
    navigationPosition: OEUINavPosition;
    item: OENavItem;
}
"use strict";
var funcs_1 = require("../../utils/funcs");
/**
 * Created by mleader1 on 20/08/2016.
 */
var OENavItem = (function () {
    function OENavItem(itemId, title, children, data) {
        this.itemId = itemId || funcs_1.Utils.NewGuid();
        this.children = children || [];
        this.title = title || "Untitled";
        this.data = data || {};
    }
    return OENavItem;
}());
exports.OENavItem = OENavItem;
(function (OEUINavPosition) {
    OEUINavPosition[OEUINavPosition["TopOuter"] = 0] = "TopOuter";
    OEUINavPosition[OEUINavPosition["TopInner"] = 1] = "TopInner";
    OEUINavPosition[OEUINavPosition["RightOuter"] = 2] = "RightOuter";
    OEUINavPosition[OEUINavPosition["RightInner"] = 3] = "RightInner";
    OEUINavPosition[OEUINavPosition["BottomOuter"] = 4] = "BottomOuter";
    OEUINavPosition[OEUINavPosition["BottomInner"] = 5] = "BottomInner";
    OEUINavPosition[OEUINavPosition["LeftOuter"] = 6] = "LeftOuter";
    OEUINavPosition[OEUINavPosition["LeftInner"] = 7] = "LeftInner";
})(exports.OEUINavPosition || (exports.OEUINavPosition = {}));
var OEUINavPosition = exports.OEUINavPosition;
var OEUINavChangeItem = (function () {
    function OEUINavChangeItem() {
    }
    return OEUINavChangeItem;
}());
exports.OEUINavChangeItem = OEUINavChangeItem;
//# sourceMappingURL=navItem.js.map
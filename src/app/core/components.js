/**
 * Created by mleader1 on 02/07/2016.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var layout_1 = require("./framework/ui/layout/layout");
var section_1 = require("./framework/ui/section/section");
var OEView_1 = require("./framework/ui/view/OEView");
var OEPartialView_1 = require("./framework/ui/view/OEPartialView");
__export(require('./framework/ui/layout/layout'));
__export(require('./framework/ui/section/section'));
__export(require('./framework/ui/view/OEView'));
__export(require('./framework/ui/view/OEPartialView'));
exports.OE_CORE_DIRECTIVES = [
    layout_1.OELayout,
    section_1.OESection,
    OEView_1.OEView,
    OEPartialView_1.OEPartialView
];
//# sourceMappingURL=components.js.map
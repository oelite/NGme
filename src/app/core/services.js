"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var layout_1 = require("./framework/ui/layout/layout");
var OELayoutState_1 = require("./framework/layout/OELayoutState");
var OELayoutConfig_1 = require("./framework/layout/OELayoutConfig");
var OEUIState_1 = require("./framework/layout/OEUIState");
var OEView_1 = require("./framework/ui/view/OEView");
var OERouteState_1 = require("./framework/service/OERouteState");
var OEModuleState_1 = require("./framework/service/OEModuleState");
var OEAppState_1 = require("./framework/OEAppState");
var ApiGateway_1 = require("./framework/service/ApiGateway");
/**
 * Created by mleader1 on 29/06/2016.
 */
/** Core*/
__export(require('./framework/OEAppState'));
__export(require('./framework/layout/OELayoutState'));
__export(require('./framework/layout/OEUIState'));
__export(require('./framework/layout/OELayoutConfig'));
__export(require('./framework/ui/view/OEView'));
__export(require('./framework/service/OEModuleState'));
__export(require('./framework/OEAppState'));
__export(require('./framework/service/ApiGateway'));
/** Users */
//export * from './abstractions/users/user.service';
__export(require('./abstractions/users/signin.service'));
exports.LAYOUT_SERVICES = [
    layout_1.OELayout, OELayoutState_1.OELayoutState,
    OELayoutConfig_1.OELayoutConfig,
    OEView_1.OEView
];
exports.STATE_SERVICES = [
    OEUIState_1.OEUIState,
    OERouteState_1.OERouteState,
    OEModuleState_1.OEModuleState,
    OEAppState_1.OEAppState
];
exports.HTTP_SERVICES = [
    ApiGateway_1.ApiGateway
];
exports.ENTITY_SERVICES = [];
exports.ALL_SERVICES = [
    exports.LAYOUT_SERVICES, exports.STATE_SERVICES,
    exports.HTTP_SERVICES
];
//# sourceMappingURL=services.js.map
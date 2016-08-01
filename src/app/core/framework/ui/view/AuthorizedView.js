"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OEView_1 = require("./OEView");
var funcs_1 = require("../../../utils/funcs");
var globals_1 = require("../../../../../custom/globals");
/**
 * Created by mleader1 on 04/07/2016.
 */
var AuthorizedView = (function (_super) {
    __extends(AuthorizedView, _super);
    function AuthorizedView(appState, signInService, router, viewId) {
        var _this = this;
        _super.call(this, appState, router, viewId);
        this.signInService = signInService;
        signInService.onUserAuthenticated$.subscribe(function (result) {
            if (result.id > 0)
                _this.currentUser = result;
        });
    }
    AuthorizedView.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.currentUser = this.currentUser || this.signInService.loggedInUser;
        if (this.currentUser == null) {
            this.signInService.Authenticate(true).catch(function (e) {
                _this.router.navigateByUrl(globals_1.loginPath);
            }).then(function (res) {
                if (!res) {
                    _this.router.navigateByUrl(globals_1.loginPath);
                }
            });
        }
    };
    AuthorizedView.viewSelector = "oe-auth-view-" + funcs_1.Utils.NewGuid().toString();
    return AuthorizedView;
}(OEView_1.OEView));
exports.AuthorizedView = AuthorizedView;
//# sourceMappingURL=AuthorizedView.js.map
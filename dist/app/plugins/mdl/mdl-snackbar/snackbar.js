"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mleader1 on 06/07/2016.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
/**
 * NOTE: Lida Weng  05/07/2016
 * Ths component requires jQuery and Google MDL library (getmdl.io)
 */
var MdlSnackbar = (function () {
    function MdlSnackbar() {
        this.messages = [];
    }
    MdlSnackbar.prototype.push = function (msg) {
        var notification = document.querySelector('.mdl-js-snackbar');
        if (msg) {
            if (this.bgColor) {
                $('.mdl-snackbar').css('background-color', this.bgColor);
            }
            if (this.foreColor) {
                $('.mdl-snackbar').css('color', this.foreColor);
            }
            if (this.isFullWidth == true)
                $('.mdl-snackbar').css('width', '100%');
            if (this.showOnTop) {
                $('.mdl-snackbar').css('bottom', 'auto').css('top', '0');
            }
            else {
                $('.mdl-snackbar').css('bottom', '0');
            }
            notification.MaterialSnackbar.showSnackbar(msg);
        }
    };
    MdlSnackbar.prototype.ngAfterViewInit = function () {
        $('.mdl-snackbar').bind('DOMSubtreeModified', function () {
            if ($('.mdl-snackbar__text').html() && $('.mdl-snackbar__text').html().length > 0) {
                $('.mdl-snackbar').css("display", "block");
            }
            else {
                $('.mdl-snackbar').css("display", "none");
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSnackbar.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSnackbar.prototype, "foreColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSnackbar.prototype, "isFullWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSnackbar.prototype, "showOnTop", void 0);
    MdlSnackbar = __decorate([
        core_1.Component({
            selector: 'mdl-snackbar',
            moduleId: module.id,
            templateUrl: 'snackbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSnackbar);
    return MdlSnackbar;
}());
exports.MdlSnackbar = MdlSnackbar;
var MdlSnackbarMessage = (function () {
    function MdlSnackbarMessage(message, actionHandler, actionText, timeout) {
        this.message = message || 'untitled message';
        this.actionHandler = actionHandler;
        this.actionText = actionText;
        this.timeout = timeout || 1500;
    }
    return MdlSnackbarMessage;
}());
exports.MdlSnackbarMessage = MdlSnackbarMessage;
var OEmeMdlSnackbarModule = (function () {
    function OEmeMdlSnackbarModule() {
    }
    OEmeMdlSnackbarModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [MdlSnackbar],
            exports: [MdlSnackbar]
        }), 
        __metadata('design:paramtypes', [])
    ], OEmeMdlSnackbarModule);
    return OEmeMdlSnackbarModule;
}());
exports.OEmeMdlSnackbarModule = OEmeMdlSnackbarModule;
//# sourceMappingURL=snackbar.js.map
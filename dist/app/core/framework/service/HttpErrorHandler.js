/**
 * Created by mleader1 on 29/06/2016.
 */
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
var core_1 = require("@angular/core");
var ApiGateway_1 = require("./ApiGateway");
var HttpErrorHandler = (function () {
    function HttpErrorHandler(apiGateway) {
        this.apiGateway = apiGateway;
        apiGateway.errors$.subscribe(function (value) {
            console.group("HttpErrorHandler");
            console.log(value.status, "status code detected.");
            console.dir(value);
            console.groupEnd();
            // If the user made a request that they were not authorized
            // to, it's possible that their session has expired. Let's
            // refresh the page and let the server-side routing move the
            // user to a more appropriate landing page.
            if (value.status === 401) {
                window.location.reload();
            }
        });
    }
    HttpErrorHandler = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ApiGateway_1.ApiGateway])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());
exports.HttpErrorHandler = HttpErrorHandler;
//# sourceMappingURL=HttpErrorHandler.js.map
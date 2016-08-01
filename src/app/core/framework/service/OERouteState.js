/**
 * Created by mleader1 on 04/07/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OERouteState = (function () {
    function OERouteState() {
        this.routes = [];
        this.initRoutes();
        this.onNewRouteRegistered$ = new core_1.EventEmitter();
        this.onRouteDeregistered$ = new core_1.EventEmitter();
    }
    OERouteState.prototype.registerRoute = function (route) {
        if (route) {
            this.routes.push(route);
            this.onNewRouteRegistered$.emit(route);
        }
    };
    OERouteState.prototype.registerRoutes = function (routes) {
        if (routes && routes.length > 0) {
            for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
                var route = routes_1[_i];
                this.registerRoute(route);
            }
        }
    };
    OERouteState.prototype.deregisterRoute = function (path) {
        if (path) {
            var existingRoute = this.findRouteByPath(path);
            if (existingRoute) {
                this.routes = this.routes.splice(this.routes.indexOf(existingRoute));
                this.onRouteDeregistered$.emit(existingRoute);
            }
        }
    };
    OERouteState.prototype.findRouteByPath = function (path) {
        var filteredPath = path.toLowerCase();
        if (filteredPath.startsWith('/'))
            filteredPath = filteredPath.substring(1);
        if (filteredPath.endsWith('/'))
            filteredPath = filteredPath.substring(0, filteredPath.length - 1);
        var existingRoutes = this.routes.filter(function (item) {
            return (item.path.toLowerCase() == filteredPath) || (item.name == '' && filteredPath == '');
        });
        if (existingRoutes && existingRoutes.length > 0)
            return existingRoutes[0];
        return null;
    };
    OERouteState.prototype.initRoutes = function () {
        this.routes = [];
    };
    OERouteState = __decorate([
        core_1.Injectable()
    ], OERouteState);
    return OERouteState;
}());
exports.OERouteState = OERouteState;
//# sourceMappingURL=OERouteState.js.map
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
 * Created by mleader1 on 04/07/2016.
 */
var core_1 = require("@angular/core");
var OERouteState_1 = require("./OERouteState");
var OEModuleState = (function () {
    function OEModuleState(routeService) {
        this.routeService = routeService;
        this.modules = [];
        routeService.initRoutes();
        this.initModules();
        this.onNewModuleRegistered$ = new core_1.EventEmitter();
        this.onModuleDeregistered$ = new core_1.EventEmitter();
    }
    OEModuleState.prototype.registereModule = function (module) {
        if (module) {
            //step 1. register module
            this.modules.push(module);
            //step 2. register routes
            this.routeService.registerRoutes(module.routes);
            this.onNewModuleRegistered$.emit(module);
        }
    };
    OEModuleState.prototype.deregisterModule = function (oeId) {
        if (oeId) {
            var existingModule = this.findModuleById(oeId);
            if (existingModule) {
                this.modules = this.modules.splice(this.modules.indexOf(existingModule));
                this.onModuleDeregistered$.emit(existingModule);
            }
        }
    };
    OEModuleState.prototype.findModuleById = function (id) {
        var existingModule = this.modules.filter(function (item) {
            return item.oeId.toLowerCase() === id;
        });
        if (existingModule && existingModule.length > 0)
            return existingModule[0];
        return null;
    };
    OEModuleState.prototype.initModules = function () {
        this.modules = [];
    };
    OEModuleState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [OERouteState_1.OERouteState])
    ], OEModuleState);
    return OEModuleState;
}());
exports.OEModuleState = OEModuleState;
//# sourceMappingURL=OEModuleState.js.map
/**
 * Created by mleader1 on 04/07/2016.
 */
import {Injectable, EventEmitter} from "@angular/core";
import {IOEModule} from "../IOEModule";
import {OERouteState} from "./OERouteState";

@Injectable()
export class OEModuleState {

    public onNewModuleRegistered$:EventEmitter<IOEModule>;
    public onModuleDeregistered$:EventEmitter<IOEModule>;
    public modules:IOEModule[] = [];


    public  registereModule(module:IOEModule):void {
        if (module) {
            //step 1. register module
            this.modules.push(module);

            //step 2. register routes
            this.routeService.registerRoutes(module.routes)

            this.onNewModuleRegistered$.emit(module);
        }
    }

    public deregisterModule(oeId:string):void {
        if (oeId) {
            var existingModule = this.findModuleById(oeId);
            if (existingModule) {
                this.modules = this.modules.splice(this.modules.indexOf(existingModule));

                this.onModuleDeregistered$.emit(existingModule);
            }
        }
    }

    public findModuleById(id:string):IOEModule {
        var existingModule = this.modules.filter(item=> {
            return item.oeId.toLowerCase() === id
        });
        if (existingModule && existingModule.length > 0)
            return existingModule[0];
        return null;
    }

    public initModules():void {
        this.modules = [];
    }


    constructor(private routeService:OERouteState) {
        routeService.initRoutes();
        this.initModules();
        this.onNewModuleRegistered$ = new EventEmitter<IOEModule>();
        this.onModuleDeregistered$ = new EventEmitter<IOEModule>();

    }
}
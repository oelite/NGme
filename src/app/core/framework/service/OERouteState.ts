/**
 * Created by mleader1 on 04/07/2016.
 */

import {Injectable, EventEmitter} from "@angular/core";
import {IOERoute} from "../IOEModule";

@Injectable()
export class OERouteState {

    public onNewRouteRegistered$:EventEmitter<IOERoute>;
    public onRouteDeregistered$:EventEmitter<IOERoute>;

    public routes:IOERoute[] = [];

    public  registerRoute(route:IOERoute):void {
        if (route) {
            this.routes.push(route);
            this.onNewRouteRegistered$.emit(route);
        }
    }

    public registerRoutes(routes:IOERoute[]):void {
        if (routes && routes.length > 0) {
            for (var route of routes) {
                this.registerRoute(route);
            }
        }
    }

    public deregisterRoute(path:string):void {
        if (path) {
            var existingRoute = this.findRouteByPath(path);
            if (existingRoute) {
                this.routes = this.routes.splice(this.routes.indexOf(existingRoute));
                this.onRouteDeregistered$.emit(existingRoute);
            }
        }
    }

    public findRouteByPath(path:string):IOERoute {
        var filteredPath = path.toLowerCase();
        if (filteredPath.startsWith('/'))
            filteredPath = filteredPath.substring(1);
        if (filteredPath.endsWith('/'))
            filteredPath = filteredPath.substring(0, filteredPath.length - 1);
        var existingRoutes = this.routes.filter(item=> {
            return (item.path.toLowerCase() == filteredPath) || (item.name == '' && filteredPath == '')
        });
        if (existingRoutes && existingRoutes.length > 0)
            return existingRoutes[0];
        return null;
    }

    public  initRoutes():void {
        this.routes = [];
    }


    constructor() {
        this.initRoutes();
        this.onNewRouteRegistered$ = new EventEmitter<IOERoute>();
        this.onRouteDeregistered$ = new EventEmitter<IOERoute>();

    }
}
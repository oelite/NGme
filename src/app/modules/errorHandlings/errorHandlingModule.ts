import {IOEModule} from "../../core/framework";
import {ErrorComponent} from "./errorComponent";
import {Http} from "@angular/http";


export class ErrorHandlingModule implements IOEModule {
    moduleId = module.id;

    oeId = "app.modules.errorHandling";
    oeVersion = "1.0.0";
    routes = [
        {
            path: 'error',
            name: 'general error',
            component: ErrorComponent
        }
    ];
    moduleProviders = [Http];
    moduleDirectives = [];
}

/**
 * Created by mleader1 on 29/06/2016.
 */

import {Injectable} from "@angular/core";
import {ApiGateway} from "./ApiGateway";

@Injectable()
export class HttpErrorHandler {

    constructor(private apiGateway:ApiGateway) {
        apiGateway.errors$.subscribe(
            (value:any) => {
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
}
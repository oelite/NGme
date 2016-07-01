import {Injectable} from "@angular/core";
import {Response, RequestOptions, RequestMethod, URLSearchParams, Headers, Http} from "@angular/http";
import {Subject, Observable} from "rxjs/Rx";
/**
 * Created by mleader1 on 29/06/2016.
 * The code was adapted from
 *      https://blog.sstorie.com/adapting-ben-nadels-apigateway-to-pure-typescript/
 *
 */

// Import the rxjs operators we need (in a production app you'll
//  probably want to import only the operators you actually use)
//
export class ApiGatewayOptions {
    method:RequestMethod;
    url:string;
    headers = {};
    params = {};
    data = {};
}


@Injectable()
export class ApiGateway {

    // Define the internal Subject we'll use to push errors
    private errorsSubject = new Subject<any>();

    // Provide the *public* Observable that clients can subscribe to
    errors$:Observable<any>;

    // Define the internal Subject we'll use to push the command count
    private pendingCommandsSubject = new Subject<number>();
    private pendingCommandCount = 0;

    // Provide the *public* Observable that clients can subscribe to
    pendingCommands$:Observable<number>;

    constructor(private http:Http) {
        // Create our observables from the subjects
        this.errors$ = this.errorsSubject.asObservable();
        this.pendingCommands$ = this.pendingCommandsSubject.asObservable();

    }

    // I perform a GET request to the API, appending the given params
    // as URL search parameters. Returns a stream.
    get(url:string, params:any):Observable<Response> {
        let options = new ApiGatewayOptions();
        options.method = RequestMethod.Get;
        options.url = url;
        options.params = params;

        return this.request(options);
    }


    // I perform a POST request to the API. If both the params and data
    // are present, the params will be appended as URL search parameters
    // and the data will be serialized as a JSON payload. If only the
    // data is present, it will be serialized as a JSON payload. Returns
    // a stream.
    post(url:string, params:any, data:any):Observable<Response> {
        if (!data) {
            data = params;
            params = {};
        }
        let options = new ApiGatewayOptions();
        options.method = RequestMethod.Post;
        options.url = url;
        options.params = params;
        options.data = data;

        return this.request(options);
    }


    private request(options:ApiGatewayOptions):Observable<any> {

        options.method = (options.method || RequestMethod.Get);
        options.url = (options.url || "");
        options.headers = (options.headers || {});
        options.params = (options.params || {});
        options.data = (options.data || {});

        this.interpolateUrl(options);
        this.addXsrfToken(options);
        this.addContentType(options);

        let requestOptions = new RequestOptions();
        requestOptions.method = options.method;
        requestOptions.url = options.url;
        requestOptions.headers = <Headers> options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.params);
        requestOptions.body = JSON.stringify(options.data);

        let isCommand = (options.method !== RequestMethod.Get);

        if (isCommand) {
            this.pendingCommandsSubject.next(++this.pendingCommandCount);
        }

        let stream = this.http.request(options.url, requestOptions)
            .catch((error:any) => {
                this.errorsSubject.next(error);
                return Observable.throw(error);
            })
            .map(this.unwrapHttpValue)
            .catch((error:any) => {
                return Observable.throw(this.unwrapHttpError(error));
            })
            .finally(() => {
                if (isCommand) {
                    this.pendingCommandsSubject.next(--this.pendingCommandCount);
                }
            });

        return stream;
    }


    private addContentType(options:ApiGatewayOptions):ApiGatewayOptions {
        if (options.method !== RequestMethod.Get) {
            options.headers["Content-Type"] = "application/json; charset=UTF-8";
        }
        return options;
    }

    private extractValue(collection:any, key:string):any {
        var value = collection[key];
        delete (collection[key]);
        return value;
    }

    private addXsrfToken(options:ApiGatewayOptions):ApiGatewayOptions {
        var xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            options.headers["X-XSRF-TOKEN"] = xsrfToken;
        }
        return options;
    }

    private getXsrfCookie():string {
        var matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return (matches && decodeURIComponent(matches[1]));
        } catch (decodeError) {
            return ("");
        }
    }

    private buildUrlSearchParams(params:any):URLSearchParams {
        var searchParams = new URLSearchParams();
        for (var key in params) {
            searchParams.append(key, params[key])
        }
        return searchParams;
    }

    private interpolateUrl(options:ApiGatewayOptions):ApiGatewayOptions {
        options.url = options.url.replace(
            /:([a-zA-Z]+[\w-]*)/g,
            ($0, token) => {
                // Try to move matching token from the params collection.
                if (options.params.hasOwnProperty(token)) {
                    return (this.extractValue(options.params, token));
                }
                // Try to move matching token from the data collection.
                if (options.data.hasOwnProperty(token)) {
                    return (this.extractValue(options.data, token));
                }
                // If a matching value couldn't be found, just replace
                // the token with the empty string.
                return ("");
            }
        );
        // Clean up any repeating slashes.
        options.url = options.url.replace(/\/{2,}/g, "/");
        // Clean up any trailing slashes.
        options.url = options.url.replace(/\/+$/g, "");

        return options;
    }

    private unwrapHttpError(error:any):any {
        try {
            return (error.json());
        } catch (jsonError) {
            return ({
                code: -1,
                message: "An unexpected error occurred."
            });
        }
    }

    private unwrapHttpValue(value:Response):any {
        return (value.json());
    }
}
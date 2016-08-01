"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
/**
 * Created by mleader1 on 29/06/2016.
 * The code was adapted from
 *      https://blog.sstorie.com/adapting-ben-nadels-apigateway-to-pure-typescript/
 *
 */
// Import the rxjs operators we need (in a production app you'll
//  probably want to import only the operators you actually use)
//
var ApiGatewayOptions = (function () {
    function ApiGatewayOptions() {
        this.headers = {};
        this.params = {};
        this.data = {};
        this.contentType = ApiContentType.Json;
    }
    return ApiGatewayOptions;
}());
exports.ApiGatewayOptions = ApiGatewayOptions;
(function (ApiContentType) {
    ApiContentType[ApiContentType["Json"] = 0] = "Json";
    ApiContentType[ApiContentType["WwwForm"] = 10] = "WwwForm";
})(exports.ApiContentType || (exports.ApiContentType = {}));
var ApiContentType = exports.ApiContentType;
var ApiGateway = (function () {
    function ApiGateway(http, cookies) {
        this.http = http;
        this.cookies = cookies;
        this.CurrentUser_AuthToken = 'oe.users.currentUserAuthToken';
        this.CurrentUser_TimeStamp = 'oe.users.currentUserTimeStamp';
        // Define the internal Subject we'll use to push errors
        this.errorsSubject = new Rx_1.Subject();
        // Define the internal Subject we'll use to push the command count
        this.pendingCommandsSubject = new Rx_1.Subject();
        this.pendingCommandCount = 0;
        // Create our observables from the subjects
        this.errors$ = this.errorsSubject.asObservable();
        this.pendingCommands$ = this.pendingCommandsSubject.asObservable();
    }
    Object.defineProperty(ApiGateway.prototype, "UserAuthToken", {
        get: function () {
            if (this.UserTimeStamp)
                return localStorage.getItem(this.CurrentUser_AuthToken);
            else
                return null;
        },
        set: function (value) {
            localStorage.setItem(this.CurrentUser_AuthToken, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiGateway.prototype, "UserTimeStamp", {
        get: function () {
            return this.cookies.getObject(this.CurrentUser_TimeStamp);
        },
        set: function (value) {
            if (value)
                this.cookies.putObject(this.CurrentUser_TimeStamp, value);
            else
                this.cookies.remove(this.CurrentUser_TimeStamp);
        },
        enumerable: true,
        configurable: true
    });
    // I perform a GET request to the API, appending the given params
    // as URL search parameters. Returns a stream.
    ApiGateway.prototype.get = function (url, params, headers, contentType) {
        var options = new ApiGatewayOptions();
        options.method = http_1.RequestMethod.Get;
        options.url = url;
        options.params = params;
        options.headers = headers;
        options.contentType = contentType || ApiContentType.Json;
        return this.request(options);
    };
    // I perform a POST request to the API. If both the params and data
    // are present, the params will be appended as URL search parameters
    // and the data will be serialized as a JSON payload. If only the
    // data is present, it will be serialized as a JSON payload. Returns
    // a stream.
    ApiGateway.prototype.post = function (url, params, data, headers, contentType) {
        if (!data) {
            data = params;
            params = {};
        }
        var options = new ApiGatewayOptions();
        options.method = http_1.RequestMethod.Post;
        options.url = url;
        options.params = params;
        options.data = data;
        options.headers = headers;
        options.contentType = contentType || ApiContentType.Json;
        return this.request(options);
    };
    ApiGateway.prototype.request = function (options) {
        var _this = this;
        options.method = (options.method || http_1.RequestMethod.Get);
        options.url = (options.url || "");
        options.headers = (options.headers || {});
        options.params = (options.params || {});
        options.data = (options.data || {});
        this.interpolateUrl(options);
        this.addXsrfToken(options);
        this.addBearJwtToken(options);
        this.addContentType(options);
        var requestOptions = new http_1.RequestOptions();
        requestOptions.method = options.method;
        requestOptions.url = options.url;
        requestOptions.headers = options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.params);
        requestOptions.body = JSON.stringify(options.data);
        if (options.method == http_1.RequestMethod.Post) {
            requestOptions.body = requestOptions.search + '&' + this.buildUrlSearchParams(options.data);
            requestOptions.search = null;
        }
        var isCommand = (options.method !== http_1.RequestMethod.Get);
        if (isCommand) {
            this.pendingCommandsSubject.next(++this.pendingCommandCount);
        }
        var stream = this.http.request(options.url, requestOptions)
            .catch(function (error) {
            console.log(error);
            _this.errorsSubject.next(error);
            return Rx_1.Observable.throw(error);
        })
            .map(this.unwrapHttpValue)
            .catch(function (error) {
            return Rx_1.Observable.throw(_this.unwrapHttpError(error));
        })
            .finally(function () {
            if (isCommand) {
                _this.pendingCommandsSubject.next(--_this.pendingCommandCount);
            }
        });
        return stream;
    };
    ApiGateway.prototype.addContentType = function (options) {
        switch (options.contentType) {
            case ApiContentType.WwwForm:
                options.headers["Content-Type"] = "application/x-www-form-urlencoded";
                break;
            default:
            case ApiContentType.Json:
                options.headers["Content-Type"] = "application/json; charset=UTF-8";
                break;
        }
        return options;
    };
    ApiGateway.prototype.extractValue = function (collection, key) {
        var value = collection[key];
        delete (collection[key]);
        return value;
    };
    ApiGateway.prototype.addXsrfToken = function (options) {
        var xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            options.headers["X-XSRF-TOKEN"] = xsrfToken;
        }
        return options;
    };
    ApiGateway.prototype.addBearJwtToken = function (options) {
        var authToken = this.UserAuthToken;
        if (authToken)
            options.headers["Authorization"] = "Bearer " + authToken;
        return options;
    };
    ApiGateway.prototype.getXsrfCookie = function () {
        var matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return (matches && decodeURIComponent(matches[1]));
        }
        catch (decodeError) {
            return ("");
        }
    };
    ApiGateway.prototype.buildUrlSearchParams = function (params) {
        var searchParams = new http_1.URLSearchParams();
        for (var key in params) {
            searchParams.append(key, params[key]);
        }
        return searchParams;
    };
    ApiGateway.prototype.interpolateUrl = function (options) {
        var _this = this;
        var isHttp = options.url.toLowerCase().startsWith('http://');
        var isHttps = options.url.toLowerCase().startsWith('https://');
        var isDefaultProtocol = options.url.toLowerCase().startsWith('//');
        if (isHttp)
            options.url = options.url.substring(7);
        else if (isHttps)
            options.url = options.url.substring(8);
        else if (isDefaultProtocol)
            options.url = options.url.substring(2);
        options.url = options.url.replace(/:([a-zA-Z]+[\w-]*)/g, function ($0, token) {
            // Try to move matching token from the params collection.
            if (options.params.hasOwnProperty(token)) {
                return (_this.extractValue(options.params, token));
            }
            // Try to move matching token from the data collection.
            if (options.data.hasOwnProperty(token)) {
                return (_this.extractValue(options.data, token));
            }
            // If a matching value couldn't be found, just replace
            // the token with the empty string.
            return ("");
        });
        // Clean up any repeating slashes.
        options.url = options.url.replace(/\/{2,}/g, "/");
        // Clean up any trailing slashes.
        options.url = options.url.replace(/\/+$/g, "");
        if (isHttp)
            options.url = 'http://' + options.url;
        else if (isHttps)
            options.url = 'https://' + options.url;
        else if (isDefaultProtocol)
            options.url = '//' + options.url;
        return options;
    };
    ApiGateway.prototype.unwrapHttpError = function (error) {
        try {
            return (error.json());
        }
        catch (jsonError) {
            return ({
                code: -1,
                message: "An unexpected error occurred."
            });
        }
    };
    ApiGateway.prototype.unwrapHttpValue = function (value) {
        return (value.json());
    };
    ApiGateway = __decorate([
        core_1.Injectable()
    ], ApiGateway);
    return ApiGateway;
}());
exports.ApiGateway = ApiGateway;
//# sourceMappingURL=ApiGateway.js.map
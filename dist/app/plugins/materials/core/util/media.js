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
 * Created by mleader1 on 01/07/2016.
 */
var core_1 = require("@angular/core");
var viewport_1 = require("./viewport");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
/**
 * As defined in core/style/variables.scss
 *
 * $layout-breakpoint-xs:     600px !default;
 * $layout-breakpoint-sm:     960px !default;
 * $layout-breakpoint-md:     1280px !default;
 * $layout-breakpoint-lg:     1920px !default;
 *
 */
exports.MEDIA = {
    'xs': '(max-width: 599px)',
    'gt-xs': '(min-width: 600px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'gt-sm': '(min-width: 960px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'gt-md': '(min-width: 1280px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'gt-lg': '(min-width: 1920px)',
    'xl': '(min-width: 1920px)'
};
exports.MEDIA_PRIORITY = [
    'xl',
    'gt-lg',
    'lg',
    'gt-md',
    'md',
    'gt-sm',
    'sm',
    'gt-xs',
    'xs'
];
/**
 * Reference to a Media query listener. When you are done with it, call the `destroy` method
 * to release its reference.
 */
var MediaListener = (function () {
    function MediaListener(query, zone, mql, media) {
        this.query = query;
        this.zone = zone;
        this.mql = mql;
        this.media = media;
        /**
         * Emits when the query that this is listening for changes.
         */
        this.onMatched = new BehaviorSubject_1.BehaviorSubject(this.mql);
        this._destroyed = false;
        var subject = this.onMatched;
        this._listener = function (mql) {
            zone.run(function () { return subject.next(mql); });
        };
        this.mql.addListener(this._listener);
    }
    Object.defineProperty(MediaListener.prototype, "matches", {
        /**
         * Determine if this query is currently matched by the viewport.
         * @returns {boolean} True if the query is matched.
         */
        get: function () {
            return !this._destroyed && this.mql.matches;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy and unhook this listener.
     */
    MediaListener.prototype.destroy = function () {
        if (!this._destroyed) {
            this.mql.removeListener(this._listener);
            this.media.unregisterListener(this);
            this._destroyed = true;
            this._listener = null;
            this.mql = null;
        }
    };
    return MediaListener;
}());
exports.MediaListener = MediaListener;
/**
 * Injectable class for being notified of changes to viewport media queries.
 */
var Media = (function () {
    function Media(viewport, zone) {
        this.viewport = viewport;
        this.zone = zone;
        this.cache = {};
    }
    Media.prototype.listen = function (query) {
        var listener = this.cache[query];
        if (!listener) {
            listener = this.cache[query] = {
                mql: this.viewport.matchMedia(query),
                references: 0
            };
        }
        listener.references++;
        return new MediaListener(query, this.zone, listener.mql, this);
    };
    Media.prototype.unregisterListener = function (listener) {
        var cached = this.cache[listener.query];
        if (cached) {
            cached.references--;
            if (cached.references === 0) {
                delete this.cache[listener.query];
            }
        }
    };
    Media.prototype.hasMedia = function (size) {
        var query = Media.getQuery(size);
        if (!query) {
            return false;
        }
        return this.viewport.matchMedia(query).matches;
    };
    Media.getQuery = function (size) {
        var query = exports.MEDIA[size];
        if (!query) {
            console.warn("unknown media query size " + size + ". Expected one of [" + exports.MEDIA_PRIORITY.join(',') + "]");
            return null;
        }
        return query;
    };
    Media = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [viewport_1.ViewportHelper, core_1.NgZone])
    ], Media);
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=media.js.map
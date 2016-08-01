"use strict";
/**
 * Created by mleader1 on 01/07/2016.
 */
function parseTabIndexAttribute(attr) {
    return !!attr ? parseInt(attr, 10) : 0;
}
exports.parseTabIndexAttribute = parseTabIndexAttribute;
function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}
exports.isNumber = isNumber;
//# sourceMappingURL=util.js.map
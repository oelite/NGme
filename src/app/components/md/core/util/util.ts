/**
 * Created by mleader1 on 01/07/2016.
 */
export function parseTabIndexAttribute(attr:any):number {
    return !!attr ? parseInt(attr, 10) : 0;
}

export function isNumber(value:any):boolean {
    return Object.prototype.toString.call(value) === '[object Number]';
}

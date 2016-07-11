import {OE_NAVLIST_DIRECTIVES} from "./oeme/navlist/navlist";
import {MdInk} from "./materials/ink/ink";
import {OE_JQuery_BackStretch} from "./oeme/backstretch/backstrech";
import {MdlSnackbar} from "./mdl/mdl-snackbar/snackbar";

export * from '@angular2-material/core';
export * from '@angular2-material/icon';
export * from '@angular2-material/button';
export * from '@angular2-material/card';
export * from '@angular2-material/checkbox';
export * from '@angular2-material/core';
export * from '@angular2-material/grid-list';
export * from '@angular2-material/icon';
export * from '@angular2-material/input';
export * from '@angular2-material/list';
export * from '@angular2-material/progress-bar';
export * from '@angular2-material/progress-circle';
export * from '@angular2-material/radio';
export * from '@angular2-material/sidenav';
export * from '@angular2-material/slide-toggle';
export * from '@angular2-material/tabs';
export * from '@angular2-material/toolbar';


//export * from './materials/index';


export * from './mdl/mdl.component';


//OElite Custom Plugins
export * from './oeme/navlist/navlist';
export * from './oeme/backstretch/backstrech';
export * from './mdl/mdl-snackbar/snackbar';


export const OE_MD_DIRECTIVES = [
    MdInk,

    OE_NAVLIST_DIRECTIVES,
    OE_JQuery_BackStretch,

    MdlSnackbar
];
/**
 * Created by mleader1 on 02/07/2016.
 */

import {OELayout} from "./framework/ui/layout/layout";
import {OESection} from "./framework/ui/section/section";
import {OEView} from "./framework/ui/view/OEView";
import {OEPartialView} from "./framework/ui/view/OEPartialView";

export * from './framework/ui/layout/layout';
export * from './framework/ui/section/section';
export * from './framework/ui/view/OEView';
export * from './framework/ui/view/OEPartialView'


export const OE_CORE_DIRECTIVES = [
    OELayout,
    OESection,
    OEView,
    OEPartialView
];
/**
 * Created by mleader1 on 15/08/2016.
 */


import {Routes} from "@angular/router";
import {HomePage} from "../../views/home/home.page";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'dashboard',
        component: HomePage
    }
];
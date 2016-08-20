import {Routes} from "@angular/router";
import {NotFoundPage} from "../../views/error/notfound.page";
import {LoginPage} from "../../views/login/login.page";

/**
 * Created by mleader1 on 15/08/2016.
 */



export const baseRoutes: Routes = [{
    path: "login",
    component: LoginPage
}, {
    path: "**",
    component: NotFoundPage
}];
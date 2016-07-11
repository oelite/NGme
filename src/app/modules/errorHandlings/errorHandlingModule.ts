import {ErrorPage} from "../../views/pages/error/error.page";
import {SimpleMasterPage} from "../../views/masterpages/simple/simple.masterpage";


export const MODULES_ERRORHANDLING = {
    oeId: "app.modules.errorHandling",
    oeVersion: "1.0.0",

    routes: [
        {
            path: 'error',
            name: 'general error',
            viewSelector: ErrorPage.viewSelector,
            page: ErrorPage,
            master: SimpleMasterPage
        }
    ]
};

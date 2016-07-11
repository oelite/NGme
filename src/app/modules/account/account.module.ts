import {LoginPage} from "../../views/pages/login/login.page";
import {SimpleMasterPage} from "../../views/masterpages/simple/simple.masterpage";
/**
 * Created by mleader1 on 04/07/2016.
 */

export const MODULES_Account =
{
    oeId: "modules.account",
    oeVersion: "1.0.0",
    routes: [
        {
            path: 'login',
            name: 'account.login',
            viewSelector: LoginPage.viewSelector,
            page: LoginPage,
            master: SimpleMasterPage
        }
    ]
};
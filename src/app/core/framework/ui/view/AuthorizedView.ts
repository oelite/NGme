import {OEView} from "./OEView";
import {SignInService} from "../../../abstractions/users/signin.service";
import {User} from "../../../abstractions/users/user";
import {OEAppState} from "../../OEAppState";
import {Utils} from "../../../utils/funcs";
/**
 * Created by mleader1 on 04/07/2016.
 */


export abstract class AuthorizedView extends OEView {
    public currentUser:User;
    public static viewSelector:string = "oe-auth-view-" + Utils.NewGuid().toString();

    constructor(appState:OEAppState, signInService:SignInService) {
        super(appState);

        signInService.onUserAuthenticated$.subscribe(result=> {
            console.log('user authenticated' + JSON.stringify(result));
            this.currentUser = result;
        })
    }
}
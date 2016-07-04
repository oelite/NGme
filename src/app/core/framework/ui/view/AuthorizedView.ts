import {OEView} from "./OEView";
import {OELayoutState} from "../../layout/OELayoutState";
import {SignInService} from "../../../abstractions/users/signin.service";
import {UserService} from "../../../abstractions/users/user.service";
import {User} from "../../../abstractions/users/user";
import {loginPath} from "../../../../../custom/globals";
/**
 * Created by mleader1 on 04/07/2016.
 */


export abstract class AuthorizedView extends OEView {
    public currentUser:User;

    constructor(appLayoutState:OELayoutState, signInService:SignInService, userService:UserService) {
        super(appLayoutState);

        signInService.Authenticate().subscribe(result=> {
            if (result)
                this.currentUser = signInService.loggedInUser;
            else
                window.location.href = loginPath;
        }, (error:any)=> {
            console.warn('failed retrieving user details');
            console.warn(error);

            window.location.href = loginPath;

        });
    }
}
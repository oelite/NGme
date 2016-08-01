import {OEView} from "./OEView";
import {SignInService} from "../../../abstractions/users/signin.service";
import {User} from "../../../abstractions/users/user";
import {OEAppState} from "../../OEAppState";
import {Utils} from "../../../utils/funcs";
import {Router} from "@angular/router";
import {loginPath} from "../../../../../custom/globals";
/**
 * Created by mleader1 on 04/07/2016.
 */


export abstract class AuthorizedView extends OEView {
    public currentUser:User;
    public static viewSelector:string = "oe-auth-view-" + Utils.NewGuid().toString();

    constructor(appState:OEAppState, private signInService:SignInService, router:Router, viewId:string) {
        super(appState, router, viewId);

        signInService.onUserAuthenticated$.subscribe(result=> {
            if (result.id > 0)
                this.currentUser = result;
        })
    }

    ngOnInit() {
        super.ngOnInit();
        this.currentUser = this.currentUser || this.signInService.loggedInUser;
        if (this.currentUser == null) {
            this.signInService.Authenticate(true).catch(e=> {
                this.router.navigateByUrl(loginPath);
            }).then((res)=> {
                if (!res) {
                    this.router.navigateByUrl(loginPath);
                }
            });
        }

    }
}
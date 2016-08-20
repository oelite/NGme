import {OEView} from "./OEView";
import {SignInService} from "../../../abstractions/users/signin.service";
import {User} from "../../../abstractions/users/user";
import {OEAppState} from "../../OEAppState";
import {Utils} from "../../../utils/funcs";
import {Router, ActivatedRoute} from "@angular/router";
import {loginPath} from "../../../../../custom/globals";
import {ElementRef} from "@angular/core";
/**
 * Created by mleader1 on 04/07/2016.
 */


export abstract class AuthorizedView extends OEView {
    public currentUser: User;
    public static viewSelector: string = "oe-auth-view-" + Utils.NewGuid().toString();

    constructor(appState: OEAppState, router: Router, activatedRoute: ActivatedRoute, public signInService: SignInService, viewId: string) {
        super(appState, router, activatedRoute, viewId);

        this.signInService.onUserAuthenticated$.subscribe(result=> {
            if (result.id > 0)
                this.currentUser = result;
        })
    }

    ngOnInit() {
        console.log('a==============a');
        console.log(this.signInService.loggedInUser);
        this.currentUser = this.currentUser || this.signInService.loggedInUser;
        // if (this.currentUser == null) {
        //     this.signInService.Authenticate(true).catch(e=> {
        //         this.router.navigateByUrl(loginPath);
        //     }).then((res)=> {
        //         if (!res) {
        //             this.router.navigateByUrl(loginPath);
        //         }
        //     });
        // }

        super.ngOnInit();

    }
}
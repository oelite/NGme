/**
 * Created by mleader1 on 28/06/2016.
 */
export interface IOEmeNavigationSet {
    leftNav:IOEmeNavigation;
    rightNav:IOEmeNavigation;
    bottomNav:IOEmeNavigation;
    topNav:IOEmeNavigation;
    primaryNav:IOEmeNavigation;
    secondaryNav:IOEmeNavigation;
}

export interface IOEmeNavigation {
    name:string; //navigation name
}
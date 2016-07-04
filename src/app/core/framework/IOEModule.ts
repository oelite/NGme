/**
 * Created by mleader1 on 27/06/2016.
 */
export interface IOEModule {
    oeId:string;
    oeVersion:string;

    routes:any[];
    moduleProviders:any[],
    moduleDirectives:any[];
}

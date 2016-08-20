/**
 * Created by mleader1 on 27/06/2016.
 */
export interface IOEModule {
    oeId: string;
    oeVersion: string;

    viewDirectives: any[];
}
export interface IOERoute {
    name?: string;
    path?: string;
    page?: string;
    master?: string;
    viewSelector?: string;

}






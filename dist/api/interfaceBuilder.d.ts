import { ApiMethod, ApiCall } from "./types";
export declare class ApiInterface<REQ, RES> {
    readonly resourceName: string;
    readonly method: ApiMethod;
    apiCall: ApiCall<REQ, RES>;
    constructor(resourceName: string, method: ApiMethod);
    implementApi: (apiCall: ApiCall<REQ, RES>) => void;
    callApi: (req: REQ) => RES;
}
export declare const defineApi: <REQ, RES>(method: ApiMethod, path: string) => ApiInterface<REQ, RES>;

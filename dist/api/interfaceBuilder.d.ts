import { ApiMethod, ApiCall } from "./types";
export declare class ApiInterface<REQ, RES> {
    readonly version: string;
    readonly resourceName: string;
    readonly method: ApiMethod;
    private apiCall;
    constructor(version: string, resourceName: string, method: ApiMethod);
    implementApi: (apiCall: ApiCall<REQ, RES>) => void;
    callApi: (req: REQ) => RES;
    get path(): string;
}
export declare const defineApi: <REQ, RES>(version: string, method: ApiMethod, path: string) => ApiInterface<REQ, RES>;

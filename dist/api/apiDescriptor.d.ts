export declare enum ApiMethod {
    POST = 0,
    GET = 1,
    DELETE = 2,
    PUT = 3
}
export declare type ApiBody<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;
export declare class ApiDeclaration<REQ, RES, VERSION> {
    readonly resourceName: string;
    readonly method: ApiMethod;
    readonly apiMap: Map<VERSION, ApiBody<REQ, RES>>;
    constructor(resourceName: string, method: ApiMethod);
    defineApi(version: VERSION, apiBody: ApiBody<REQ, RES>): void;
}
export declare const declareApi: <REQ, RES, VERSION>(method: ApiMethod, resourceName: string) => ApiDeclaration<REQ, RES, VERSION>;

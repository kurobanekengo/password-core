export declare type ApiMethod = "POST" | "GET" | "DELETE" | "PUT";
export declare const apiMethod: {
    POST: "POST";
    GET: "GET";
    DELETE: "DELETE";
    PUT: "PUT";
};
export declare type ApiBody<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;
export declare class ApiDeclaration<REQ, RES, VERSION> {
    readonly resourceName: string;
    readonly method: ApiMethod;
    readonly apiMap: Map<VERSION, ApiBody<REQ, RES>>;
    constructor(resourceName: string, method: ApiMethod);
    defineApi: (version: VERSION, apiBody: ApiBody<REQ, RES>) => void;
    getApi: (version: VERSION) => {
        apiPath: string;
        apiBody: ApiBody<REQ, RES>;
    };
}
export declare const declareApi: <REQ, RES, VERSION>(method: ApiMethod, resourceName: string) => ApiDeclaration<REQ, RES, VERSION>;

export declare type ApiMethod = "POST" | "GET" | "DELETE" | "PUT";
export declare const POST: ApiMethod;
export declare const GET: ApiMethod;
export declare const DELETE: ApiMethod;
export declare const PUT: ApiMethod;
export declare const ApiMethod: {
    POST: "POST";
    GET: "GET";
    DELETE: "DELETE";
    PUT: "PUT";
};
export declare type ApiCall<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;
export interface ApiRequest<T> {
    data: T;
}
export interface ApiResponse<T> {
    data: T;
}

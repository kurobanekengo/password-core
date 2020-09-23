import { ApiRequest, ApiResponse } from "./types";
import { PasswordSearchCondition } from "./request/passwordSearchCondition";
import { PasswordSearchResponse } from "./response/passwordSearchResponse";
declare const v1: {
    v1: {
        getPasswords: import("./interfaceBuilder").ApiInterface<ApiRequest<PasswordSearchCondition>, ApiResponse<PasswordSearchResponse>>;
    };
};
export declare const Api: typeof v1;
export {};

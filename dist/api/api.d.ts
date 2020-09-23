import { ApiRequest, ApiResponse } from "./types";
import { PasswordSearchCondition } from "./request/passwordSearchCondition";
import { PasswordSearchResponse } from "./response/passwordSearchResponse";
export declare const Api: {
    v1: {
        getPasswords: import("./interfaceBuilder").ApiInterface<ApiRequest<PasswordSearchCondition>, ApiResponse<PasswordSearchResponse>>;
    };
};

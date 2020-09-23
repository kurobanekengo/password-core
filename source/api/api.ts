import { ApiMethod, GET, ApiRequest, ApiResponse } from "./types";
import { defineApi } from "./interfaceBuilder";
import { PasswordSearchCondition } from "./request/passwordSearchCondition";
import { PasswordSearchResponse } from "./response/passwordSearchResponse";

const PASSWORD = "password";

function def<REQ, RES>(method: ApiMethod, resourceName: string) {
  return defineApi<ApiRequest<REQ>, ApiResponse<RES>>(method, resourceName);
}

export const Api  = {
  "v1": {
    getPasswords: def<PasswordSearchCondition, PasswordSearchResponse>(GET, PASSWORD),
  }
};
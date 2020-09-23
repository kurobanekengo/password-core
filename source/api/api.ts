import { ApiMethod, GET, ApiRequest, ApiResponse } from "./types";
import { defineApi } from "./interfaceBuilder";
import { PasswordSearchCondition } from "./request/passwordSearchCondition";
import { PasswordSearchResponse } from "./response/passwordSearchResponse";

const PASSWORD = "password";

const createV1 = () => {
  const v = "v1";
  function def<REQ, RES>(method: ApiMethod, resourceName: string) {
    return defineApi<ApiRequest<REQ>, ApiResponse<RES>>(v, method, resourceName);
  }
  return {
    [v]: {
      getPasswords: def<PasswordSearchCondition, PasswordSearchResponse>(GET, PASSWORD)
    }
  };
};

const v1 = createV1();
export const Api: typeof v1  = {
  ...v1
};

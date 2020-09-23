import { ApiMethod, ApiCall } from "./types";

export class ApiInterface<REQ, RES> {
  readonly resourceName: string;
  readonly method: ApiMethod;
  public apiCall: ApiCall<REQ, RES>;
  constructor(resourceName: string, method: ApiMethod) {
    this.resourceName = resourceName;
    this.method = method;
  }
  implementApi = (apiCall: ApiCall<REQ, RES>) => {
    this.apiCall = apiCall;
  };
  callApi = (req: REQ) => {
    return this.apiCall(req);
  }
}

export const defineApi = <REQ, RES>(
  method: ApiMethod,
  path: string
): ApiInterface<REQ, RES> => {
  return new ApiInterface<REQ, RES>(path, method);
};
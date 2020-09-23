import { ApiMethod, ApiCall } from "./types";

export class ApiInterface<REQ, RES> {
  readonly version: string;
  readonly resourceName: string;
  readonly method: ApiMethod;
  private apiCall: ApiCall<REQ, RES>;
  constructor(version: string, resourceName: string, method: ApiMethod) {
    this.version = version;
    this.resourceName = resourceName;
    this.method = method;
  }
  implementApi = (apiCall: ApiCall<REQ, RES>) => {
    this.apiCall = apiCall;
  };
  callApi = (req: REQ) => {
    return this.apiCall(req);
  }
  get path() {
    return `${this.version}/${this.resourceName}`
  }
}

export const defineApi = <REQ, RES>(
  version: string,
  method: ApiMethod,
  path: string
): ApiInterface<REQ, RES> => {
  return new ApiInterface<REQ, RES>(version, path, method);
};
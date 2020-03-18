export type ApiMethod = "POST" | "GET" | "DELETE" | "PUT";
const POST: ApiMethod = "POST";
const GET: ApiMethod = "GET";
const DELETE: ApiMethod = "DELETE";
const PUT: ApiMethod = "PUT";

export const apiMethod = {
  POST, GET, DELETE, PUT
};

export type ApiBody<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;

export class ApiDeclaration<REQ, RES, VERSION> {
  readonly resourceName: string;
  readonly method: ApiMethod;
  readonly apiMap: Map<VERSION, ApiBody<REQ, RES>>;
  constructor(resourceName: string, method: ApiMethod) {
    this.resourceName = resourceName;
    this.method = method;
    this.apiMap = new Map();
  }
  defineApi = (version: VERSION, apiBody: ApiBody<REQ, RES>) => {
    this.apiMap.set(version, apiBody);
  };
  getApi = (version: VERSION) => {
    const apiPath = `v${version}/${this.resourceName}`;
    const apiBody = this.apiMap.get(version);
    if (apiBody == null) {
      throw new Error(`[error] ${this.method}: ${apiPath} is not implemented`);
    }
    return {
      apiPath, apiBody
    };
  };
}

export const declareApi = <REQ, RES, VERSION>(
  method: ApiMethod,
  resourceName: string
): ApiDeclaration<REQ, RES, VERSION> => {
  return new ApiDeclaration<REQ, RES, VERSION>(resourceName, method);
};
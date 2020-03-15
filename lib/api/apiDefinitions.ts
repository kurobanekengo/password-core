import axios from 'axios';
import {ApiDeclaration, ApiMethod, declareApi} from "./apiDescriptor";

export const ApiDeclarations = {
  getPasswords: declareApi<string, string, 1>(ApiMethod.GET, "passwords")
};

export type ApiClient<REQUEST, RESPONSE, VERSION> = (req: REQUEST, ver: VERSION) => Promise<RESPONSE>;

const createApiClient = <REQ, RES, VERSION>(desc: ApiDeclaration<REQ, RES, VERSION>): ApiClient<REQ, RES, VERSION> => {
  return (req, ver) => {
    const apiPath = `http://${desc.resourceName}`;
    return axios.get<REQ>("")
      .then((res: any) => {
        return res;
      });
  }
};

const foo = createApiClient(ApiDeclarations.getPasswords);
foo("", 1);
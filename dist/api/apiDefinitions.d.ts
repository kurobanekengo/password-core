import { ApiDeclaration } from "./apiDescriptor";
export declare const ApiDeclarations: {
    getPasswords: ApiDeclaration<string, string, 1>;
};
export declare type ApiClient<REQUEST, RESPONSE, VERSION> = (req: REQUEST, ver: VERSION) => Promise<RESPONSE>;

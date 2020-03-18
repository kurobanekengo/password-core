import { ApiDeclaration } from "./apiDescriptor";
import { Void } from "../model/void";
import { PasswordEntity } from "../entity/passwordEntity";
export declare const ApiDeclarations: {
    getPasswords: ApiDeclaration<Void, PasswordEntity[], 1>;
};
export declare type ApiClient<REQUEST, RESPONSE, VERSION> = (req: REQUEST, ver: VERSION) => Promise<RESPONSE>;

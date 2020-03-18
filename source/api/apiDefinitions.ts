import {apiMethod, declareApi} from "@api/apiDescriptor";
import {Void} from "@model/void";
import {PasswordEntity} from "@entity/passwordEntity";

export const ApiDeclarations = {
  getPasswords: declareApi<Void, PasswordEntity[], 1>(apiMethod.GET, "passwords")
};
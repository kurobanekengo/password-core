import {apiMethod, declareApi} from "@api/apiDescriptor";
import {PasswordEntity} from "@entity/passwordEntity";
import {CategoryEntity} from "@entity/categoryEntity";
import { Void } from "@model/common";
import {Resources} from "@model/resources";

export const ApiDeclarations = {
  getPasswords: declareApi<Void, PasswordEntity[], 1>(apiMethod.GET, "passwords"),
  getPasswords2: declareApi<Void, PasswordEntity[], 2>(apiMethod.GET, "passwords"),
  getCategories: declareApi<Void, CategoryEntity[], 1>(apiMethod.GET, "categories"),
  getResources: declareApi<Void, Resources, 1>(apiMethod.GET, "resources")
};
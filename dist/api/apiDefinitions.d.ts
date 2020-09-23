import { PasswordEntity } from "../entity/passwordEntity";
import { CategoryEntity } from "../entity/categoryEntity";
import { Void } from "../model/common";
import { Resources } from "../model/resources";
export declare const ApiDeclarations: {
    getPasswords: import("./apiDescriptor").ApiDeclaration<Void, PasswordEntity[], 1>;
    getPasswords2: import("./apiDescriptor").ApiDeclaration<Void, PasswordEntity[], 2>;
    getCategories: import("./apiDescriptor").ApiDeclaration<Void, CategoryEntity[], 1>;
    getResources: import("./apiDescriptor").ApiDeclaration<Void, Resources, 1>;
};

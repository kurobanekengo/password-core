import { CategoryEntity } from "../entity/categoryEntity";
import { PasswordEntity } from "../entity/passwordEntity";
import { Resource } from "./resource";
export interface Resources {
    categories: Resource<CategoryEntity>;
    passwords: Resource<PasswordEntity>;
}

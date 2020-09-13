import {CategoryEntity} from "@entity/categoryEntity";
import {PasswordEntity} from "@entity/passwordEntity";
import {Resource} from "@model/resource";

export interface Resources {
 categories: Resource<CategoryEntity>;
 passwords: Resource<PasswordEntity>;
}

import {CategoryEntity} from "@entity/categoryEntity";
import {PasswordEntity} from "@entity/passwordEntity";

export interface Resources {
 categories: Map<string, CategoryEntity>;
 passwords: Map<string, PasswordEntity>;
}
import { CategoryId } from "../../entity/categoryEntity";
export interface PasswordSearchCondition {
    keyword: string;
    categoryId: CategoryId;
}
export declare class PasswordSearchCondition {
    static isPasswordSearchCondition(json: unknown): json is PasswordSearchCondition;
}

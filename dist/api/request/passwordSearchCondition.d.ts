import { CategoryId } from "../../entity/categoryEntity";
export interface PasswordSearchCondition {
    keyword: string;
    categoryId: CategoryId;
}

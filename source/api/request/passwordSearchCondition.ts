import { CategoryId } from "@entity/categoryEntity";
import { DefaultJsonTypeConverter } from "dist/converter/jsonTypeConverter/defaultJsonTypeConverter";
import { isString } from "util";

export interface PasswordSearchCondition {
  keyword: string;
  categoryId: CategoryId
}

const converter = DefaultJsonTypeConverter
.getInstance<PasswordSearchCondition>()
.has('keyword', isString, true)
.has('categoryId', isString, true)
;

export class PasswordSearchCondition {
  static isPasswordSearchCondition(json: unknown): json is PasswordSearchCondition {
    return converter.canBe(json);
  }
}
import { isString } from "util";
import { Id } from "@model/common";
import { DefaultJsonTypeConverter } from "source/converter/jsonTypeConverter/defaultJsonTypeConverter";

export type CategoryId = Id<"CategoryEntity"> & string;
export const CategoryId = (id: string): CategoryId  => id as CategoryId;
export interface CategoryEntity {
  id: CategoryId;
  name: string;
  description: string;
}

const converter = DefaultJsonTypeConverter
.getInstance<CategoryEntity>()
.has('id', isString)
.has('name', isString)
.has('description', isString)
;

export class CategoryEntity {
  static isCategory(json: unknown): json is CategoryEntity {
    return converter.canBe(json);
  }
}
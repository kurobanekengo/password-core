import { isString } from "util";
import { DefaultJsonTypeConverter } from "source/converter/jsonTypeConverter/defaultJsonTypeConverter";

export interface CategoryEntity {
  id: string;
  name: string;
  description: string;
}

const converter = DefaultJsonTypeConverter
.getInstance<CategoryEntity>()
.has('id', isString)
.has('name', isString)
.has('description', isString)
;

export const isCategory = (json: unknown): json is CategoryEntity => {
  return converter.canBe(json);
};
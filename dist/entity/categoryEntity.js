"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const defaultJsonTypeConverter_1 = require("../converter/jsonTypeConverter/defaultJsonTypeConverter");
exports.CategoryId = (id) => id;
const converter = defaultJsonTypeConverter_1.DefaultJsonTypeConverter
    .getInstance()
    .has('id', util_1.isString)
    .has('name', util_1.isString)
    .has('description', util_1.isString);
class CategoryEntity {
    static isCategory(json) {
        return converter.canBe(json);
    }
}
exports.CategoryEntity = CategoryEntity;
//# sourceMappingURL=categoryEntity.js.map
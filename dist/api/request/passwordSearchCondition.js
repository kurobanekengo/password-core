"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultJsonTypeConverter_1 = require("source/converter/jsonTypeConverter/defaultJsonTypeConverter");
const util_1 = require("util");
const converter = defaultJsonTypeConverter_1.DefaultJsonTypeConverter
    .getInstance()
    .has('keyword', util_1.isString, true)
    .has('categoryId', util_1.isString, true);
class PasswordSearchCondition {
    static isPasswordSearchCondition(json) {
        return converter.canBe(json);
    }
}
exports.PasswordSearchCondition = PasswordSearchCondition;
//# sourceMappingURL=passwordSearchCondition.js.map
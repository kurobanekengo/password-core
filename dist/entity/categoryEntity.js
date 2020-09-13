"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const defaultJsonTypeConverter_1 = require("source/converter/jsonTypeConverter/defaultJsonTypeConverter");
const converter = defaultJsonTypeConverter_1.DefaultJsonTypeConverter
    .getInstance()
    .has('id', util_1.isString)
    .has('name', util_1.isString)
    .has('description', util_1.isString);
exports.isCategory = (json) => {
    return converter.canBe(json);
};
//# sourceMappingURL=categoryEntity.js.map
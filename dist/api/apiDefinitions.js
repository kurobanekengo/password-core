"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiDescriptor_1 = require("./apiDescriptor");
exports.ApiDeclarations = {
    getPasswords: apiDescriptor_1.declareApi(apiDescriptor_1.apiMethod.GET, "passwords"),
    getCategories: apiDescriptor_1.declareApi(apiDescriptor_1.apiMethod.GET, "categories"),
    getResources: apiDescriptor_1.declareApi(apiDescriptor_1.apiMethod.GET, "resources")
};
//# sourceMappingURL=apiDefinitions.js.map
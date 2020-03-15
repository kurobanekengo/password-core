"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiMethod;
(function (ApiMethod) {
    ApiMethod[ApiMethod["POST"] = 0] = "POST";
    ApiMethod[ApiMethod["GET"] = 1] = "GET";
    ApiMethod[ApiMethod["DELETE"] = 2] = "DELETE";
    ApiMethod[ApiMethod["PUT"] = 3] = "PUT";
})(ApiMethod = exports.ApiMethod || (exports.ApiMethod = {}));
class ApiDeclaration {
    constructor(resourceName, method) {
        this.resourceName = resourceName;
        this.method = method;
        this.apiMap = new Map();
    }
    defineApi(version, apiBody) {
        this.apiMap.set(version, apiBody);
    }
}
exports.ApiDeclaration = ApiDeclaration;
exports.declareApi = (method, resourceName) => {
    return new ApiDeclaration(resourceName, method);
};
//# sourceMappingURL=apiDescriptor.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiInterface {
    constructor(resourceName, method) {
        this.implementApi = (apiCall) => {
            this.apiCall = apiCall;
        };
        this.callApi = (req) => {
            return this.apiCall(req);
        };
        this.resourceName = resourceName;
        this.method = method;
    }
}
exports.ApiInterface = ApiInterface;
exports.defineApi = (method, path) => {
    return new ApiInterface(path, method);
};
//# sourceMappingURL=interfaceBuilder.js.map
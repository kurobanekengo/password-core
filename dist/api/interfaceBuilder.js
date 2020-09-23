"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiInterface {
    constructor(version, resourceName, method) {
        this.implementApi = (apiCall) => {
            this.apiCall = apiCall;
        };
        this.callApi = (req) => {
            return this.apiCall(req);
        };
        this.version = version;
        this.resourceName = resourceName;
        this.method = method;
    }
    get path() {
        return `${this.version}/${this.resourceName}`;
    }
}
exports.ApiInterface = ApiInterface;
exports.defineApi = (version, method, path) => {
    return new ApiInterface(version, path, method);
};
//# sourceMappingURL=interfaceBuilder.js.map
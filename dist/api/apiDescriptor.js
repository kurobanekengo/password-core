"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const POST = "POST";
const GET = "GET";
const DELETE = "DELETE";
const PUT = "PUT";
exports.apiMethod = {
    POST, GET, DELETE, PUT
};
class ApiDeclaration {
    constructor(resourceName, method) {
        this.defineApi = (version, apiBody) => {
            this.apiMap.set(version, apiBody);
        };
        this.getApi = (version) => {
            const apiPath = `v${version}/${this.resourceName}`;
            const apiBody = this.apiMap.get(version);
            if (apiBody == null) {
                throw new Error(`[error] ${this.method}: ${apiPath} is not implemented`);
            }
            return {
                apiPath, apiBody
            };
        };
        this.resourceName = resourceName;
        this.method = method;
        this.apiMap = new Map();
    }
}
exports.ApiDeclaration = ApiDeclaration;
exports.declareApi = (method, resourceName) => {
    return new ApiDeclaration(resourceName, method);
};
//# sourceMappingURL=apiDescriptor.js.map
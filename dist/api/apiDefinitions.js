"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const apiDescriptor_1 = require("./apiDescriptor");
exports.ApiDeclarations = {
    getPasswords: apiDescriptor_1.declareApi(apiDescriptor_1.ApiMethod.GET, "passwords")
};
const createApiClient = (desc) => {
    return (req, ver) => {
        const apiPath = `http://${desc.resourceName}`;
        return axios_1.default.get("")
            .then((res) => {
            return res;
        });
    };
};
const foo = createApiClient(exports.ApiDeclarations.getPasswords);
foo("", 1);
//# sourceMappingURL=apiDefinitions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const interfaceBuilder_1 = require("./interfaceBuilder");
const PASSWORD = "password";
function def(method, resourceName) {
    return interfaceBuilder_1.defineApi(method, resourceName);
}
exports.Api = {
    "v1": {
        getPasswords: def(types_1.GET, PASSWORD),
    }
};
//# sourceMappingURL=api.js.map
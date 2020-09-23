"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const interfaceBuilder_1 = require("./interfaceBuilder");
const PASSWORD = "password";
const createV1 = () => {
    const v = "v1";
    function def(method, resourceName) {
        return interfaceBuilder_1.defineApi(v, method, resourceName);
    }
    return {
        [v]: {
            getPasswords: def(types_1.GET, PASSWORD)
        }
    };
};
const v1 = createV1();
exports.Api = Object.assign({}, v1);
//# sourceMappingURL=api.js.map
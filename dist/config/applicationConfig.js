"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev_cfg_1 = require("@config/env/dev.cfg");
const getConfig = () => {
    console.log('NODE_ENV');
    console.log(process.env.NODE_ENV);
    return dev_cfg_1.DevConfig;
};
//# sourceMappingURL=applicationConfig.js.map
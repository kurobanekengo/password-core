import {ApplicationConfig} from "@config/applicationConfig";

const devConfig: ApplicationConfig = {
  api: {
    host: "127.0.0.1",
    port: 8000,
    prefixPath: "api"
  },
  storage: {
    path: "/Users/developer/Data/password",
    fileName: "password.md",
  }
};

export const DevConfig = Object.freeze(devConfig);
import {ApplicationConfig} from "@config/applicationConfig";

const devConfig: ApplicationConfig = {
  api: {
    host: "192.168.33.12",
    port: 3000,
    prefixPath: "api"
  },
  storage: {
    path: "/home/vagrant/shared/data"
  }
};

export const DevConfig = Object.freeze(devConfig);
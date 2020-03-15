import {DevConfig} from "@config/env/dev.cfg";

export interface ApplicationConfig {
  api: ApiConfig;
}

export interface ApiConfig {
  host: string;
  port: number;
  prefixPath: string;
}

export const getConfig = (): ApplicationConfig => {
  console.log('NODE_ENV');
  console.log(process.env.NODE_ENV);
  return DevConfig;
};
import {DevConfig} from "@config/env/dev.cfg";

export interface ApplicationConfig {
  api: ApiConfig;
  storage: {
    path: string;
    fileName: string;
  }
}

export interface ApiConfig {
  host: string;
  port: number;
  prefixPath: string;
}

// TODO nodeの起動パラメータ等から実行環境を判定し対応するコンフィグ情報を返す
export const getConfig = (): ApplicationConfig => {
  return DevConfig;
};
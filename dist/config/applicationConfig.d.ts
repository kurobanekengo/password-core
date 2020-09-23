export interface ApplicationConfig {
    api: ApiConfig;
    storage: {
        path: string;
    };
}
export interface ApiConfig {
    host: string;
    port: number;
    prefixPath: string;
}
export declare const getConfig: () => ApplicationConfig;

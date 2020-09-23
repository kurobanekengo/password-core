import { JsonTypeConverter } from "./jsonTypeConverter";
/**
 * JsonTypeConverterのデフォルト実装
 */
export declare class DefaultJsonTypeConverter<T> implements JsonTypeConverter<T> {
    private validatorMapping;
    static getInstance<T>(): DefaultJsonTypeConverter<T>;
    has(propName: keyof T, validate: (value: unknown) => boolean, allowEmpty?: boolean): this;
    canBe(obj: any): obj is T;
}

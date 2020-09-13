import { JsonTypeConverter } from "./jsonTypeConverter";

interface ValidatorMapping {
  [propName: string]: {
    validate: (value: unknown) => boolean;
    allowEmpty: boolean;
  }
}

/**
 * JsonTypeConverterのデフォルト実装
 */
export class DefaultJsonTypeConverter<T> implements JsonTypeConverter<T>{

  private validatorMapping: ValidatorMapping = {};

  static getInstance<T>(): DefaultJsonTypeConverter<T> {
    return new DefaultJsonTypeConverter<T>();
  }

  has(
    propName: keyof T,
    validate: (value: unknown) => boolean,
    allowEmpty: boolean = false) {
      this.validatorMapping[`${propName}`] = {
        validate: validate,
        allowEmpty: allowEmpty
      }
      return this;
  }

  canBe(obj: unknown): obj is T {
    // 登録してない名称が来た場合キャスト不可とする
    // 対象外のものを含んでいても通して良いという考え方もあるが一旦この仕様で進めて様子を見る。
    const objKeys = Object.keys(obj);
    for (const objKey of objKeys) {
      if (!(objKey in this.validatorMapping)) {
        return false;
      }
    }
    const keys = Object.keys(this.validatorMapping);
    for (const key of keys) {
      const validatorConfig = this.validatorMapping[key];
      if (!validatorConfig) {
        return false;
      }
      // オブジェクトから該当の値を取り出す
      // 有効な値を許可している場合のみ処理を続ける
      const value = obj[key];
      if (value == null) {
        if (validatorConfig.allowEmpty) {
          continue;
        }
        return false;
      }
      if (!validatorConfig.validate(value)) {
        return false;
      }
    }
    return true;
  }
}
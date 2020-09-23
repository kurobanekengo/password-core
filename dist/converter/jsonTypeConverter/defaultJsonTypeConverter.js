"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * JsonTypeConverterのデフォルト実装
 */
class DefaultJsonTypeConverter {
    constructor() {
        this.validatorMapping = {};
    }
    static getInstance() {
        return new DefaultJsonTypeConverter();
    }
    has(propName, validate, allowEmpty = false) {
        this.validatorMapping[`${propName}`] = {
            validate: validate,
            allowEmpty: allowEmpty
        };
        return this;
    }
    canBe(obj) {
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
exports.DefaultJsonTypeConverter = DefaultJsonTypeConverter;
//# sourceMappingURL=defaultJsonTypeConverter.js.map
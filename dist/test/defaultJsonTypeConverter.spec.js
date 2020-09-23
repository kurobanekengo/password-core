"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const categoryEntity_1 = require("../entity/categoryEntity");
describe('JSON型変換(正常系)', () => {
    it("{id: '', name: '', description: ''}", () => {
        chai_1.expect(categoryEntity_1.CategoryEntity.isCategory({
            id: '',
            name: '',
            description: ''
        })).to.equal(true);
    });
});
describe('JSON型変換(異常系)', () => {
    it("項目不足: {id: '', name: ''}", () => {
        chai_1.expect(categoryEntity_1.CategoryEntity.isCategory({
            id: '',
            name: ''
        })).to.equal(false);
    });
    it("項目過多: {id: '', name: '', description: '', xxx: ''}", () => {
        chai_1.expect(categoryEntity_1.CategoryEntity.isCategory({
            id: '',
            name: '',
            description: '',
            xxx: ''
        })).to.equal(false);
    });
    it("empty: {id: '', name: '', description: undefined}", () => {
        chai_1.expect(categoryEntity_1.CategoryEntity.isCategory({
            id: '',
            name: '',
            description: undefined
        })).to.equal(false);
    });
    it("型エラー: {id: '', name: '', description: 5}", () => {
        chai_1.expect(categoryEntity_1.CategoryEntity.isCategory({
            id: '',
            name: '',
            description: 5
        })).to.equal(false);
    });
});
//# sourceMappingURL=defaultJsonTypeConverter.spec.js.map
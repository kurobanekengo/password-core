import { expect } from 'chai';
import { isCategory } from '@entity/categoryEntity';

describe('JSON型変換(正常系)', () => {
  it("{id: '', name: '', description: ''}", () => {
    expect(isCategory({
      id: '',
      name: '',
      description: ''
    })).to.equal(true)
  });
});

describe('JSON型変換(異常系)', () => {

  it("項目不足: {id: '', name: ''}", () => {
    expect(isCategory({
      id: '',
      name: ''
    })).to.equal(false)
  });

  it("項目過多: {id: '', name: '', description: '', xxx: ''}", () => {
    expect(isCategory({
      id: '',
      name: '',
      description: '',
      xxx: ''
    })).to.equal(false)
  });

  it("empty: {id: '', name: '', description: undefined}", () => {
    expect(isCategory({
      id: '',
      name: '',
      description: undefined
    })).to.equal(false)
  });

  it("型エラー: {id: '', name: '', description: 5}", () => {
    expect(isCategory({
      id: '',
      name: '',
      description: 5
    })).to.equal(false)
  });
});
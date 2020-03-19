export class Void {
  private constructor() {}
  private static _instance = new Void();
  static get instance() {
    return this._instance;
  }
}
export const VOID = Void.instance;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Void {
    constructor() { }
    static get instance() {
        return this._instance;
    }
}
exports.Void = Void;
Void._instance = new Void();
exports.VOID = Void.instance;
//# sourceMappingURL=void.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Id {
}
exports.Id = Id;
class Void {
    constructor() { }
    static get instance() {
        return this._instance;
    }
}
exports.Void = Void;
Void._instance = new Void();
exports.VOID = Void.instance;
//# sourceMappingURL=common.js.map
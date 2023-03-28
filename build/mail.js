"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get direccion() {
        return this._direccion;
    }
    get tipo() {
        return this._tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
}
exports.Mail = Mail;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    get tipo() {
        return this._tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
}
exports.Telefono = Telefono;

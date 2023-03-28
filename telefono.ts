export class Telefono {
    private _tipo: string;
    private _numero: number;

    constructor(tipo: string,numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    get numero() {
        return this._numero;
    }

    get tipo() {
        return this._tipo;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
}
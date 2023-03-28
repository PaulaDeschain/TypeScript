export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number | boolean;
    private _letra: string | boolean;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: number | boolean, letra: string | boolean, codigoPostal: number, poblacion: string, provincia: string) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  get calle() {
    return this._calle;
  }

  get numero() {
    return this._numero;
  }

  get piso() {
    return this._piso;
  }

  get letra() {
    return this._letra;
  }

  get codigoPostal() {
    return this._codigoPostal;
  }

  get poblacion() {
    return this._poblacion;
  }

  get provincia() {
    return this._provincia;
  }

  set calle(calle: string) {
    this._calle = calle;
  }

  set numero(numero: number) {
    this._numero = numero;
  }

  set piso(piso: number | boolean) {
    this._piso = piso;
  }

  set letra(letra: string | boolean) {
    this._letra = letra;
  }

  set codigoPostal(codigoPostal: number) {
    this._codigoPostal = codigoPostal;
  }

  set poblacion(poblacion: string) {
    this._poblacion = poblacion;
  }

  set provincia(provincia: string) {
    this._provincia = provincia;
  }
}
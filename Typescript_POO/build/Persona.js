"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Hombre"] = 0] = "Hombre";
    Sexo[Sexo["Mujer"] = 1] = "Mujer";
    Sexo[Sexo["Otro"] = 2] = "Otro";
})(Sexo = exports.Sexo || (exports.Sexo = {}));
;
class Persona {
    constructor(nombre = '', edad = 0, DNI, sexo = Sexo.Hombre, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
exports.Persona = Persona;

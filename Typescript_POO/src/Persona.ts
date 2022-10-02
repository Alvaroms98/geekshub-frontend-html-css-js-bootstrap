export enum Sexo {
    Hombre,
    Mujer,
    Otro
};

export class Persona {
    nombre: string;
    edad: number;
    DNI: string;
    sexo: Sexo;
    peso: number;
    altura: number;

    constructor(nombre: string='', edad: number=0, DNI: string, sexo: Sexo=Sexo.Hombre, peso: number=0, altura: number=0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
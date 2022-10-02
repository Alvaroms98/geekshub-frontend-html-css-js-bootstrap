"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Password_1 = require("./Password");
function retoPersona() {
    console.log("\nEjecutando reto 1: clase Persona ...\n");
    const persona1 = new Persona_1.Persona('Alvaro', 24, '012345678P', Persona_1.Sexo.Hombre, 82, 180);
    console.log(`Nombre de la persona creada: ${persona1.nombre}`);
    console.log("\n... Fin reto 1: clase Persona\n");
}
function retoPassword() {
    console.log("\nEjecutando reto 2: clase Password ...\n");
    const password = new Password_1.Password();
    console.log(`Generated Password is: ${password.password}`);
    console.log("\n... Fin reto 2: clase Password\n");
}
function main() {
    retoPersona();
    retoPassword();
}
main();

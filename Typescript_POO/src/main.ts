import { Persona, Sexo } from "./Persona";
import { Password } from "./Password";

function retoPersona(): void {
    console.log("\nEjecutando reto 1: clase Persona ...\n");
    const persona1: Persona = new Persona('Alvaro', 24, '012345678P', Sexo.Hombre, 82, 180);
    console.log(`Nombre de la persona creada: ${persona1.nombre}`);
    console.log("\n... Fin reto 1: clase Persona\n");
}

function retoPassword(): void {
    console.log("\nEjecutando reto 2: clase Password ...\n");
    const password = new Password();
    console.log(`Generated Password is: ${password.password}`);
    console.log("\n... Fin reto 2: clase Password\n");
}

function main(): void {
    retoPersona();
    retoPassword();
}

main();
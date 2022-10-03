import { Persona, Sexo } from "./Persona";
import { Password } from "./Password";
import { Lavadora, Television, Electrodomestico } from "./Electrodomesticos";

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

function getRandomNumber(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low) + low);
}

function electrodomesticoFactory(): Electrodomestico {
    enum Election {
        Lavadora,
        Television
    };

    const colores: Array<string> = ['Blanco', 'Negro', 'Rojo', 'Azul', 'Gris'];
    const consumos: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F'];

    const color: string = colores[getRandomNumber(0, colores.length - 1)];
    const consumo: string = consumos[getRandomNumber(0, consumos.length - 1)];
    const peso: number = getRandomNumber(1, 100);
    
    const election: number = getRandomNumber(0, 1.99);
    if (election === Election.Lavadora) {
        const carga: number = getRandomNumber(10, 80);
        return new Lavadora(color, consumo, peso, carga);
    }
    const resolucion: number = getRandomNumber(20, 60);
    const cuatroK: boolean = getRandomNumber(0, 1.99) ? true : false;
    return new Television(color, consumo, peso, resolucion, cuatroK);
}

function getElectrodomesticoInfo(electrodomestico: Electrodomestico): void {
    const type: string = electrodomestico.constructor.name;
    const color: string = electrodomestico.Color;
    const consumo: string = electrodomestico.Consumo;
    const peso: number = electrodomestico.Peso;
    const precio: number = electrodomestico.Precio;

    console.log(`Type: ${type}`);
    console.log(`Color: ${color}`);
    console.log(`Consumo: ${consumo}`);
    console.log(`Peso: ${peso} kg`);
    
    if (electrodomestico instanceof Lavadora) {
        const carga: number = electrodomestico.Carga;
        console.log(`Carga: ${carga} kg`);
    } else if (electrodomestico instanceof Television) {
        const resolucion: number = electrodomestico.Resolucion;
        const cuatroK: boolean = electrodomestico.CuatroK;
        console.log(`Resolución: ${resolucion} pulgadas`);
        console.log(`4K: ${cuatroK ? 'Sí' : 'No'}`);
    }
    console.log(`Precio: ${precio} €`);
}

function retoElectrodomesticos(): void {
    console.log("\nEjecutando reto 3: Electrodomesticos ...\n");
    let electrodomesticos: Array<Electrodomestico> = [];
    
    for (let i = 0; i < 10; i++) {
        console.log(`\n******* Electrodoméstico número ${i+1} *********`);
        electrodomesticos.push(electrodomesticoFactory());
        getElectrodomesticoInfo(electrodomesticos[i]);
        console.log('************************************************');
    }
    console.log("\n... Fin reto 3: Electrodomesticos\n");
}

function main(): void {
    retoPersona();
    retoPassword();
    retoElectrodomesticos();
}

main();
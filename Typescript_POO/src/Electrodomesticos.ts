export enum Colores {
    Blanco = 'Blanco',
    Negro = 'Negro',
    Rojo = 'Rojo',
    Azul = 'Azul',
    Gris = 'Gris'
};

export enum Consumo {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F'
};

export abstract class Electrodomestico {
    private color: string;
    private consumo: string;
    private peso: number;

    static PRECIO_BASE: number = 100;
    static CONSUMO_DEFAULT: string = Consumo.F;
    static COLOR_DEFAULT: string = Colores.Blanco;
    static PESO_DEFAULT: number = 5;

    constructor(
        color: string=Electrodomestico.COLOR_DEFAULT,
        consumo: string=Electrodomestico.CONSUMO_DEFAULT,
        peso: number=Electrodomestico.PESO_DEFAULT
        ) {
        this.color = this.comprobarColor(color);
        this.consumo = this.comprobarConsumoEnergetico(consumo);
        this.peso = peso;
    }

    protected precioFinal(): number {
        let precio: number = Electrodomestico.PRECIO_BASE;

        const consumosDict: Map<string, number> = new Map<string, number>([
            ['A', 100],
            ['B', 80],
            ['C', 60],
            ['D', 50],
            ['E', 30],
            ['F', 10]
        ]);
        precio += consumosDict.get(this.consumo)!;

        if (this.peso < 20) {
            precio += 10;
        } else if (this.peso >= 20 && this.peso < 50) {
            precio += 50;
        } else if (this.peso >= 50 && this.peso < 80) {
            precio += 80;
        } else if (this.peso >= 80) {
            precio += 100;
        }

        return precio;
    }


    private comprobarConsumoEnergetico(letra: string): string {
        let result: string = Electrodomestico.CONSUMO_DEFAULT;
        if (letra in Consumo) {
            result = letra;
        }
        return result;
    }

    private comprobarColor(color: string): string {
        let result: string = Electrodomestico.COLOR_DEFAULT;
        if (color in Colores) {
            result = color;
        }
        return result;
    }

    get Precio(): number {
        return this.precioFinal();
    }

    get Color(): string {
        return this.color;
    }

    get Consumo(): string {
        return this.consumo;
    }

    get Peso(): number {
        return this.peso;
    }
}

export class Lavadora extends Electrodomestico {
    private carga: number;

    static CARGA_DEFAULT: number = 5;

    constructor(
        color: string=Electrodomestico.COLOR_DEFAULT,
        consumo: string=Electrodomestico.CONSUMO_DEFAULT,
        peso: number=Electrodomestico.PESO_DEFAULT,
        carga: number=Lavadora.CARGA_DEFAULT
    ) {
        super(color, consumo, peso);
        this.carga = carga;
    }

    protected override precioFinal(): number {
        let precio: number = super.precioFinal();
        if (this.carga > 30) {
            precio += 50;
        }
        return precio;
    }

    get Carga(): number {
        return this.carga;
    }
}

export class Television extends Electrodomestico {
    private resolucion: number;
    private cuatroK: boolean;

    static RESOLUCION_DEFAULT: number = 20;
    static CUATROK_DEFAULT: boolean = false;

    constructor(
        color: string=Electrodomestico.COLOR_DEFAULT,
        consumo: string=Electrodomestico.CONSUMO_DEFAULT,
        peso: number=Electrodomestico.PESO_DEFAULT,
        resolucion: number=Television.RESOLUCION_DEFAULT,
        cuatroK: boolean=Television.CUATROK_DEFAULT
    ) {
        super(color, consumo, peso);
        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
    }

    protected override precioFinal(): number {
        let precio: number = super.precioFinal();
        if (this.resolucion > 40) {
            precio += precio * 0.3;
        }
        if (this.cuatroK) {
            precio += 50;
        }
        return precio;
    }

    get CuatroK(): boolean {
        return this.cuatroK;
    }

    get Resolucion(): number {
        return this.resolucion;
    }
}
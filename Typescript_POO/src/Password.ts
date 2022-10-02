export class Password {
    private pass: string;

    constructor(length: number=8) {
        this.pass = this.generate(length);
    }

    private generate(length: number): string {
        let password: string = '';
        for (let i = 0; i < length; i++) {
            password += this.getRandomChar();
        }
        return password;
    }

    private getRandomChar(): string {
        const minASCII: number = 32;
        const maxASCII: number = 122;
        let number: number = Math.floor(Math.random() * (maxASCII - minASCII) + minASCII);
        return String.fromCharCode(number);
    }

    get password(): string {
        return this.pass;
    }
}
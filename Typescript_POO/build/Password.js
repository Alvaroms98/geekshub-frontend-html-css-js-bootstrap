"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(length = 8) {
        this.pass = this.generate(length);
    }
    generate(length) {
        let password = '';
        for (let i = 0; i < length; i++) {
            password += this.getRandomChar();
        }
        return password;
    }
    getRandomChar() {
        const minASCII = 32;
        const maxASCII = 122;
        let number = Math.floor(Math.random() * (maxASCII - minASCII) + minASCII);
        return String.fromCharCode(number);
    }
    get password() {
        return this.pass;
    }
}
exports.Password = Password;

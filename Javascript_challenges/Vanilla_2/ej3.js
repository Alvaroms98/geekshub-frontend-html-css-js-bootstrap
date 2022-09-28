const readline = require("readline");
const { isPrimitive } = require("util");

const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userRequest = (question) => {
    return new Promise((resolve, reject) => {
        try {
            inputInterface.resume();
            inputInterface.question(question + ": ", (answer) => {
            inputInterface.pause();
            resolve(answer);
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};

const isPrime = (number) => {
    let multiples = [number];
    for (let i = number-1; i > 0; i--) {
        if (number % i === 0) {
            multiples.push(i);
        }
    }
    if (multiples.length === 2) {
        return true;
    } else {
        return false;
    }
}

const main = async () => {
    const number = parseInt(await userRequest("Choose number"));

    if (isPrime(number)) {
        console.log(`${number} is prime!`);
    } else {
        console.log(`${number} is not prime`);
    }
}

main();
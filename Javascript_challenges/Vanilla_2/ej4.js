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

const factorial = (number) => {
    if (number === 1) {
        return number;
    }
    return number * factorial(number - 1);
}

const main = async () => {
    const number = parseInt(await userRequest("Choose number"));

    console.log(`Factorial of ${number} = ${factorial(number)}`);
}

main();
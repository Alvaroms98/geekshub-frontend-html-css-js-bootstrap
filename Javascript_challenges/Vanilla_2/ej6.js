const readline = require("readline");

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

const main = async () => {
    let number = parseInt(await userRequest("Choose number"));
    const first = number;
    let numDigits = 0;
    while (number >= 1) {
        number /= 10;
        numDigits++;
    }

    console.log(`"${first}" has ${numDigits} digits.`);
}

main();
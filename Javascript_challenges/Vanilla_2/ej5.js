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

const numToBin = (number) => {
    if (number === 1) {
        return '1'
    }
    let reminder = number % 2
    let newNum = parseInt(number / 2)
    return numToBin(newNum) + reminder.toString()
}

const main = async () => {
    const number = parseInt(await userRequest("Choose number"));

    console.log(`Binary representation of ${number} = b${numToBin(number)}`);
}

main();
const readline = require("readline");

const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputName = () => {
    return new Promise((resolve, reject) => {
        try {
            inputInterface.resume();
            inputInterface.question("Write an integer: ", (answer) => {
            inputInterface.pause();
            resolve(parseInt(answer));
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};

const main = async () => {
    let number = await inputName();
    if (isNaN(number)) {
        console.log(`That's not a number...`);
        return;
    }
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
};

main();
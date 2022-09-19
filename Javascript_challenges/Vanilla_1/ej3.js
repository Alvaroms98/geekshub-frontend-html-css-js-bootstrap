const readline = require("readline");

const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputName = () => {
    return new Promise((resolve, reject) => {
        try {
            inputInterface.resume();
            inputInterface.question("Write your name: ", (answer) => {
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
    const answer = await inputName();
    console.log(`Hello ${answer}!`);
};

main();

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


const randomGenerator = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
}

const main = async () => {
    const low = parseInt(await userRequest("Low interval"));
    const high = parseInt(await userRequest("High interval"));

    console.log(`Random number = ${randomGenerator(low, high)}`);
}

main();
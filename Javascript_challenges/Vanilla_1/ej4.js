const readline = require("readline");

const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputName = () => {
    return new Promise((resolve, reject) => {
        try {
            inputInterface.resume();
            inputInterface.question("Radius of the circle: ", (answer) => {
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
    let radius = await inputName();
    let area = Math.PI * parseFloat(radius);
    console.log(`Area of the circle of radius = ${radius} is equal to ${area}`);
};

main();
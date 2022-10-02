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

const getRandomNumber = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
}

const showArray = (array) => {
    let total = 0;
    array.forEach((element, index) => {
        console.log(`Value of position ${index} = ${element}`);
        total += element;
    });
    console.log(`Total sum of the array = ${total}`);
}

const main = async () => {
    let array = [];
    const tam = parseInt(await userRequest("Size of the array"));
    for (let i = 0; i < tam; i++) {
        array.push(getRandomNumber(0, 9));
    }
    showArray(array);
}

main();
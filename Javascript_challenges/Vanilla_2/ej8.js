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

const setValue = (array, pos, value) => {
    array[pos] = value;
}

const getValue = (array, pos) => {
    console.log(`Value of position ${pos} = ${array[pos]}`);
}

const main = async () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(0);
    }
    for (let i in array) {
        const value = parseFloat(await userRequest(`Value of position ${i}`));
        setValue(array, i, value);
    }
    for (let i in array) {
        getValue(array, i);
    }
}

main();
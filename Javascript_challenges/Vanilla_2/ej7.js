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

const toDolar = (euros) => {
    return euros * 1.28611;
}

const toYens = (euros) => {
    return euros * 129.852;
}

const toPounds = (euros) => {
    return euros * 0.86;
}

const main = async () => {
    const euros = parseFloat(await userRequest("Euros"));
    const divisa = await userRequest("Convert to");
    let converted = 0;
    switch (divisa) {
        case "dolars":
            converted = toDolar(euros);
            break;
        case "yens":
            converted = toYens(euros);
            break;
        case "pounds":
            converted = toPounds(euros);
            break;
    }

    console.log(`${euros} € -> ${converted} ${divisa}`);
}

main();
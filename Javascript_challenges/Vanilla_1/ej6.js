const readline = require("readline");

const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputName = () => {
    return new Promise((resolve, reject) => {
        try {
            inputInterface.resume();
            inputInterface.question("Product price: ", (answer) => {
            inputInterface.pause();
            resolve(parseFloat(answer));
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};

const main = async () => {
    const IVA = 0.21;
    let number = await inputName();
    if (isNaN(number)) {
        console.log(`That's not a price...`);
        return;
    }
    const price = number + number * IVA;
    console.log(`Final price is: ${price} €`);
};

main();
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
    let numSells = await userRequest("Number of sells");
    numSells = parseInt(numSells);
    if (isNaN(numSells)) {
        console.log("Your input is not a valid number");
        return;
    }

    let total = 0;
    for (let i = 0; i < numSells; i++) {
        let sell = await userRequest(`[${i+1}/${numSells}] Sell value`);
        sell = parseFloat(sell);
        if (isNaN(sell)) {
            console.log("Your input is not a valid sell value");
            return
        }
        total += sell;
    }

    console.log(`Total sell profit: ${total} €`)
}

main();
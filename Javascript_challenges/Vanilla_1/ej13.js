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
    const operators = "+-*/^%";
    let n1 = await userRequest("Number 1");
    let operator = await userRequest("Operator (| + | - | * | / | ^ | % |)");

    if (!operators.includes(operator)) {
        console.log("Invalid operator, try again...");
        return;
    }

    let n2 = await userRequest("Number 2");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Invalid numbers to operate");
        return;
    }

    const result = parseFloat(eval(`${n1}` + `${operator}` + `${n2}`));
    console.log(`Result: ${result}`);
}

main();
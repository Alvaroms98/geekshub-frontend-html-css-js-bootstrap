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

const checkPass = (real, attempt) => real === attempt? true : false;

const main = async () => {
    const pass = "geekshub";
    const attempts = 3;

    for (let i = 0; i < attempts; i++) {
        let attempt = await userRequest("Guess the password");
        if (checkPass(pass, attempt)) {
            console.log(`You're right! ${attempt} is the hidden password!`);
            return;
        }
    }

    console.log("You exceded the number of attempts, try again...");
}

main();
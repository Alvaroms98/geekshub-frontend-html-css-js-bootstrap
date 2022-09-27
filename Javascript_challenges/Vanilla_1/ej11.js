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
    let day = await userRequest("What day is today?");
    let isWorkingDay = undefined;
    switch (day) {
        case "monday":
            isWorkingDay = true;
            break;
        case "tuesday":
            isWorkingDay = true;
            break;
        case "wednesday":
            isWorkingDay = true;
            break;
        case "thursday":
            isWorkingDay = true;
            break;
        case "friday":
            isWorkingDay = true;
        break;
        case "saturday":
            isWorkingDay = false;
            break;
        case "sunday":
            isWorkingDay = false;
            break;
        default:
            console.log(`"${day}" is not a week day`);
            return
    }

    if (isWorkingDay) {
        console.log(`"${day}" is a working day!`);
    } else {
        console.log("It's weekend!");
    }
}

main();
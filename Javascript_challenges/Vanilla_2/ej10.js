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

const isPrime = (number) => {
    let multiples = [number];
    for (let i = number-1; i > 0; i--) {
        if (number % i === 0) {
            multiples.push(i);
        }
    }
    if (multiples.length === 2) {
        return true;
    } else {
        return false;
    }
}

const getRandomNumber = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
}

const getRandomPrime = (low, high) => {
    let prime = getRandomNumber(low, high);
    while (!isPrime(prime)) {
        prime = getRandomNumber(low, high);
    }
    return prime;
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
    const low = parseInt(await userRequest("Interval low number"));
    const high = parseInt(await userRequest("Interval high number"));
    for (let i = 0; i < tam; i++) {
        array.push(getRandomPrime(low, high));
    }
    showArray(array);
    console.log(`Greatest prime: ${array.sort().pop()}`);
}

main();
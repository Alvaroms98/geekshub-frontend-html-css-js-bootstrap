
const greaterThan = (a, b) => {
    return a > b;
};

const main = () => {
    const a = 3;
    const b = 4;

    if (greaterThan(a,b)) {
        console.log(`a is greater than b: ${a} > ${b}`);
    } else {
        console.log(`a is not greater than b: ${a} <= ${b}`);
    }
};

main();
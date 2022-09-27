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

class Geometry {
    static Circle = 1;
    static Triangle = 2;
    static Square = 3;
}

const checkInt = (number) => {
    let num = parseInt(number);
    if (isNaN(num)) {
        throw new Error(`${number} is not a valid number`);
    }
    return num;
}

const menu = async () => {
    let option = checkInt(await userRequest(`
Calculate the area of:
1) Circle
2) Triangle
3) Square

Choose an option`));
    
    return option;
}

const checkFloat = (number) => {
    let num = parseFloat(number);
    if (isNaN(num)) {
        throw new Error(`${number} is not a valid number`);
    }
    return num;
}

const areaCircle = async () => {
    let radius = checkFloat(await userRequest("Radius"));
    return (Math.PI * (radius * radius));
}

const areaTriangle = async () => {
    let base = checkFloat(await userRequest("Base"));
    let height = checkFloat(await userRequest("Height"));
    return ((base * height) / 2);
}

const areaSquare = async () => {
    let side = checkFloat(await userRequest("Side"));
    return (side * side);
}

const main = async () => {
    let option = await menu();
    let result = NaN;
    switch (option) {
        case Geometry.Circle:
            result = await areaCircle();
            break;
        case Geometry.Triangle:
            result = await areaTriangle();
            break;
        case Geometry.Square:
            result = await areaSquare();
            break;
        default:
            throw new Error("Invalid option, choose 1, 2 or 3");
    }

    console.log(`Area is: ${result} m2`);
}

main();
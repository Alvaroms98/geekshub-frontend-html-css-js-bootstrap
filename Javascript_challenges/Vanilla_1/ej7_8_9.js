const whileLoop = () => {
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }
};

const forLoop = () => {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
};

const whileLoopSelective = () => {
    let i = 1;
    while (i <= 100) {
        if (i % 2 === 0 && i % 3 === 0){
            console.log(i);
        }
        i++;
    }
}

const main = () => {
    console.log("While Loop");
    whileLoop();
    console.log("For Loop");
    forLoop();

    console.log("While Loop Selective");
    whileLoopSelective();
};

main();
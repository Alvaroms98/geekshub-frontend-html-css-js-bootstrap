RESULT_TRIGGER = false;

function insert(elem) {
    if (RESULT_TRIGGER === true) {
        clean();
        RESULT_TRIGGER = false;
    }
    
    let input = document.getElementById("formula-input");
    let last = input.value.slice(-1);
    let operators = "+-*.";
    if (operators.includes(elem) && operators.includes(last)) {
        return;
    }
    input.value += elem;
}

function clean() {
    let input = document.getElementById("formula-input");
    input.value = "";
}


function resolve () {
    let input = document.getElementById("formula-input");
    let formula = input.value;
    result = Function("return " + formula)();
    input.value = result;
    RESULT_TRIGGER = true;
}
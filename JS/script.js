let display = document.getElementById("display");
let currentImput = "";
let currentOperator = "";

function appendNumber(value){
    currentImput += value
    display.textContent = currentImput
}

function appendOperador(operador){
    if (currentImput === "" && operador !== ".") return
    currentImput += operador
    display.textContent = currentImput;
}

function calculate (){
    try {
        let result = eval(currentImput)
        if(!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        currentImput = result;
        display.textContent = currentImput;
    } catch (error) {
        display.textContent = "Erro"
        currentImput = "";
    }
}

function clearDisplay(){
    currentImput = "";
    display.textContent = currentImput;
}
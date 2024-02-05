function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b == 0) return "Error";
    return a/b;
}

function displayNumber(e){
    let value = e.target.textContent

    
    
    if (value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '='){
        if (displayScreen.textContent === '+' || displayScreen.textContent === '-' || displayScreen.textContent === '*' || displayScreen.textContent === '/' || displayScreen.textContent === '='){
            displayScreen.textContent = "";
        }
        displayScreen.textContent += value;
        value = Number(displayScreen.textContent);
        if (operatorPressedFlag == 0){
            a = value;
        }
        else{
            b = value;
        }
    }
    else if (value == '+' || value == '-' || value == '*' || value == '/'){
        op = value;
        displayScreen.textContent = value;
        operatorPressedFlag = 1;
    }
    else{   // '='
        let ans = operate(a,b,op);
        a = ans;
        b = -1;
        operatorPressedFlag = 0;

        // also update on screen
        displayScreen.textContent = ans;
    }
    
    // console.log(a);
    // console.log(b);
    // console.log(op);
    
    // console.log(ans);
}

function operate(a,b,op){
    if (op == '+'){
        return add(a,b);
    }
    else if (op == '-'){
        return subtract(a,b);
    }
    else if (op == '*'){
        return multiply(a,b);
    }
    else{
        if (b != 0){
            return divide(a,b);
        }
        else{
            a = 0;
            b = 0;
            op = "";
            return "ERROR";
        }
    }
}

function clearScreen(){
    a = -1;
    b = -1;
    op = "";
    ans = 0;
    displayScreen.textContent = "";
}


// all about buttons
var zeroBtn = document.querySelector("#zero");
var oneBtn = document.querySelector("#one");
var twoBtn = document.querySelector("#two");
var threeBtn = document.querySelector("#three");
var fourBtn = document.querySelector("#four");
var fiveBtn = document.querySelector("#five");
var sixBtn = document.querySelector("#six");
var sevenBtn = document.querySelector("#seven");
var eightBtn = document.querySelector("#eight");
var nineBtn = document.querySelector("#nine");

var addBtn = document.querySelector("#add");
var subtractBtn = document.querySelector("#subtract");
var multiplyBtn = document.querySelector("#multiply");
var divideBtn = document.querySelector("#divide");
var equalBtn = document.querySelector("#equal");
var clearBtn = document.querySelector("#clear");

oneBtn.addEventListener("click", displayNumber);
twoBtn.addEventListener("click", displayNumber);
threeBtn.addEventListener("click", displayNumber);
fourBtn.addEventListener("click", displayNumber);
fiveBtn.addEventListener("click", displayNumber);
sixBtn.addEventListener("click", displayNumber);
sevenBtn.addEventListener("click", displayNumber);
eightBtn.addEventListener("click", displayNumber);
nineBtn.addEventListener("click", displayNumber);
zeroBtn.addEventListener("click", displayNumber);

addBtn.addEventListener("click", displayNumber);
subtractBtn.addEventListener("click", displayNumber);
multiplyBtn.addEventListener("click", displayNumber);
divideBtn.addEventListener("click", displayNumber);
equalBtn.addEventListener("click", displayNumber);
clearBtn.addEventListener("click", clearScreen);
// 


var displayScreen = document.querySelector(".display");

let a = -1;
let b = -1;
let op;
let ans;
let operatorPressedFlag = 0;

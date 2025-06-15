const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#division");
const equal = document.querySelector("#equal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let firstNumber = "";
let firstOperator ="";
let secondNumber ="";

//clear button 
clear.addEventListener("click", ()=>{
   screen.textContent = "";
   firstNumber ="";
   secondNumber ="";
   firstOperator="";
   console.log("cleared");
});


function adding(a,b){
    return a+b;
};

function subtracting(a,b){
    return a-b;
};

function roundToDecimal(number, decimalPlaces) {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(number * multiplier) / multiplier;
};
function dividing(a,b){
    return roundToDecimal((a/b), 7);
};

function multipling(a,b){
    return a*b;
};

function operate(op, a, b){
    if(op===add){
        adding(a,b);
    }
    else if(op===subtract){
        subtracting(a,b);
    }
    else if(op===divide){
        dividing(a,b);
    }
    else if(op===multiply){
        multipling(a,b);
    }

};

function populateDisplay(e){
    screen.textContent += e.target.textContent;
    firstNumber +=e.target.textContent;
};

numbers.forEach(button =>{
    button.addEventListener("click", populateDisplay);
});

operators.forEach(button=>(){
   button.addEventListener("click", ) 
});
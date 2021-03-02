let inputString1 = '';
let inputString2 = '';
let display = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let clearBtn = document.getElementById("btnClr");
let equalBtn = document.getElementById('btnEql');
let sumBtn = document.getElementById("btnSum");
let subBtn = document.getElementById("btnSub");
let mulBtn = document.getElementById("btnMul");
let divBtn = document.getElementById("btnDiv");
let btn0Value = btn0.innerText;
let btn1Value = btn1.innerText;
let sumValue = sumBtn.innerText;
let subValue = subBtn.innerText;
let mulValue = mulBtn.innerText;
let divValue = divBtn.innerText;
let displayValue = display.innerText;
let isOperatorClick = false;
let selectedOperator = '';

btn0.addEventListener('click',()=>{
    if(!isOperatorClick){
        inputString1 += btn0Value;
        display.innerText = inputString1;
    }
    if(isOperatorClick){
        inputString2 += btn0Value;
        display.innerText += btn0Value;
    }
})

btn1.addEventListener('click',()=>{
    if(!isOperatorClick){
        inputString1 += btn1Value;
        display.innerText = inputString1;
    }
    if(isOperatorClick){
        inputString2 += btn1Value;
        display.innerText += btn1Value;
    }
})

clearBtn.addEventListener("click" , ()=>{
    display.innerText ='';
    inputString1 = '';
    inputString2 = '';
    isOperatorClick = false;
})

sumBtn.addEventListener('click' , ()=>{
    if(inputString1 != '' && inputString2 == ''){
        isOperatorClick = true;
        display.innerText = inputString1 + ' ' + sumValue + ' ';
        selectedOperator = '+';
    }
    if(inputString1 !='' && inputString2 != ''){
        inputString1 = display.innerText;
        inputString2 = '';
        display.innerText = inputString1 + ' '+ sumValue + ' ';
        isOperatorClick = true;
        selectedOperator = '+';
    }
})

subBtn.addEventListener('click' , ()=>{
    if(inputString1 != '' && inputString2 == ''){
        isOperatorClick = true;
        display.innerText = inputString1 + ' ' + subValue + ' ';
        selectedOperator = '-';
    }
    if(inputString1 !='' && inputString2 != ''){
        inputString1 = display.innerText;
        inputString2 = '';
        display.innerText = inputString1 + ' '+ subValue + ' ';
        isOperatorClick = true;
        selectedOperator = '-';
    }
})

mulBtn.addEventListener('click' , ()=>{
    if(inputString1 != '' && inputString2 == ''){
        isOperatorClick = true;
        display.innerText = inputString1 + ' ' + mulValue + ' ';
        selectedOperator = '*';
    }
    if(inputString1 !='' && inputString2 != ''){
        inputString1 = display.innerText;
        inputString2 = '';
        display.innerText = inputString1 + ' '+ mulValue + ' ';
        isOperatorClick = true;
        selectedOperator = '*';
    }
})

divBtn.addEventListener('click' , ()=>{
    if(inputString1 != '' && inputString2 == ''){
        isOperatorClick = true;
        display.innerText = inputString1 + ' ' + divValue + ' ';
        selectedOperator = '/';
    }
    if(inputString1 !='' && inputString2 != ''){
        inputString1 = display.innerText;
        inputString2 = '';
        display.innerText = inputString1 + ' '+ divValue + ' ';
        isOperatorClick = true;
        selectedOperator = '/';
    }
})

equalBtn.addEventListener('click' , ()=>{
    if(inputString1 != '' && inputString2 != ''){
        
        let firstOperand = parseInt(inputString1 , 2);
        let secondOperand = parseInt(inputString2 , 2);
        let result ;
        if(selectedOperator === '+'){
             result = +firstOperand + +secondOperand;
        }
        else if(selectedOperator === '-'){
             result = +firstOperand - +secondOperand;
        }
        else if(selectedOperator === '*'){
             result = +firstOperand * +secondOperand;
        }
        else if(selectedOperator === '/'){
             result = parseInt((+firstOperand) / (+secondOperand));
        }     
        
        let base2Result  = result.toString(2);
        display.innerText = Number(base2Result);
    }
})
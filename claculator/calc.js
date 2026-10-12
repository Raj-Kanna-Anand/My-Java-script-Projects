let a,b;
let operator=" ";
let display=document.getElementById("display");

function dddd(value){
    if(display.textContent==="0"){
        display.textContent=value;

    }
    else {
        display.textContent+=value;
    }
}
function op(ppp){
    a=Number(display.textContent);
    operator=ppp;
    display.textContent="";
}

function reset(){
    display.textContent="0";
    a=undefined;
    b=undefined;
    operator="";
}
function operator98(){
    b=Number(display.textContent);
console.log(a);
console.log(b);
console.log(operator);
    switch(operator){
    case '+':
        display.textContent=a+b;
        break;
    case '-':
        display.textContent=a-b;
        break;
    case '%':
        display.textContent=a%b;
        break;
    case '*':
        display.textContent=a*b;
        break;
    case '/':
        display.textContent=a/b;
        break;
    default:
        console.log("Enter valid operaotr");
}
}

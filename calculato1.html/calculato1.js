let a,b;
let operator=" ";
let display=document.getElementById("display");
let display1=document.getElementById("display1");
function dddd(value){
    if(display.textContent==="0"){
        display.textContent=value;

    }
    else{
        display.textContent+=value;
    }
}
function reset(){
    display.textContent="0";
    a=undefined;
    b=undefined;
    operator=" ";
}
function op(value){
    a=Number(display.textContent);
    operator=value;
    display.textContent=" ";
    display1.textContent=value;
}
function operator98(){
    // display.textContent=eval(display.textContent);  this single line also we do without all those
    b=Number(display.textContent);
    switch(operator){
        case '+':
            display.textContent=`${a}+${b}`;
            display1.textContent=a+b;
            break;
        case '-':
            display.textContent=`${a}-${b}`;
            display1.textContent=a-b;
            break;
        case '*':
            display.textContent=`${a}*${b}`;
            display1.textContent=a*b;
            break;
        case '/':
            display.textContent=`${a}/${b}`;
            display1.textContent=a/b;
            break;
        case '%':
            display.textContent=`${a}%${b}`;
            display1.textContent=a%b;
            break;
        default:
            display.textContent="Enter correct operator";
            break;
    }
}
//synchronous:line by line one after another 
//asynchronous:without executing before line it goes to next line given below after 3 seconds
//             it prints 1.. but before that 2.. and3.. gets but by using callback we solve 
//             that after 1.. then those executes all these because of setTimeout is asynchronous function
//             we have to do that to synchronus by using callbacks,promises and async/await
let a=document.getElementById("A");
function callbackex1(callback){
    setTimeout(()=>{
    a.textContent="1..";
    callback();},3000);

}

function callbackex2(){
    a.textContent+="2..";
    a.textContent+="3..";
}
callbackex1(callbackex2);
//error handling we can do that using try and catch
try{
let dividend=Number(window.prompt("ENter dividend"));
let divisor=Number(window.prompt("ENter divisor"));
let answer=dividend/divisor;
if(divisor===0){
    throw new Error("cannot divide by zero");
}
if(isNaN(divisor)||isNaN(dividend)){
    throw new Error("enter only numbers");
}
console.log(answer);
}
catch(error){
    console.log(error);
}
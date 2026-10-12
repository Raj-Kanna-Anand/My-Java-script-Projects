function greet(anan){
    console.log(`${anan}`);
}
function call(cAna){
    cAna("good morning");
}
for(let i=0;i<5;i++){
call(greet);
}
function add(a,b){
    return a+b;
}
function subt(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function cc(a,b,callback){
    return callback(a,b);
}
console.log(cc(10,5,mult));
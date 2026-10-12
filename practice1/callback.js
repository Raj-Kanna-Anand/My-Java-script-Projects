//string 
/*let a="Raj anand";
let b=a.slice(0,a.indexOf(" "));
let c=a.slice("-4");
console.log(b);
console.log(c);*/
//callback:a function that is passed as an argument to another function
//         used to handle asynchronous operations:
//         1.Reading file
//         2.Networks request
//         3.Interacting with database
/*let a;
function show(){
    return "Anand";
}
function call(callback){
    a="Raj Kanna";
    document.getElementById("D").textContent=a+callback();
    callback();
}call(show);
//forEach():
let arr98=[1,2,3,4,5];
arr98.forEach(function (num){

   document.getElementById("A").textContent=num;
})
//function cube(element,index,array){
//    array[index] = element**3;
//}*/
/*function display(element){
    console.log(element);
}
let names=[" Apple"," orange"," Mango"];
let fname=[" Anand"," Raju"," Varalaxmi"," Durga"]
function capital(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
function lower(element,index,array){
    array[index]=element.toLowerCase();
}
function add(element,index,array){
    array[index]=element.replace(" ","Ch.");

}
names.forEach(lower);
fname.forEach(add);

fname.forEach(display);
names.forEach(display);*/
//map():
/*let arr=[5,10,15,20];
let doubled=arr.map(function(element,index){
    return element*2+index;
    
});
console.log(doubled);*/
//filter():
//let arr=[10,20,30];
//let newarr=arr.filter(function(element){
//    return element%2==0;
//});
//document.getElementById("C").textContent=arr;
//reduce:
/*let arr=[10,15,20,90,80,34];
let newarr=arr.reduce(sum);
let newarr1=arr.reduce(max);
function sum(accumulator,element){
    return accumulator+element;
}
console.log(newarr);
function max(accumulator,element){
    return Math.max(accumulator,element);
}
console.log(newarr1);*/
// function expressions
let numbers=[1,2,3,4,5,6,7,8,9,10];
let squares=numbers.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);
let even=numbers.filter(function(element){
    return element%2===0;
});
console.log(even);
let odd=numbers.filter(function(element){
    return element%2!==0;
});
console.log(odd);
let addd=numbers.reduce(function(accumulator,element){
    return accumulator+element;
})
console.log(addd);
//arrow functions
let add=numbers.reduce((accumulator,element)=>{
    return accumulator+element;
})
console.log(add);


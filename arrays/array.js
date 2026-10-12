let a="white"
let fruit=["apple","orange","banana",a];
fruit.push("anand"); 
fruit.pop();
fruit.unshift("Annn");
fruit.shift();
/*for(let i=fruit.length-1;i>=0;i--){
console.log(fruit[i]);
}
*/
//fruit.sort();
fruit.sort().reverse();
for (let f of fruit){
    console.log(f);
}
//spread operator : Allows an iterable such as
//                  array or string to be expanded into separate elements
//                  without it we can't perform operations on elements 
let usename="anand raj"
//let numbers=[1,2,3,4,5];
//let maximum=Math.max(...numbers);
//console.log(maximum); 
let numbers=[...usename,...fruit].join("_");
console.log(numbers);
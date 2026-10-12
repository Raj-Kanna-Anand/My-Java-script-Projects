//localStorage.setItem("name","Anand");
//localStorage.removeItem("name");
let a={
    theme:"dark",
    age:20,
    city:"Tokyo"
}
localStorage.setItem("name",JSON.stringify(a));
let b=JSON.parse(localStorage.getItem("name"));
delete b.age;
//localStorage.setItem("name",JSON.stringify(b));
console.log(b.theme);    
console.log(b.city);    
//console.log(b.age);    
//localStorage.clear();
let c=["UMI","MAHIRU","ALYA","WAGURI","SERINA"];
localStorage.setItem("FAVOURITENAMES",JSON.stringify(c));
let d=JSON.parse(localStorage.getItem("FAVOURITENAMES"));
console.log(d[0]);
console.log(d[d.length-1]);
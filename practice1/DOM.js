//Element selectors:it selects elements from html to access and modify and perform 
//                  operations on it
//                  1)document.getElementById(); : selects based on id
//                  2)document.getElementsByClassName(); : selects based on classname
//                  3)document.getElementsByTagName(); : selects based on tags
//                  4)document.querySelector(); : selects first element only using classname or tagname
//                  5)document.querySelectorAll(); : selects all elements and returns as nodelist
/*const A=document.getElementById("A");
A.style.textAlign="center";

// class access as HTML collection so we do opertions as arrays
const B=document.getElementsByClassName("B");
for (let b of B){
    b.style.backgroundColor="Lightgreen";
}
// tag name also gives as HTML collection so we access as arrays
const c=document.getElementsByTagName("p");
c[0].style.textAlign="right";
Array.from(c).forEach(C =>{
    C.style.color="red";
})
//only first element of that class
//const d=document.querySelector(".a1");// using classname
const d=document.querySelector("li");//using tagname
d.style.color="red";
//all elements as nodelist
const e=document.querySelectorAll(".a1");
for(let E of e){
E.style.textAlign="center";
}
Array.from(e).forEach(e1 =>{
    e1.style.backgroundColor="blue";
})
console.log(e);
*/







//DOM navigation:a process of navigating through the structure of HTML using JS
//     1).firstElementChild
//     2).lastElementChild
//     3).nextElementSibling
//     4).previousElementSibling
//     5).parentElement
//     6).children
const a=document.getElementById("a1");
const firstchild=a.firstElementChild;
firstchild.style.backgroundColor="yellow";
const lastchild=a.lastElementChild;
lastchild.style.backgroundColor="red";
const b=document.querySelectorAll("ul");
b.forEach(element =>{
    const aa=element.firstElementChild;
    const aaa=element.lastElementChild;
    aa.style.textAlign="center";
    aaa.style.textAlign="right"; 
})
const aaa1=document.getElementById("aaa1");
const nextsibling=aaa1.nextElementSibling;
nextsibling.style.border="2px solid";
const aaa2=document.getElementById("aaa1");
const previoussibling=aaa1.previousElementSibling;
previoussibling.style.border="2px solid";
previoussibling.style.borderColor="skyblue";
const aaa3=document.getElementById("aaa1");
const parent_element=aaa3.parentElement;
parent_element.style.margin="0px 100px";
parent_element.style.border="3px solid";
const a1=document.getElementById("a1");
const children=a1.children;
Array.from(children).forEach(aaaa=>{
aaaa.style.margin="2px 100px";
aaaa.style.padding="2px";
aaaa.style.border="solid";
})

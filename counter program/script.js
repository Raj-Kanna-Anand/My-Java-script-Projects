//operators
//var a=10;
//a++; -increment
//a--; -decrement
//a+=10;
//console.log(a);
const E=document.getElementById("A");
const F=document.getElementById("B");
const G=document.getElementById("C");
const H=document.getElementById("J");
let I=0;
E.onclick=function(){
    I++;
    H.textContent=I;
}
F.onclick=function(){
    I=0;
    H.textContent=I;
}
G.onclick=function(){
    I--;
    H.textContent=I;
}
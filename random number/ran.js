
const D=document.getElementById("B");
const E=document.getElementById("A");

D.onclick=function(){
    let C=Math.floor(Math.random()*1000)+1;
    
    A.textContent=C;
}
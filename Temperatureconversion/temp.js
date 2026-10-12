const a=document.getElementById("A");
const b=document.getElementById("B");
const c=document.getElementById("C");
const d=document.getElementById("D");
const e=document.getElementById("E")
let temp;

c.onclick=function(){
    if(a.checked){
        temp=Number(e.value);
        temp=temp* 9 / 5 + 32;
        d.textContent=temp + "\u00B0F";
    }
    else if(b.checked){
        temp=Number(e.value);
        temp=(temp-32) *( 5 / 9 );
        d.textContent=temp + "\u00B0C";
    }
    else{
        d.textContent="select a conversion"
    }
}
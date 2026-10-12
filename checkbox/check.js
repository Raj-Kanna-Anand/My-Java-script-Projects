const a=document.getElementById("A");
const b=document.getElementById("B");
const d=document.getElementById("C");
const e=document.getElementById("D");
const f=document.getElementById("E");
const g=document.getElementById("G");
d.onclick= function(){
    if(a.checked){

        e.textContent="You are subscribed";
        
    }
    else{
        e.textContent="You are not subscribed";
    }
    if(b.checked){
        let c=prompt("Enter your name");
        g.textContent=c;
        f.innerHTML=`your name is ${c} `;
        
    }
    else{
        f.textContent="Enter Your name";
    }
}





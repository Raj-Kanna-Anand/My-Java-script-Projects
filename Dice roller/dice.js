const b=document.getElementById("B");
const d=document.getElementById("D");
const c=document.getElementById("C");
const e=document.getElementById("E");
const g=document.getElementById("F"); 
let max=6;
let min=1;
let count=0;
let images=[];
for(let i=0;i<6;i++){
    images.push(`<img src="${i+1}.png ">`);
}
d.onclick=function(){
    count=Number(c.value);
    if(count<=10){
        roll(count);
    }
    else{
        e.textContent="enter Correct Number";
    }
}
function roll(count){
    e.textContent="";
    g.innerHTML="";
    for(let i=1;i<=count;i++)
    {
        let f=Math.floor(Math.random()*(max-min+1))+min;
        e.textContent +=f + " ";
        g.innerHTML +=` ${images[f-1]}`;
    }
}
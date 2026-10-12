const a=document.getElementById("A");
let max=10;
let min=1;
let c=Math.floor(Math.random()*(max-min+1))+min;
const z=document.getElementById("C");
const b=document.getElementById("B");
let m=document.getElementById("Y");

let count=0;
let gamewon=false;
a.onclick=function(){
    let g=Number(prompt(`Enter the Number between ${min} and ${max}`));


if(g===c){
    b.textContent="correct you won the game";
    count++;
    gamewon=true;
}
else if(g>c){
    b.textContent="less than that";
    count++;

}
else{
    b.textContent="greate than that";
    count++;
}
m.textContent=count;
}
console.log(c);

z.onclick=function(){
    if(gamewon){
    c=Math.floor(Math.random()*(max-min+1))+min;
    b.textContent="new game starts";
    gamewon=false;
    count=0;
    m.textContent=count;
    console.log(c);

    }
    else{
        b.textContent="guess correct number first";
    }
}












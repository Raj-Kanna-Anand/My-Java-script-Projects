const images=[{
    src:"images.png"
},{src:"images1.png"}
,{src:"images2.png"}
,{src:"images3.png"},{src:"images4.png"},{src:"images5.png"},{src:"images6.png"},{src:"images7.png"}];
const A=document.getElementById("A");
const A1=document.getElementById("A1");
const A2=document.getElementById("A2");
let currentimage=0;
A1.src=images[currentimage].src;
A.addEventListener("click",()=>{
    if(currentimage>0){
        currentimage--;
    }
    else{
        currentimage=0;
    }
    A1.src=images[currentimage].src;
})
A2.addEventListener("click",()=>{
    if(currentimage<images.length-1){
        currentimage++;
    }
    else{
        currentimage=0;
    }
    A1.src=images[currentimage].src;
})
setInterval(()=>{
        if(currentimage<images.length-1){
        currentimage++;
    }
    else{
        currentimage=0;
    }
    A1.src=images[currentimage].src;
},3000);
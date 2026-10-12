const songs=[{
    title:"Needhe Needhe",
    src:"needhe.mp3",
    src1:"images.png"
},
{
    title:"chikiri chikiri",
    src:"Chikiri Chikiri.mp3",
    src1:"images1.png"
},{
    title:"Hellallallo",
    src:"Hellallallo.mp3",
    src1:"images2.png"
},
{
    title:"Irumudi Kattu",
    src:"Irumudi Kattu.mp3",
    src1:"images3.png"
},
{
    title:"Yaalalo Yaalalo",
    src:"Yaalalo Yaalalo.mp3",
    src1:"images4.png"
},{
    title:"Massa Massa",
    src:"Massa Massa.mp3",
    src1:"images5.png"

}];
let currentsong=0;
const a11=document.getElementById("a");
const a1=document.getElementById("a1");
const a2=document.getElementById("a2");
const a3=document.getElementById("a3");
const a4=document.getElementById("a4");
let a=document.getElementById("A1");
let AA=document.getElementById("AA");
a.src=songs[currentsong].src;
a11.textContent=songs[currentsong].title;
AA.src=songs[currentsong].src1;
a1.addEventListener("click",() =>
{
    a.play();
    a11.textContent=songs[currentsong].title;
    AA.src=songs[currentsong].src1;
}
)
a2.addEventListener("click",()=>{
    a.pause();
    a11.textContent=songs[currentsong].title;
    AA.src=songs[currentsong].src1;
})
a3.addEventListener("click",()=>{
    if(currentsong<songs.length-1){
        currentsong++;
    }
    else{
        currentsong=0;
    }
        a.src=songs[currentsong].src;
        a.play();
        a11.textContent=songs[currentsong].title;
        AA.src=songs[currentsong].src1;
})
/*previous 
button*/
a4.addEventListener("click",()=>{
    if(currentsong>0){
        currentsong--;
    }
    else{
        currentsong=0;
    }
        a.src=songs[currentsong].src;
        a.play();
        a11.textContent=songs[currentsong].title;
        AA.src=songs[currentsong].src1;
})
a.addEventListener("ended",()=>{
    if(currentsong<songs.length-1){
        currentsong++;
    }
    else{
        currentsong=0;
    }
        a.src=songs[currentsong].src;
        a.load();
        a.play();
        a11.textContent=songs[currentsong].title;
        AA.src=songs[currentsong].src1;
})
a5.addEventListener("click",()=>{
    currentsong=Math.floor(Math.random()*songs.length);
        a.src=songs[currentsong].src;
        a.play();
        a11.textContent=songs[currentsong].title;
        AA.src=songs[currentsong].src1;
})
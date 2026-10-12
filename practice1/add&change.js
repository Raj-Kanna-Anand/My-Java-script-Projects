//STEP1:creating element


const newe=document.createElement("li");
const newe1=document.createElement("p");

//STEP2:add properties/attributes


newe.textContent="AAAAAA";
newe1.textContent="AAAAAA";
newe.id="a1";
newe.style.backgroundColor="green";
//console.log(newe.style.backgroundColor);


//STEP3:APPEND ELEMENT TO DOM


//document.getElementById("A").prepend(newe);//for inserting before anything by accessing id
//document.getElementById("A").append(newe);//insert last
document.body.prepend(newe1);// same for body append and prepend 
// we can insert before or after any element also by getting their id
document.getElementById("A").insertBefore(newe,AA);
const aa=document.getElementById("A");
aa.style.border="2px solid";
aa.style.margin="20px";
aa.style.padding="20px";



//STEP 4:REMOVE ELEMENT


document.getElementById("A").removeChild(newe);
document.body.removeChild(newe1);


//Event listeners : listen for specific events to create 
//                  interactive web pages events:click,mouseover,mouseout
//          synatx:.addEventListener(event,callback)


const my=document.getElementById("A1");
my.style.backgroundColor="yellow";
my.style.marginRight="420px"
my.style.border="2px solid"
my.style.alignItems="center";
my.style.display="flex";
my.style.justifyContent="center";
my.style.fontSize="20px";
my.style.padding="10px 10px"
my.style.width="200px"
my.style.height="100px"
my.addEventListener("click",value=>{
    my.textContent="i am a good boy";
})
my.addEventListener("mouseover",value=>{
    my.textContent="click yooooo";
})
my.addEventListener("mouseout",value=>{
    my.textContent="HI I'm Anand";
})
const mybutton=document.getElementById("A3");
const myimg=document.getElementById("A2");
mybutton.addEventListener("click",event=>{
    if(myimg.style.visibility==="hidden"){
        myimg.style.visibility="visible";
        mybutton.textContent="HIDE";
    }
    else{
    myimg.style.visibility="hidden";
    mybutton.textContent="SHOW";
}
}
)
mybutton.style.backgroundColor="red";
mybutton.style.border="1px solid";
mybutton.style.padding="10px 10px";
mybutton.style.color="white";

const choices=["rock","paper","scissor"];
let playerdis=document.getElementById("a3");
let computerdis=document.getElementById("a4");
let playerscore=document.getElementById("a6");
let computerscore=document.getElementById("a7");
let resulta=document.getElementById("a5");
 let playerscore1=0;
let computerscore1=0;
function rps(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result=" ";
    if(playerchoice==computerchoice){
        result="IT'S A TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice==="scissor")?"YOU WIN":"YOU LOSE";
                break;
            case "paper":
                result=(computerchoice==="rock")?"YOU WIN":"YOU LOSE";
                break;
            case "scissor":
                result=(computerchoice==="paper")?"YOU WIN":"YOU LOSE";
                break;
        }
    }
    playerdis.textContent=`PLAYER:${playerchoice}`;
    computerdis.textContent=`COMPUTER:${computerchoice}`;
    resulta.textContent=result;
    if(result==="YOU WIN"){
        playerscore1++;
        playerscore.textContent=`playerscore:${playerscore1}`;
    }
    else if(result==="IT'S A TIE"){
        
    }
    else{
        computerscore1++;
        computerscore.textContent=`computerscore:${computerscore1}`;
    }
}
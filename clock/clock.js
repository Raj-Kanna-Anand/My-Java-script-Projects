function updateclock(){
    let date = new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes().toString().padStart(2,0);
    let seconds=date.getSeconds().toString().padStart(2,0);
    let a=hours <= 12 ? "AM":"PM";
    hours=hours % 12 || 12; 
    hours=hours.toString().padStart(2,0);
    let Time=`${hours}:${minutes}:${seconds}${a}`;
    document.getElementById("a").textContent=Time;
}
updateclock();
setInterval(updateclock,1000);
function game(){
    let score=0;
    function increase(points){
        score+=points;
        document.getElementById("A").textContent=points;
    }
    function decrease(points){
        score-=points;
        document.getElementById("A").textContent=points;

    }
    function reset(){
        document.getElementById("A").textContent=score;
    }
    return {
        increase,decrease,reset
    };

}
let game1=game();
game1.increase(3);
game1.increase(3);
game1.decrease(4);
game1.increase(1);
game1.increase(3);
game1.increase(4);
game1.increase(6);
game1.increase(2);
game1.increase(1);
game1.reset();





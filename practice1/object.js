//object
let a={
    name:"Anand",
    surname:"Chukkala",
    favouritefood:"Ramen",
    favouriteplace:"Japan",
    age:30,
    student:true,
    intro:function(){
        return `my self ${this.name} I am ${this.age} years old my favouriteplace is ${this.favouriteplace}` ;
    }
}
let b=document.getElementById("A");
b.textContent=a.intro();
//constructors
function co(name,surname,place,food,age){
    this.name=name,
    this.surname=surname,
    this.place=place,
    this.food=food,
    this.age=age,
    this.intro=function(annn){
        console.log(annn)
    }
}
const person1=new co("Anand","Chukkala","Jaggampeta","Ramen",32);
const person2=new co("Durga","chukkala","Japan","sushi",20);
const person3=new co("Raj","Chukkala","Jaggampeta","Ramen",39);
console.log(person1.age);
console.log(person1.name);
console.log(person1.food);
console.log(person1.place);
person1.intro("ANAND");

console.log(person2.age);
console.log(person2.name);
console.log(person2.food);
console.log(person2.place);

console.log(person3.age);
console.log(person3.name);
console.log(person3.food);
console.log(person3.place);
//class
class places{
    constructor(village,mandal,district,state){
        this.village=village;
        this.state=state;
        this.mandal=mandal;
        this.district=district;

    }
    show(){
        console.log(`Village:${this.village},Mandal:${this.mandal},District:${this.district},State:${this.state}`);
    }
}
let place1=new places("Jaggampeta","Nathavaram","Anakapalli","Andhra Pradesh");
let place2=new places("Rajahmundry","Rajahmundry","Rajahmundry","Andhra Pradesh");

place1.show();
console.log(place2.district);
// STATIC KEYWORD
class trips{
    static numberoftrips=0;
    constructor(country){
        this.country=country;
        trips.numberoftrips++;
    }
    static intra(){
        console.log(`number of trips we do ${trips.numberoftrips}`);
    }
}
const trip1=new trips("Japan");
const trip2=new trips("North korea");
const trip3=new trips("USA");
console.log(trip1);
console.log(trip2.country);
trips.intra();

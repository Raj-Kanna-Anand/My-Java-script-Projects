class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    profile(){
        console.log(`${this.name} is ${this.age} years old`);
    }
    set name(value){
    if(value!==" "&&typeof value==="string"){
            this._name=value;
        }
    else{
            console.error("Must be non empty string");
        }
    }
    get name(){
        return this._name;
    }
    set age(value){
        if(value>0&&typeof value==="number")
        {
            this._age=value;
        }
        else{
            console.error("Must be Number  and greater than 0 ");
        }
    }
    get age(){
        return this._age;
    }
}
class tiger extends animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }
    set runspeed(value){
        if(value>0 && typeof value==="number"){
        this._runspeed=value;
        }
        else{
            console.error("must be number greater than zero");
        }
    }
    get runspeed(){
        return this._runspeed;
    }
}
class  zebra extends animal{
    constructor(name,age,height){
        super(name,age);
        this.height=height;
    }
    set height(value){
        if(value>0 && typeof value==="number"){
        this._height=value;
        }
        else{
            console.error("must be number greater than zero");
        }
    }
    get height(){
        return this._height;
    }

}
class parrot extends animal{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed=flyspeed;
    }
        set flyspeed(value){
        if(value>0 && typeof value==="number"){
        this._flyspeed=value;
        }
        else{
            console.error("must be number greater than zero");
        }
    }
    get flyspeed(){
        return this._flyspeed;
    }
}
const tiger1=new tiger("tiger",20,35);
const zebra1=new zebra("zebra",34,36);
const parrot1=new parrot("parrot",20,22);

console.log(tiger1.name);
console.log(tiger1.runspeed);
tiger1.profile();
zebra1.profile();
console.log(zebra1.height);
console.log(parrot1.flyspeed);
//Destructuring :which allows us to extract values from objects or arrays
//               and assign them directly to variables using a shorter,cleaner syntax
//     for array:[]
//     for object:{}
let AB={
    name1:"Anand",
    age:20,
    Isstudent:true,
    adress:{           //nested object:object in another object
        VName:"rjah",
        Vdistrict:"Rajah",
    },
    hobbies:["Reading","Studying"],
}
console.log(AB.adress.VName);
console.log(AB.hobbies[0]);
let {name1:NNNN,job="unemployed"}=AB;
//we can rename the property by giving like that name1:NNNN otherwise we must place object property name
console.log(NNNN);
console.log(job);
let colors=["red","green","white","blue"];
[colors[0],colors[3]]=[colors[3],colors[0]];//swapping
console.log(colors);
let a=10,b=111;
[a,b]=[b,a];
console.log(a,b);
let [firstcolor,secondcolor, ,fourthcolor]=colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(fourthcolor);

const place1={
    village:"Jagampeta",
    mandal:"nathavaram",
    district:"anakapalli",
    state:"AP",
}
//function of destructuring object
function ppp({village,mandal,district,state}){
    console.log(`${village}`);
}
ppp(place1);
//function of destructuring array
function colordi([firstcolour,second, , ,fifthcolour="violet"]){
    console.log(`${second}`);
    console.log(fifthcolour);
}
colordi(colors);
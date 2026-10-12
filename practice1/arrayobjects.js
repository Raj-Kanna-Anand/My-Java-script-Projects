let person=[{name:"Anand",
             age:20,
             country:"Japan",}
             ,{name:"Durga",
                age:16,
                country:"India",
             }
             ,{name:"Varalaxmi",
                age:32,
                address:{
                    state:"Ap",
                    country:"INDIA",
                },
             }
];
console.log(person[1].name);
console.log(person[1].age);
console.log(person[1].address="DELHI "+person[1].country);
console.log(person[2]);
console.log(person[0].address="TOKYO "+person[0].country);
//------------forEach()----------
person.forEach(value=>{console.log(value.name)});
person.forEach(value=>{console.log(value.age)});
person.forEach(value=>{console.log(value.address="Delhi "+value.country)});
//--------------map()--------------
let person1=person.map(value=>{return value.name});
let person2=person.map(value=>{return value.age});
console.log(person1);
console.log(person2);
//---------------filter()-------------------
let person3=person.filter(value=>{return value.age<=20});
console.log(person3);
//----------------reduce()------------------
let person4=person.reduce((accumulator,element)=>{
    return accumulator.age>element.age?accumulator:element;
});
console.log(person4);

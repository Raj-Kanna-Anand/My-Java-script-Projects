let a=["Anand","jo","pr","fdgf","rehdsg"];
let sort=a.sort();
console.log(sort);
let b=[1,887,383,38,93];
let sortb=b.sort((a,b)=>//this is predefined numbers of sorting
    a-b);                    
console.log(sortb);
//Fisher-Yates shuffle
let c=["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
shuffle(c);
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const random=Math.floor(Math.random() * (i+1));
        [array[i],array[random]]=[array[random],array[i]];
    }

}
//Date Functions
console.log(c);
let s=new Date(100000);
console.log(s);
let m=new Date();
//set functions
m.setMonth(1);
m.setDate(2);
m.setFullYear(2029);
m.setHours(3);
m.setMinutes(45);
m.setSeconds(26);
console.log(m);
//get functions
let w=new Date();
let u=w.getDate();
let u1=w.getHours();
let u2=w.getMinutes();
let u3=w.getSeconds();
let u4=m.getDate();
console.log(u);
console.log(u2);
console.log(u3);
console.log(u4);

//JSON files:data interchanging format Used for exchanging data between
//           a server and a web application
//           JSON files: {key:value} or [value1,value2,value3] or[{object1},{object2}]

//           JSON.stringfy()=converts js object to js string
//           JSON.parse()=converts js string to js object

const names=["Anand","Durga"];
const jsonnames=JSON.stringify(names);
console.log(jsonnames);
const jsonnames1=JSON.parse(jsonnames);
console.log(jsonnames1);
let a=fetch("1.json")  
   .then(Respons=>Respons.json())
.then(value=>console.log(JSON.stringify(value)));
console.log(a);
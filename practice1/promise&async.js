//promise = it helps us to not entering to callback hell
//          it used to solve asynchronous code
//      syntax: new promise(resolve,reject)=>{asynchronous code}

function first(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This must be first");
    },6000);
   });

}
function second(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //we can place reject or not based on condition 
        //we can leave like the first one also
        let complete1=true;
        if(complete1){
        resolve("this is second");
        }
        else{
            reject("YOu didn't complete second");
        }
    },3000);
    })
}
function third(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let complete2=true;
        if(complete2){
        resolve("this is third");
        }
        else{
            reject("this task not completed");
        }
    },3000);
    })

}
first().then(value=>{console.log(value); 
    return second()})
    .then(value=>{console.log(value); 
    return third()})
    .then(value=>{console.log(value);})
    .then(() => {
        alltasks();
    });

//async&await : it is also a solution of asynchronous code

//for example take the above function:
async function alltasks(){
    try{
    let task1=await first();
    console.log(task1);
    let task2=await second();
    console.log(task2);
    let task3=await third();
    console.log(task3);
    }
    catch(error){
        console.error(error);
    }
}

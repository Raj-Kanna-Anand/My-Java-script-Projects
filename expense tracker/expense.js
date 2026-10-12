let button=document.getElementById("button1");
let count=1;
let Totalexpenses=0;
let Total=document.getElementById("Total");
button.addEventListener("click",()=>{
 createTask();
})
function createTask(){
    let tablerow=document.createElement("tr");
    let amountvalue=document.createElement("td");
    let descriptionvalue=document.createElement("td");
    let datevalue=document.createElement("td");
    let categoryvalue=document.createElement("td");
    let index=document.createElement("td");
    let button1=document.createElement("button");
    let button2=document.createElement("button");
    let buttoncontainer=document.createElement("td");
    let Amount=document.getElementById("amount").value;
    Amount=Number(Amount);
    let date=document.getElementById("date").value;
    let description=document.getElementById("description").value;
    let category=document.getElementById("category").value;
    let tbody=document.getElementById("tbody");
    button1.textContent="e";
    button2.textContent="d";
    if(!isNaN(Amount)){
    amountvalue.textContent=Amount;
    if(description !=""){
    descriptionvalue.textContent=description;
    if(date !=""){
    Totalexpenses=Totalexpenses+Amount;
    datevalue.textContent=date;
    categoryvalue.textContent=category;
    index.textContent=count;
    buttoncontainer.append(button1,button2);;
    tablerow.append(index,amountvalue,descriptionvalue,categoryvalue,datevalue,buttoncontainer);
    tbody.append(tablerow);
    Total.textContent=`Total Expenses = ${Totalexpenses}`;
    count=count+1;
    }
    else{
        alert("Enter date");
    }
}

    else{
        alert("Enter non empty string")
    }
}
    else{
        alert("Enter in numbers");
    }
    descriptionvalue.classList.add("values");
    amountvalue.classList.add("values");
    datevalue.classList.add("values");
    categoryvalue.classList.add("values");
    buttoncontainer.classList.add("BUTTONS");
    button1.classList.add("BUTTONS1"); 
    button2.classList.add("BUTTONS1"); 
    button2.addEventListener("click",()=>{
        tablerow.remove();
        Totalexpenses=Totalexpenses-Amount;
        Total.textContent=`Total Expenses = ${Totalexpenses}`;
    })  
    button1.addEventListener("click",()=>{
        let  newAmount=window.prompt("Enter Amount",amountvalue.textContent);
        let newdescription=window.prompt("Enter Description",descriptionvalue.textContent);
        if(newAmount===null || newdescription===null){
            return;
        }
        newAmount=Number(newAmount);
        if(isNaN(newAmount) || newAmount===0){
            alert("enter amount in numbers")
        }
        if(description===""){
            alert("Enter in string")
        }
        amountvalue.textContent=newAmount;
        descriptionvalue.textContent=newdescription;
        Totalexpenses=Totalexpenses-Amount;
        Totalexpenses=Totalexpenses+newAmount;
        Amount=newAmount;
        Total.textContent=`Total Expenses = ${Totalexpenses}`;   
});
}
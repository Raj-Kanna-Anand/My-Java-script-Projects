let Amount = document.getElementById("amount");
let date = document.getElementById("date");
let description = document.getElementById("description");
let category = document.getElementById("category");
let tbody = document.getElementById("tbody");
let button = document.getElementById("button");

let Totalexpenses = 0;
let Total = document.getElementById("Total");

let filtercategory = document.querySelector(".filtercategory");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ---------------- SAVE DATA ----------------

function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ---------------- CREATE TASK ----------------

function createTasks(TaskData, index) {

    let tablerow = document.createElement("tr");

    let amountvalue = document.createElement("td");
    let descriptionvalue = document.createElement("td");
    let datevalue = document.createElement("td");
    let categoryvalue = document.createElement("td");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    let buttoncontainer = document.createElement("td");


    // ---------- DISPLAY DATA ----------

    amountvalue.textContent = TaskData.amount;
    descriptionvalue.textContent = TaskData.description;
    datevalue.textContent = TaskData.date;
    categoryvalue.textContent = TaskData.category;

    button1.textContent = "✏️";
    button2.textContent = "🗑️";


    // ---------- EDIT ----------

    button1.addEventListener("click", () => {

        let newAmount = window.prompt(
            "Enter Amount",
            amountvalue.textContent
        );

        let newdescription = window.prompt(
            "Enter Description",
            descriptionvalue.textContent
        );


        // Cancel button
        if (newAmount === null || newdescription === null) {
            return;
        }


        // Amount empty
        if (newAmount.trim() === "") {
            alert("Enter amount");
            return;
        }


        newAmount = Number(newAmount);


        // Amount must be a number
        if (isNaN(newAmount) || newAmount <= 0) {
            alert("Enter amount in numbers");
            return;
        }


        // Description empty
        if (newdescription.trim() === "") {
            alert("Enter non empty string");
            return;
        }


        // ---------- UPDATE TOTAL ----------

        Totalexpenses =
            Totalexpenses - Number(TaskData.amount);

        Totalexpenses =
            Totalexpenses + newAmount;


        // ---------- UPDATE OBJECT ----------

        TaskData.amount = newAmount;
        TaskData.description = newdescription;


        // ---------- UPDATE TABLE ----------

        amountvalue.textContent = newAmount;
        descriptionvalue.textContent = newdescription;


        Total.textContent =
            `Total Expenses = ${Totalexpenses}`;


        // ---------- SAVE ----------

        saveData();

    });


    // ---------------- DELETE ----------------

    button2.addEventListener("click", () => {

        tasks.splice(index, 1);

        tablerow.remove();

        Totalexpenses =
            Totalexpenses - Number(TaskData.amount);

        Total.textContent =
            `Total Expenses = ${Totalexpenses}`;

        saveData();

    });


    // ---------------- APPEND BUTTONS ----------------

    buttoncontainer.append(button1, button2);


    tablerow.append(
        amountvalue,
        descriptionvalue,
        categoryvalue,
        datevalue,
        buttoncontainer
    );


    tbody.append(tablerow);


    // ---------------- TOTAL ----------------

    Totalexpenses =
        Totalexpenses + Number(TaskData.amount);

    Total.textContent =
        `Total Expenses = ${Totalexpenses}`;


    // ---------------- CSS CLASSES ----------------

    descriptionvalue.classList.add("values");
    amountvalue.classList.add("values");
    datevalue.classList.add("values");
    categoryvalue.classList.add("values");

    buttoncontainer.classList.add("BUTTONS");

    button1.classList.add("BUTTONS1");
    button2.classList.add("BUTTONS1");
}


// ---------------- ADD BUTTON ----------------

button.addEventListener("click", () => {


    // ---------- AMOUNT ----------

    if (
        Amount.value.trim() !== "" &&
        !isNaN(Number(Amount.value)) &&
        Number(Amount.value) > 0
    ) {


        // ---------- DESCRIPTION ----------

        if (description.value.trim() !== "") {


            // ---------- DATE ----------

            if (date.value !== "") {


                // ---------- CREATE OBJECT ----------

                let newtasks = {

                    amount: Number(Amount.value),

                    description: description.value,

                    category: category.value,

                    date: date.value

                };


                // ---------- ADD TO ARRAY ----------

                tasks.push(newtasks);


                // ---------- SAVE ----------

                saveData();


                // ---------- DISPLAY ----------

                /*
                   Use the actual index in tasks
                */

                createTasks(
                    newtasks,
                    tasks.length - 1
                );


                // ---------- CLEAR INPUTS ----------

                Amount.value = "";

                description.value = "";

                date.value = "";

            }

            else {

                alert("Enter correct values to create task");

            }

        }

        else {

            alert("Enter non empty string");

        }

    }

    else {

        alert("Enter amount in numbers");

    }

});


// ---------------- LOAD DATA ----------------

tasks.forEach((task, index) => {

    createTasks(task, index);

});


// ---------------- FILTER CATEGORY ----------------

filtercategory.addEventListener("change", () => {


    let selectedcategory =
        filtercategory.value;

    let filtered;


    // ---------- ALL ----------

    if (selectedcategory === "All") {

        filtered = tasks;

    }


    // ---------- PARTICULAR CATEGORY ----------

    else {

        filtered = tasks.filter((task) => {

            return task.category === selectedcategory;

        });

    }


    // ---------- CLEAR TABLE ----------

    tbody.innerHTML = "";


    // ---------- RESET TOTAL ----------

    Totalexpenses = 0;


    // ---------- DISPLAY FILTERED DATA ----------

    filtered.forEach((task) => {

        /*
           IMPORTANT:

           Don't use the filtered array's index.

           Find the original index inside tasks.
           This keeps Edit/Delete working after filtering.
        */

        let originalIndex =
            tasks.indexOf(task);


        createTasks(
            task,
            originalIndex
        );

    });

});
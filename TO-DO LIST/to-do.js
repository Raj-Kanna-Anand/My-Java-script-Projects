let a = document.getElementById("a");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(taskData, index) {

    let task = document.createElement("div");

    let new2 = document.createElement("label");
    new2.textContent = taskData.text;

    let new1 = document.createElement("input");
    new1.type = "checkbox";
    new1.checked = taskData.completed;



    new1.addEventListener("click", () => {

        taskData.completed = new1.checked;

        if (new1.checked) {
            new2.style.textDecoration = "line-through";
        }
        else {
            new2.style.textDecoration = "none";
        }

        saveTasks();
    });

    let new3 = document.createElement("button");
    let new4 = document.createElement("button");

    new3.textContent = "edit";
    new4.textContent = "delete";

    task.classList.add("gg");
    new1.classList.add("gg1");
    new2.classList.add("gg2");
    new3.classList.add("gg3");
    new4.classList.add("gg4");

    new3.addEventListener("click", () => {

        let edit = window.prompt("enter text", new2.textContent);

        if (edit !== null && edit !== "") {
            new2.textContent = edit;
            taskData.text = edit;
            saveTasks();
        }
    });

    new4.addEventListener("click", () => {

        tasks.splice(index, 1);

        saveTasks();

        task.remove();
    });

    task.append(new1, new2, new3, new4);

    a2.append(task);
}


a1.addEventListener("click", () => {

    if (a.value !== "") {

        let newTask = {
            text: a.value,
            completed: false
        };

        tasks.push(newTask);

        saveTasks();

        createTask(newTask, tasks.length - 1);

        a.value = "";
    }
    else {
        window.alert("Enter The Task");
    }

});


// Load saved tasks when page opens

tasks.forEach((task, index) => {
    createTask(task, index);
});
const taskList = document.querySelector("#taskList");
const todoForm = document.querySelector("#todoForm");
const input = document.querySelector("input");
const removeAll = document.querySelector("#removeAll");

// create a submit event in the form to collect user input
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value;
    addTask(taskText);
    input.value = "";
});

// take the user input, create a li and a button
const addTask = (task) => {
    const newTask = document.createElement("li");
    newTask.append(task);
    taskList.append(newTask);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "x";
    newTask.append(deleteBtn);
};

taskList.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("focused")) {
        el.classList.remove("focused");
        el.removeChild(el.firstElementChild);
    } else {
        el.nodeName === "LI" && el.classList.add("focused");
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-check", "fa-solid");
        el.prepend(checkIcon);
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

removeAll.addEventListener("click", (e) => {
    const list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
    console.log(list);
});
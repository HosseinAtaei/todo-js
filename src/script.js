let newTask = document.getElementById("input")

function addTask() {
    if (newTask.value === "") {
        alert("چیزی بنویسید!");
    }
    else {
        const tasks = document.createElement("div")
        tasks.innerHTML = newTask.value
        document.getElementById("taskList").appendChild(tasks);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        tasks.appendChild(span)
    }
    newTask.value = ""
    saveData()
}

document.getElementById("taskList").addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    } else if (e.target.tagName === "DIV") {
        e.target.classList.toggle("completed");
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML)
}

function showTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("data")
}
showTasks()
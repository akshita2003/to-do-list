document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    const tasks = [];

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }

    // Function to render the list of tasks
    function renderTasks() {
        taskList.innerHTML = "";

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const listItem = document.createElement("li");
            listItem.textContent = task;
            
            listItem.addEventListener("click", () => {
                tasks.splice(i, 1);
                renderTasks();
            });

            taskList.appendChild(listItem);
        }
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    renderTasks();
});

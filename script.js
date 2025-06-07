document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    const tasks = [];

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const taskObj = {
            text: taskText,
            completed: false
        };

        tasks.push(taskObj);
        taskInput.value = "";
        renderTasks();
    }

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = "";

        tasks.forEach((taskObj, index) => {
            const listItem = document.createElement("li");

            // Toggle completed on click of listItem
            listItem.addEventListener("click", () => {
                taskObj.completed = !taskObj.completed;
                renderTasks();
            });

            // Display task text
            listItem.textContent = taskObj.text;
            if (taskObj.completed) {
                listItem.classList.add("completed");
            }

            // Create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";

            // Prevent click propagation to parent li
            deleteBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                tasks.splice(index, 1);
                renderTasks();
            });

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
        });
    }

    // Add task button click
    addTaskButton.addEventListener("click", addTask);

    // Add task on Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    renderTasks();
});

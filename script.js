function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function clearTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');
    
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].classList.contains('completed')) {
            taskList.removeChild(tasks[i]);
        }
    }
}

// Example usage
console.log("To-Do List Application is ready!");

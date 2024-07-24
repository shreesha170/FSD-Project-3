document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearCompletedButton = document.getElementById('clearCompletedButton');
    const taskPrompt = document.getElementById('taskPrompt');

    function updateTaskPrompt() {
        const tasks = taskList.getElementsByTagName('li');
        const remainingTasks = Array.from(tasks).filter(task => !task.classList.contains('completed')).length;

        if (remainingTasks > 0) {
            taskPrompt.textContent = `You have ${remainingTasks} tasks to do.`;
        } else {
            taskPrompt.textContent = 'Congratulations, you have completed all tasks!';
        }
    }

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    listItem.classList.add('completed');
                } else {
                    listItem.classList.remove('completed');
                }
                updateTaskPrompt();
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(taskText));
            taskList.appendChild(listItem);
            taskInput.value = '';
            updateTaskPrompt();
        }
    });

    clearCompletedButton.addEventListener('click', function() {
        const completedTasks = taskList.querySelectorAll('.completed');
        completedTasks.forEach(function(task) {
            task.remove();
        });
        updateTaskPrompt();
    });

    updateTaskPrompt();
});



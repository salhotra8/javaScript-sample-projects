const taskInput = document.getElementById('task-input');
const addBtn = document.getElementsByClassName('add-btn')[0];
const taskContainer = document.getElementById('task-container');

addBtn.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check fa"></i>';
    checkBtn.classList.add('checkBtn')
    task.appendChild(checkBtn);


    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-duotone fa-trash fa"></i>';
    deleteButton.classList.add('deleteBtn')
    task.appendChild(deleteButton);

    if (taskInput.value === '') {
        alert('Please enter a task.')
    }
    else {
        taskContainer.appendChild(task);
        taskInput.value = "";

        checkBtn.addEventListener('click', () => {
            li.style = "text-decoration: line-through";
        })

        deleteButton.addEventListener('click', () => {
            task.remove();
        })
    }
})


function demo(){
    console.log(`is working`)
}

function addTask(){
    let task = document.querySelector('.new-task').value
    let date = document.querySelector('.date').value
    let tasks = {
        savedTask: task,
        deadline: date,
    }

    localStorage.setItem(`tasks`,JSON.stringify(tasks));
    const taskContainer = document.createElement('div');
    
    const taskText = document.createElement('span');
    task.innerText = task;

    const taskDate = document.createElement('small');
    taskDate.innerText = date;

    const dltBtn = document.createElement('button');
    dltBtn.innerText = "Delete";

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(dltBtn);

    document.querySelector('.task-list').appendChild(taskContainer);
    
    document.querySelector('.new-task').value = "";
    document.querySelector('.date').value = "";
}
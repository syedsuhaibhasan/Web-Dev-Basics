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
    let label = document.createElement('label');
    
}
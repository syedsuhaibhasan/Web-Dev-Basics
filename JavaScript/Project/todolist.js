let todoList = [];
let dates = [];
displayItem();

function addTask(){
    let task = document.querySelector('.new-task').value
    let date = document.querySelector('.date').value
    todoList.push(task);
    dates.push(date);
    displayItem();
    document.querySelector('.new-task').value = '';
    document.querySelector('.date').value = '';

    // localStorage.setItem(`tasks`,JSON.stringify(tasks));
    // const taskContainer = document.createElement('div');
    
    // const taskText = document.createElement('span');
    // task.innerText = task;

    // const taskDate = document.createElement('small');
    // taskDate.innerText = date;

    // const dltBtn = document.createElement('button');
    // dltBtn.innerText = "Delete";

    // taskContainer.appendChild(taskText);
    // taskContainer.appendChild(taskDate);
    // taskContainer.appendChild(dltBtn);

    // document.querySelector('.task-list').appendChild(taskContainer);
    
    // document.querySelector('.new-task').value = "";
    // document.querySelector('.date').value = "";
}

function displayItem() {
     let displayElement = document.querySelector('.task-list');
     displayElement.innerText = '';
     let newHtml = '';
     for (let i = 0; i < todoList.length; i++) {
        newHtml += `
        <div>
            <span>${todoList[i]}  ${dates[i]}</span>
            <button  
                onclick="todoList.splice(${i},1);
                        dates.splice(${i},1)
                        displayItem();
                        ;">Delete</button>
        </div>
        `;

        displayElement.innerText = displayElement.innerText + dates[i] + todoList[i] + "\n";
    }
    displayElement.innerHTML = newHtml;
}
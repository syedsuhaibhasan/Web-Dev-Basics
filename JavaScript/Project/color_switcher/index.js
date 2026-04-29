const buttons = document.querySelectorAll(".my-btn");
const body = document.querySelector("body");
buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) { 
        if(event.target.id === "red"){body.style.backgroundColor = 'red'}  
        else if(event.target.id === "blue"){body.style.backgroundColor = 'blue'}  
        else if(event.target.id === "green"){body.style.backgroundColor = 'green'}
        else{
            body.style.backgroundColor = 'white'
        }
    })
});
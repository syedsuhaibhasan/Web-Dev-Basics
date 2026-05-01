console.log("im linked");
const time = document.querySelector('.time');
setInterval(() => {
    let obj = new Date();
time.innerHTML = obj.toLocaleTimeString();
}, 1000);
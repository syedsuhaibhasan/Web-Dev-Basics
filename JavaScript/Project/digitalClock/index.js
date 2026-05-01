console.log("im linked");
const time = document.querySelector('.time');
let obj = new Date();
time.innerHTML = obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
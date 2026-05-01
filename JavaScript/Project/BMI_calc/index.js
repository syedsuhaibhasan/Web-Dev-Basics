const weight = document.querySelector('#height');
const height = document.querySelector('#weight');
const calculateBtn = document.querySelector('#calc') ;
let weightVal = 0;
let heightVal = 0;


calculateBtn.addEventListener('click',calcBMI);

function calcBMI(){
    if (weightVal>0 && heightVal>0) {
         const heightInMeters = heightVal / 100;
        const bmi = (weightVal / (heightInMeters * heightInMeters)).toFixed(2);

        const ans = document.querySelector('#answer');
        ans.innerHTML='';

        const bmiSpan = document.createElement('span');
        bmiSpan.innerText = bmi; 
        ans.appendChild(bmiSpan);
    }
}

weight.addEventListener('input',(event)=>{
    weightVal = parseFloat(event.target.value) || 0;
});

height.addEventListener('input',(event)=>{
    heightVal = parseFloat(event.target.value) || 0;
});

// USE FORMS IN HTML IT WILL BE MORE EASIER
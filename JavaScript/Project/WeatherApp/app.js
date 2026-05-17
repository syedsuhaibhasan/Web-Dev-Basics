
let city = '';
const searchQuery =  document.getElementById('search-bar');
searchQuery.addEventListener('input',(event)=>{
    city = event.target.value.trim();
});

searchQuery.addEventListener('keydown', async (event)=>{
    if (event.key === 'Enter') {
        await getData();
    }
});

async function getresponse() {
    try{
        if (!city) {
            return null;
        }
        const apiKey = '95d574600b4b4d08b74174354260805';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

async function getData(){
    const response = await getresponse();
    if (!response) {
        return;
    }
    const temp = document.querySelector('#temp-val');
    temp.innerHTML = `${response.current.temp_c}C`;

    const windSpeed = document.querySelector('#windSpeed-val');
    windSpeed.innerHTML = `${response.current.wind_mph}Mph`;

    const humidity = document.querySelector('#humidity-val');
    humidity.innerHTML = `${response.current.humidity}%`;
    
    const location = document.querySelector('#country-city');
    location.innerHTML = `${response.location.country},${city}`;

    const dateContainer = document.querySelector('.date-container');
    let date = new Date();
    dateContainer.innerHTML = `Date: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

    const weatherIcon = document.querySelector('#icon');
    weatherIcon.src = response.current.condition.icon;
}


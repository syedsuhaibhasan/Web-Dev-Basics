
let city = '';
const searchQuery =  document.getElementById('search-bar');
searchQuery.addEventListener('input',(event)=>{
    city = event.target.value.trim();
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
    console.log(response.current.wind_mph);
}

getData()
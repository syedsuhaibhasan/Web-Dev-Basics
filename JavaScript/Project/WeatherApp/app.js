
async function getresponse() {
    try{
        const apiKey = '95d574600b4b4d08b74174354260805';
        let city = "London";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

async function getData(){
    const response = await getresponse();
    console.log(response);
}

getData()
//this is for the one call api
const APPID = "d68b260cc48f984ad54c1861be8879fb";
//Lynnwoods Lat and Long 
const LATID = 47.49
const LONGID = -122.18

//Example of call
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATID}&lon=${LONGID}&appid=${APPID}&units=imperial`;
const iconimageURL = "https://openweathermap.org/img/wn/";

console.log(apiURL);
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) =>{
        // console.log(apiURL);
        // console.log(jsObject);  //for testing

        const ct = jsObject.current.temp.toFixed(1);
        const curtemp = document.querySelector('.curtemp');
        curtemp.textContent = ct;

        const hum = document.querySelector('.humid');
        hum.textContent = jsObject.current.humidity;

        const desc = document.querySelector('.desc');
        desc.textContent = jsObject.current.weather[0].description; //referencing the weather array.

        // console.log(ct);
        // console.log(hum);
        // console.log(desc);

        //3 day forecast call
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


        const threedayforecast = jsObject.daily;
        
        let day = 1;
        // threedayforecast.forEach((x) => {
         for (day = 1; day<4; day++)   {
            let d = new Date(jsObject.daily[day].dt * 1000);

// console.log (d.toDateString());


            document.getElementById(`dayofweek${day}`).textContent = dayofweek[d.getDay()];
            
            document.getElementById(`iconday${day}`).setAttribute('src', iconimageURL + jsObject.daily[day].weather[0].icon + '@2x.png');
            document.getElementById(`iconday${day}`).setAttribute('alt', jsObject.daily[day].weather[0].description);
            
            document.getElementById(`forecast${day}`).textContent = jsObject.daily[day].temp.max.toFixed(1);

        };

    });
 //Five day Forecast.
//  const cityid = 5604473;
// const APPID = "d68b260cc48f984ad54c1861be8879fb";

const fapiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;
const iconimageURL = "https://openweathermap.org/img/wn/";

 fetch(fapiURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
     
      const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      //reduce the list array to the five forecasts ... 40
      const fivedayforecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
      console.log(fivedayforecast);
    
      //loop through each of the forecast days
      let day = 1;
      fivedayforecast.forEach((x) => {
         
        let d = new Date(x.dt_txt);
        document.getElementById(`dayofweek${day}`).textContent = dayofweek[d.getDay()];

        document.getElementById(`iconday${day}`).setAttribute('src', iconimageURL + x.weather[0].icon + '@2x.png');
        document.getElementById(`iconday${day}`).setAttribute('alt', x.weather[0].description);

        document.getElementById(`forecast${day}`).textContent = x.main.temp.toFixed(1);
        day++
      });

   });
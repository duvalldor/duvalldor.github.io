 //Five day Forecast.
//  const cityid = 5604473;
// const APPID = "d68b260cc48f984ad54c1861be8879fb";

const fapiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;
const iconimageURL = "https://openweathermap.org/img/w/";

 fetch(fapiURL)
   .then((response) => response.json())
   .then((jsObject) => {
     console.log(jsObject);
     
            const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       //reduce the list array to the five forecasts ... 40
       const fivedayforecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
       console.log(fivedayforecast);
    
       //loop through each of the forecast days
        let day = 0;
        fivedayforecast.forEach((x) => {
       
           let d = new Date(x.dt_txt);
            console.log(d);
            console.log((`dayofweek${day + 1}`));
           document.getElementById(`dayofweek${day + 1}`).textContent = dayofweek[d.getDay()];


            var img = document.getElementById(`iconday${day + 1}`);
            console.log(img);

           document.getElementById(`iconday${day + 1}`).setAttribute('src',iconimageURL + x.weather[0].icon + '.png');
           document.getElementById(`iconday${day + 1}`).setAttribute('alt',x.weather[0].description);
           console.log((`iconday${day + 1}`));



       
            document.getElementById(`forecast${day + 1}`).textContent = x.main.temp.toFixed(1);
           day++
       });

   });
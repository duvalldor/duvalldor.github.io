 //Five day Forecast.
//  const cityid = 5604473;
//const APPID = "d68b260cc48f984ad54c1861be8879fb";
var townName = document.getElementById('townname').textContent;
console.log(townName);
if (townName == "Fish Haven") {
  cityid = 5585010;
} else if (townName == "Soda Springs") {
  cityid = 5607916;
} else if(townName == "Preston") {
  cityid = 5604473; // townName is Preston
}
console.log(cityid);

const fapiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;
const iconimageURL = "https://openweathermap.org/img/wn/";
const townevents = 'https://byui-cit230.github.io/weather/data/towndata.json';

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

   fetch(townevents)
       .then(function (response) {
           return response.json();
       })
       .then(function (jsonObject) {
           console.log(jsonObject);//temporarily check to make sure we see a response
        
           const towns = jsonObject['towns'];
       for (let i = 0; i < towns.length; i++) {
           if (towns[i].name == townName) {
               
               for(let j = 0; j < towns[i].events.length; j++){
                   s = document.createElement('div')
                   s.textContent = towns[i].events[j]
                   document.getElementById('upcomingevents').appendChild(s)
               }
           }
   
       }
   
   })   
const cityid = "5604473";
const APPID = "d68b260cc48f984ad54c1861be8879fb";

//go to the api URL with specific information input into the URL 
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d68b260cc48f984ad54c1861be8879fb&units=imperial";
//this is the template literal
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
        // console.log(jsObject);
    
    const ct = jsObject.main.temp.toFixed(1);
    const curtemp = document.querySelector('.curtemp');
    curtemp.textContent = ct;
    
    const ws = jsObject.wind.speed.toFixed(1);
    const windspd = document.querySelector('.wspeed');
    windspd.textContent = ws;
        
    const hum = document.querySelector('.humid');
    hum.textContent = jsObject.main.humidity;
    
    const desc = document.querySelector('.desc');
    desc.textContent = jsObject.weather[0].main;//referencing the weather array

    // console.log('checking windchill');
    // console.log(ws);
    // console.log(ct);
    // if (ws < 3 || ct > 80) {
    //   document.getElementById('wc').textContent = 'N/A xx';
    // }
    // else {
      windchill(ct, ws);
    // }
   
   
//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const d = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
  });

 
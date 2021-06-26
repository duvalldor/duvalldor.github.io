const cityid = "5604473";
const APPID = "d68b260cc48f984ad54c1861be8879fb";

//go to the api URL and name
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d68b260cc48f984ad54c1861be8879fb&units=imperial";
//this is the template literal
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
        console.log(jsObject);
        
    const curtemp = document.querySelector('.curtemp');
    curtemp.textContent = jsObject.main.temp;
    
    const windspd = document.querySelector('.wspeed');
        windspd.textContent = jsObject.wind.speed;
        
        const hum = document.querySelector('.humid');
    hum.textContent = jsObject.main.humidity;
    
    const desc = document.querySelector('.desc');
    desc.textContent = jsObject.weather[0].main;//referencing the weather array
    
   //Windchill info:
    
    const t = document.querySelector(".curtemp").textContent;
    const speed = document.querySelector(".wspeed").textContent;
    const none = 'N/A';
    
    if (t <= 50 && speed >= 3) {
        
        const s = Math.pow(speed, .16)
        const wc = (35.74 + 0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
        const result = wc.toFixed(2);
        document.querySelector(`#wc`).textContent = `${result} °F`;
    }   
    else {
        document.querySelector(`#wc`).textContent = none;
    }
    
    
    // f = 35.74 + 0.6215(t) − 35.75(s)0.16 + 0.4275(t)(s)0.16
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
       
    //   //document.getElementById('imagesrc').textContent = imagesrc; //informational specification only
    //     document.getElementById('icon').setAttribute('src', imagesrc);
    //     document.getElementById('icon').setAttribute('alt', desc);
  });
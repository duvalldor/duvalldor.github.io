// const cityid = "5604473";
const APPID = "d68b260cc48f984ad54c1861be8879fb";
var townName = document.getElementById('townname').textContent;
//console.log(townName); //for testing
if (townName == "Fish Haven") {
  cityid = 5585010;
} else if (townName == "Soda Springs") {
  cityid = 5607916;
} else {
  cityid = 5604473; // townName is Preston
}
//console.log(cityid); //for testing

//go to the api URL with specific information input into the URL 
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d68b260cc48f984ad54c1861be8879fb&units=imperial";
//this is the template literal
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
        // console.log(jsObject); //for testing
    
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

    // console.log('checking windchill'); //for testing
    // console.log(ws); //for testing
    // console.log(ct); //for testing
    // if (ws < 3 || ct > 80) {
    //   document.getElementById('wc').textContent = 'N/A xx';
    // }
    // else {
      windchill(ct, ws);
});

 
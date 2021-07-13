//Last changed date.
const date = new Date(document.lastModified);
//document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + document.lastModified + "</p>"
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + fulldate + "</p>";

//Copyright year is below
// Hi Mom!

const year = document.querySelector('#copyrightyear');
year.innerHTML = new Date().getFullYear();

//add to the users local storage # of visits
if (localStorage.timesvisited == undefined) {
    localStorage.timesvisited = 1;
} else {
    localStorage.timesvisited = Number(localStorage.timesvisited) + 1;
}
const timesvisited = `Welcome, you have visited this page: ${localStorage.timesvisited} times`;
// document.querySelector(`#timesvisited`).textContent = timesvisited;

//document.querySelector(`#sincelastvisit`).textContent = "Hi Mom";

//days since last visit    sincelastvisit
var dateoflastvisit = new Date();
if (localStorage.dateoflastvisit != undefined) {
    dateoflastvisit = new Date(localStorage.dateoflastvisit);
}
localStorage.dateoflastvisit = new Date();

const today = new Date();
const numToday = today.getFullYear() * 365 + today.getMonth() * 31 + today.getDay();
const strnumToday = `Hi numToday ${numToday}`;
//document.querySelector(`#sincelastvisit`).textContent = strnumToday;

const numLast = today.getFullYear() * 365 + today.getMonth() * 31 + today.getDay();
const strnumLast = `Hi numLast ${numLast}`;
//document.querySelector(`#sincelastvisit`).textContent = strnumLast;

const numDays = numToday  - numLast;
const sincelastvisit = `You last visited  ${numDays} days ago`; 
// document.querySelector(`#sincelastvisit`).textContent = sincelastvisit;

//set up the rating choice for the severity of the storm
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
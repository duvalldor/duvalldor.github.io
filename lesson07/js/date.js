//Last changed date.
const date = new Date(document.lastModified);
//document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + document.lastModified + "</p>"
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + fulldate + "</p>";

//Copyright year is below

const year = document.querySelector('#copyrightyear');
year.innerHTML = new Date().getFullYear();

//add to the users local storage # of visits
if (localStorage.timesvisited == undefined) {
    localStorage.timesvisited = 1;
} else {
    localStorage.timesvisited = Number(localStorage.timesvisited) + 1;
}
const timesvisited = `Welcome, you have visited this page: ${localStorage.timesvisited} times`;
document.querySelector(`#timesvisited`).textContent = timesvisited;


//days since last visit    sincelastvisit
var dateoflastvisit = new Date();
if (localStorage.dateoflastvisit != undefined) {
    dateoflastvisit = localStorage.dateoflastvisit;
}
localStorage.dateoflastvisit = new Date();

const sincelastvisit = new Date() - dateoflastvisit;

//Last changed date.
const date = new Date(document.lastModified);
//document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + document.lastModified + "</p>"
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + fulldate + "</p>";

//Copyright year is below

const year = document.querySelector('#copyrightyear');
year.innerHTML = new Date().getFullYear();
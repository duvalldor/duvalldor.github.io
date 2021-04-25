document.getElementById('lastmodified').innerHTML = "<p> Last Changed: " + document.lastModified + "</p>"
const year = document.querySelector('#copyrightyear');
year.innerHTML = new Date().getFullYear();
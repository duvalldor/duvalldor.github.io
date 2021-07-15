//determine what day of the week--is it Friday
let thedate = new Date();
//to check it on the console log
//console.log(thedate.getDay()); //for testing
// if it is Friday put the banner at the top of the page.
//if it isn't Friday leave or take the banner off of the page. 

if (thedate.getDay() == 5) {
     
  document.querySelector('#pancakebanner').style.display = 'block';
      document.querySelector('#pancakebanner').textContent = 'Friday = Preston 🥞 Pancakes in the Park!  9:00 AM at the city park pavilion.';
};

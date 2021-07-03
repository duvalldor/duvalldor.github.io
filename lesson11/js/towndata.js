//source of towndata in json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        //console.tablel(jsonObject); //temporary checking for valid response and data parsing- 
        
        //name the jsonObject
        const cities = jsonObject['towns']
        
        //works through each town in the array of towns
        for (let i = 0; i < cities.length; i++) {
            //filter to only include preston, soda springs and fish haven.
            if (cities[i].name == "Fish Haven" || cities[i].name == "Preston" || cities[i].name == "Soda Springs") {
                //name the different areas of the dom
                let citycards = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let annrain = document.createElement('p');
                let eximage = document.createElement('img');
                let details = document.createElement('div');
       
                //set up what will be going in each of the create elements
                h2.textContent = cities[i].name;
                h3.textContent = cities[i].motto;
                year.textContent = "Year Founded: " + cities[i].yearFounded;
                population.textContent = "Population: " + cities[i].currentPopulation;
                annrain.textContent = "Annual Rainfall: " + cities[i].averageRainfall;

                eximage.setAttribute('src', "images/" + cities[i].photo);
                eximage.setAttribute('alt', "picture of around " + cities[i].textContent);
        
                //tell the card the order you want the information placed
                details.appendChild(h2); //this is the city name
                details.appendChild(h3);// this is the motto
                details.appendChild(year);
                details.appendChild(population);
                details.appendChild(annrain);
                citycards.appendChild(details);
                citycards.appendChild(eximage);
                //place in the 'card' the above information
                document.querySelector('div.citycards').appendChild(citycards);
            };
        };
    });

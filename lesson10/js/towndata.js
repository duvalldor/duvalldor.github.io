//source of towndata in json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        //    console.tablel(jsonObject); //temporary checking for valid response and data parsing- which I can't make work
        //name the jsonObject
        const cities = jsonObject['towns']
        // const town = towns.filter(x => x.name == 'Preston' || x.name == 'Fish Haven' || x.name == 'Soda Springs'){
        //works through each prophet in the array of prophets
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


                //set up what will be going in each of the create elements
                h2.textContent = cities[i].name;
                h3.textContent = cities[i].motto;
                year.textContent = "Year Founded: " + cities[i].yearFounded;
                population.textContent = "Population: " + cities[i].currentPopulation;
                annrain.textContent = "Annual Rainfall: " + cities[i].averageRainfall;

                eximage.setAttribute('src', "images/" + cities[i].photo);
                eximage.setAttribute('alt', "picture of " + h3.textContent);
        
        
                //tell the card the order you want the information placed
                citycards.appendChild(h2);
                citycards.appendChild(h3);
                // citycards.appendChild(motto);
                citycards.appendChild(year);
                citycards.appendChild(population);
                citycards.appendChild(annrain);
                citycards.appendChild(eximage);

                //place in the 'card' the above information
                document.querySelector('div.citycards').appendChild(citycards);
            };
        };
    });
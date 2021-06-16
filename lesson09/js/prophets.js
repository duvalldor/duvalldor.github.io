//source of prophet information in json
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        //console.tablel(jsonObject); //temporary checking for valid response and data parsing- which I can't make work
        //name the jsonObject
        const prophets = jsonObject['prophets']
        
        //works through each prophet in the array of prophets
        for (let i = 0; i < prophets.length; i++){

        //name the different areas of the dom
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bdate = document.createElement('p');
        let bplace = document.createElement('p');
        let eximage = document.createElement('img');

        //set up what will be going in each of the create elements
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        bdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        bplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        eximage.setAttribute('src', prophets[i].imageurl);
        eximage.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        
        //tell the card the order you want the information placed
        card.appendChild(h2);
        card.appendChild(bdate);
        card.appendChild(bplace);
        card.appendChild(eximage);

        //place in the 'card' the above information
        document.querySelector('div.cards').appendChild(card);
    }
    });






// h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

// card.appendChild(h2);

// document.querySelector('div.cards').appendChild(card);


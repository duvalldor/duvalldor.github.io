//source of prophet information in json
const requestURL = 'https://github.com/byui-cit230/byui-cit230.github.io/blob/master/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.tablel(jsonObject); //temporary checking for valid response and data parsing
        //name the jsonObject
        const prophets = jsonObject['prophets']
            //works through each prophet in the array of prophets
        for (let i = 0; i < prophets.length; i++);

            //name the different areas of the dom
        let card = document
    });



// let card = document.createElement('section');
// let h2 = document.createElement('h2');

// h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

// card.appendChild(h2);

// document.querySelector('div.cards').appendChild(card);


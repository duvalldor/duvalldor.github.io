const directory = 'json/directory.json';

fetch(directory)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const entries = jsonObject['businesses'];
        for (let i = 0; i < entries.length; i++) {

            let entry = document.createElement('section');
            let h3 = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let image = document.createElement('img');
    

            h3.textContent = entries[i].coname;
            address.textContent = 'Address: ' + entries[i].address;
            phone.textContent = 'Phone: ' + entries[i].phone;
            image.setAttribute('src', entries[i].image);
            image.setAttribute('alt', entries[i].coname + ' picture.' );
            
            //tell the card the order you want the information placed
            entry.appendChild(h3);
            entry.appendChild(address);
            entry.appendChild(phone);
            entry.appendChild(image);
    
    
            document.querySelector('div.directory').appendChild(entry);
        }
    }
);


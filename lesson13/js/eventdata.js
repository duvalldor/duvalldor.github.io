const townevents = 'json/events.json';

fetch(townevents)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        console.log(jsonObject);//temporarily check to make sure we see a response
        //name the jsonObject
        let events = jsonObject['town'][0].events;
        var townName = jsonObject['town'][0].name;
        console.log(townName); //for testing
        

        console.log(events); //for testing
        //works through each event in the town  
        for (let j = 0; j < events.length; j++) {
            console.log (events.length); //for testing
                    e = document.createElement('div');
                    e.textContent = events[j];
                    document.getElementById('upcomingevents').appendChild(e);
                }
      
    });
const townevents = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townevents)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        //console.log(jsonObject);//temporarily check to make sure we see a response
        //name the jsonObject
        let events = jsonObject['events']
        var townName = document.getElementById('townname').textContent;
        //console.log(townName); //for testing
        
        // //works through each town in the array of towns
        // for (let i = 0; i < cities.length; i++) {
        //     //filter to only include preston, soda springs and fish haven.
        //     if (cities[i].name == "Fish Haven" || cities[i].name == "Preston" || cities[i].name == "Soda Springs") {
        
        if (townName == "Fish Haven") {
            events = "fishevents";
        } else if (townName == "Soda Springs") {
            events = "sodaevents";
        } else {
            events = "prestonevents";
        }
        //console.log(events); //for testing
        //works through each event in the town chosen 
        for (let j = 0; j < townevents.events.length; j++) {
            //console.log (events.length); //for testing
                    e = document.createElement('div');
                    e.textContent = townName.events[j];
                    document.getElementById('upcomingcard').appendChild(e);
                }
      
    });
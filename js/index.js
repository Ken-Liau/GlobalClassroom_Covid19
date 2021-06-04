document.getElementById("body_selection").addEventListener('click', function(){
    console.log(document.getElementById("body_selection").value);
})
getCovidStatus();
function getCovidStatus(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/').then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        // var population = data.location.country_population;
        // var update = data.location.last_updated;
        // var confirmed = data.location.latest.confirmed;
        // var deaths = data.location.latest.deaths;

        // var populationFormat = population.toLocaleString("en");
        // var updateFormat = update.substr(0, 10);
        // var confirmedForamt = confirmed.toLocaleString("en");
        // var deathsFormat = deaths.toLocaleString("en");
        // var percent = ((Number(deaths)/Number(confirmed)) * 100).toLocaleString("en", 
        // {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

        // console.log(populationFormat, updateFormat, confirmedForamt, deathsFormat, percent);
    }).then(function(error){
        console.log(error);
    })
}
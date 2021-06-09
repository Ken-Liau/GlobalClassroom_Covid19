var flag = document.getElementById("select_flag");

getCovidStatus("176");

document.getElementById("body_selection").addEventListener('click', function(){
    updating(document.getElementById("body_selection").value);
})
document.getElementById('sec_symptoms').addEventListener('click', function(){
    openPage('symptoms');
})
document.getElementById('sec_statistics').addEventListener('click', function(){
    openPage('statistics');
})
document.getElementById('sec_prevention').addEventListener('click', function(){
    openPage('prevention');
})
document.getElementById('sec_treatment').addEventListener('click', function(){
    openPage('treatment');
})

function getCovidStatus(id){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+id).then(function(res){
        return res.json();
    }).then(function(data){
        var population = data.location.country_population;
        var update = data.location.last_updated;
        var confirmed = data.location.latest.confirmed;
        var deaths = data.location.latest.deaths;

        var populationFormat = population.toLocaleString("en");
        var updateFormat = update.substr(0, 10);
        var confirmedForamt = confirmed.toLocaleString("en");
        var deathsFormat = deaths.toLocaleString("en");
        var percent = ((Number(deaths)/Number(confirmed)) * 100).toLocaleString("en", 
        {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

        document.getElementById("population").innerHTML = populationFormat;
        document.getElementById("confirmed").innerHTML = confirmedForamt;
        document.getElementById("death").innerHTML = deathsFormat;
        document.getElementById("update").innerHTML = updateFormat;
        document.getElementById("small_update").innerHTML = updateFormat;
        document.getElementById("percentage").innerHTML = percent;
    }).then(function(error){
        console.log(error);
    })
}
function updating(country){
    switch(country){
        case "Indonesia":
            flag.innerHTML = '<img src="../icon/indonesia.png" alt="">'
            getCovidStatus("148");
            break;
        case "Vietnam":
            flag.innerHTML = '<img src="../icon/vietnam.png" alt="">'
            getCovidStatus("271");
            break;
        case "Philippines":
            flag.innerHTML = '<img src="../icon/philippines.png" alt="">'
            getCovidStatus("210");
            break;
        case "Thailand":
            flag.innerHTML = '<img src="../icon/thailand.png" alt="">'
            getCovidStatus("245");
            break;
        case "Singapore":
            flag.innerHTML = '<img src="../icon/singapore.png" alt="">'
            getCovidStatus("228");
            break;
        case "Malaysia":
            flag.innerHTML = '<img src="../icon/malaysia.png" alt="">'
            getCovidStatus("176");
            break;
        case "Laos":
            flag.innerHTML = '<img src="../icon/laos.png" alt="">'
            getCovidStatus("164");
            break;
        case "Cambodia":
            flag.innerHTML = '<img src="../icon/cambodia.png" alt="">'
            getCovidStatus("37");
            break;
        case "Timor-Leste":
            flag.innerHTML = '<img src="../icon/timor-leste.png" alt="">'
            getCovidStatus("246");
            break;
    }
}
function openPage(page){
    switch(page){
        case "symptoms":
            window.open('/GlobalClassroom_Covid19/partial/symptoms.html', "_self");
            break;
        case "statistics":
            window.open('/GlobalClassroom_Covid19/partial/statistics.html', "_self");
            break;
        case "prevention":
            window.open('/GlobalClassroom_Covid19/partial/prevention.html', "_self");
            break;
        case "treatment":
            window.open('/GlobalClassroom_Covid19/partial/treatment.html', "_self");
            break;
    }
}
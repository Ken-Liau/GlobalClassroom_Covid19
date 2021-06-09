var countrySelection = document.getElementById("country_selection");
var countryIcon = document.getElementById("img_icon");
var ctx = document.getElementById('myChart');
var myChart;

countrySelection.onchange = function(){
    var myCountry = countrySelection.value;
    updating(myCountry);
}

getData("malaysia");

function getData(country){
    var arrayDate = [];
    var arrayCases = [];
    var arrayRecovered = [];
    var arrayDeaths = [];
    var newDate = new Date();
    newDate.setDate(newDate.getDate() - 32);
    var dateBefore = newDate.toISOString().split('T')[0];
    for(var i = 30; i >= 0; i--){
        var date = new Date();
        date.setDate(date.getDate() - i);
        var dateString = date.toISOString().split('T')[0];
        arrayDate.push(dateString);
    }
    fetch('https://api.covid19api.com/live/country/'+country+'/status/confirmed/date/'+dateBefore+'T13:13:30Z')
    .then(function(res){
        return res.json();
    }).then(function(data){
        document.getElementById("total_cases").innerHTML = data[data.length - 1].Confirmed;
        document.getElementById("total_recovered").innerHTML = data[data.length - 1].Recovered;
        document.getElementById("total_death").innerHTML = data[data.length - 1].Deaths;
        for(var i = 0; i < data.length - 1; i++){
            arrayCases.push(data[i + 1].Confirmed - data[i].Confirmed);
            arrayRecovered.push(data[i + 1].Recovered - data[i].Recovered);
            arrayDeaths.push(data[i + 1].Deaths - data[i].Deaths);
        }
        document.getElementById("today_cases").innerHTML = "+"+arrayCases[arrayCases.length - 1];
        document.getElementById("today_recovered").innerHTML = "+"+arrayRecovered[arrayRecovered.length - 1];
        document.getElementById("today_death").innerHTML = "+"+arrayDeaths[arrayDeaths.length - 1];
        getChart(arrayDate, arrayCases, arrayRecovered, arrayDeaths);
    }).then(function(error){
        console.log(error);
    })
}
function getChart(date, cases, recover, death){
    Chart.defaults.font.size = 16;
    if(myChart){
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Cases',
                data: cases,
                fill: false,
                borderColor: "#FFF",
                backgroundColor: "#FFF",
                borderWidth: 1
            },
            {
                label: 'Recovered',
                data: recover,
                fill: false,
                borderColor: "#42E11A",
                backgroundColor: "#42E11A",
                borderWidth: 1
            },
            {
                label: 'Death',
                data: death,
                fill: false,
                borderColor: "#FC133D",
                backgroundColor: "#FC133D",
                borderWidth: 1
            }],
            labels: date
        },
        options: {
            responsive :true,
            maintainAspectRatio: false
        }
     });
}
function updating(country){
    switch(country){
        case "Indonesia":
            countryIcon.innerHTML = '<img src="../icon/indonesia.png" alt="">'
            getData("indonesia");
            break;
        case "Vietnam":
            countryIcon.innerHTML = '<img src="../icon/vietnam.png" alt="">'
            getData("vietnam");
            break;
        case "Philippines":
            countryIcon.innerHTML = '<img src="../icon/philippines.png" alt="">'
            getData("philippines");
            break;
        case "Thailand":
            countryIcon.innerHTML = '<img src="../icon/thailand.png" alt="">'
            getData("thailand");
            break;
        case "Singapore":
            countryIcon.innerHTML = '<img src="../icon/singapore.png" alt="">'
            getData("singapore");
            break;
        case "Malaysia":
            countryIcon.innerHTML = '<img src="../icon/malaysia.png" alt="">'
            getData("malaysia");
            break;
        case "Laos":
            countryIcon.innerHTML = '<img src="../icon/laos.png" alt="">'
            getData("laos");
            break;
        case "Cambodia":
            countryIcon.innerHTML = '<img src="../icon/cambodia.png" alt="">'
            getData("cambodia");
            break;
        case "Timor-Leste":
            countryIcon.innerHTML = '<img src="../icon/timor-leste.png" alt="">'
            getData("timor-leste");
            break;
    }
}

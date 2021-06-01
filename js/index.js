var sidemenu = document.getElementById('side-menu')
var openSide = document.getElementById('open-side')
var cancelSide = document.getElementById('cancel-side')

openSide.addEventListener('click', function(){
    cancelSide.style.display = 'block'
    openSide.style.display = 'none'
    sidemenu.style.display = 'flex'
})
cancelSide.addEventListener('click', function(){
    openSide.style.display = 'block'
    cancelSide.style.display = 'none'
    sidemenu.style.display = 'none'
})

document.getElementById('nav-home').addEventListener('mouseover', function(){
    hover(1)
})
document.getElementById('nav-home').addEventListener('mouseleave', function(){
    hoverLeave(1)
})
document.getElementById('nav-route').addEventListener('mouseover', function(){
    hover(2)
})
document.getElementById('nav-route').addEventListener('mouseleave', function(){
    hoverLeave(2)
})
document.getElementById('nav-mountain').addEventListener('mouseover', function(){
    hover(3)
})
document.getElementById('nav-mountain').addEventListener('mouseleave', function(){
    hoverLeave(3)
})
document.getElementById('nav-ancent').addEventListener('mouseover', function(){
    hover(4)
})
document.getElementById('nav-ancent').addEventListener('mouseleave', function(){
    hoverLeave(4)
})

function hover(num){
    switch(num){
        case 1:
            document.getElementById('bar-home').style.display = 'block'
            document.getElementById('con-home').style.marginTop = '5px'
            break
        case 2:
            document.getElementById('bar-route').style.display = 'block'
            document.getElementById('con-route').style.marginTop = '5px'
            break
        case 3:
            document.getElementById('bar-mountain').style.display = 'block'
            document.getElementById('con-mountain').style.marginTop = '5px'
            break
        case 4:
            document.getElementById('bar-ancent').style.display = 'block'
            document.getElementById('con-ancent').style.marginTop = '5px'
            break
    }
}
function hoverLeave(num){
    switch(num){
        case 1:
            document.getElementById('bar-home').style.display = 'none'
            document.getElementById('con-home').style.marginTop = '10px'
            break
        case 2:
            document.getElementById('bar-route').style.display = 'none'
            document.getElementById('con-route').style.marginTop = '10px'
            break
        case 3:
            document.getElementById('bar-mountain').style.display = 'none'
            document.getElementById('con-mountain').style.marginTop = '10px'
            break
        case 4:
            document.getElementById('bar-ancent').style.display = 'none'
            document.getElementById('con-ancent').style.marginTop = '10px'
            break
    }
}
getCovidStatus();
function getCovidStatus(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations').then(function(res){
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
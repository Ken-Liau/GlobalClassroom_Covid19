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

document.getElementById("logo").addEventListener("click", function(){
    openPage("home");
})

document.getElementById('nav_symptoms').addEventListener('mouseover', function(){
    hover(1);
})
document.getElementById('nav_symptoms').addEventListener('mouseleave', function(){
    hoverLeave(1);
})
document.getElementById('nav_symptoms').addEventListener('click', function(){
    openPage("symptoms");
})
document.getElementById('side_symptoms').addEventListener('click', function(){
    openPage("symptoms");
})

document.getElementById('nav_statistics').addEventListener('mouseover', function(){
    hover(2);
})
document.getElementById('nav_statistics').addEventListener('mouseleave', function(){
    hoverLeave(2);
})
document.getElementById('nav_statistics').addEventListener('click', function(){
    openPage("statistics");
})
document.getElementById('side_statistics').addEventListener('click', function(){
    openPage("statistics");
})

document.getElementById('nav_prevention').addEventListener('mouseover', function(){
    hover(3);
})
document.getElementById('nav_prevention').addEventListener('mouseleave', function(){
    hoverLeave(3);
})
document.getElementById('nav_prevention').addEventListener('click', function(){
    openPage("prevention");
})
document.getElementById('side_prevention').addEventListener('click', function(){
    openPage("prevention");
})

document.getElementById('nav_treatment').addEventListener('mouseover', function(){
    hover(4);
})
document.getElementById('nav_treatment').addEventListener('mouseleave', function(){
    hoverLeave(4);
})
document.getElementById('nav_treatment').addEventListener('click', function(){
    openPage("treatment");
})
document.getElementById('side_treatment').addEventListener('click', function(){
    openPage("treatment");
})

function hover(num){
    switch(num){
        case 1:
            document.getElementById('bar_symptoms').style.display = 'block'
            document.getElementById('con_symptoms').style.marginTop = '5px'
            break
        case 2:
            document.getElementById('bar_statistics').style.display = 'block'
            document.getElementById('con_statistics').style.marginTop = '5px'
            break
        case 3:
            document.getElementById('bar_prevention').style.display = 'block'
            document.getElementById('con_prevention').style.marginTop = '5px'
            break
        case 4:
            document.getElementById('bar_treatment').style.display = 'block'
            document.getElementById('con_treatment').style.marginTop = '5px'
            break
    }
}
function hoverLeave(num){
    switch(num){
        case 1:
            document.getElementById('bar_symptoms').style.display = 'none'
            document.getElementById('con_symptoms').style.marginTop = '10px'
            break
        case 2:
            document.getElementById('bar_statistics').style.display = 'none'
            document.getElementById('con_statistics').style.marginTop = '10px'
            break
        case 3:
            document.getElementById('bar_prevention').style.display = 'none'
            document.getElementById('con_prevention').style.marginTop = '10px'
            break
        case 4:
            document.getElementById('bar_treatment').style.display = 'none'
            document.getElementById('con_treatment').style.marginTop = '10px'
            break
    }
}
function openPage(page){
    switch(page){
        case "home":
            window.open('../', "_self");
            break;
        case "symptoms":
            window.open('../partial/symptoms.html', "_self");
            break;
        case "statistics":
            window.open('../partial/statistics.html', "_self");
            break;
        case "prevention":
            window.open('../partial/prevention.html', "_self");
            break;
        case "treatment":
            window.open('../partial/treatment.html', "_self");
            break;
    }
}
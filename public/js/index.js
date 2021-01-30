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
function home(){
    document.getElementById('main-index').style.display = 'block'
    document.getElementById('function-title1').style.display = 'none'
    document.getElementById('function-title2').style.display = 'none'
    document.getElementById('function-title3').style.display = 'none'
}
function mountain(){
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('function-title1').style.display = 'none'
    document.getElementById('function-title2').style.display = 'flex'
    document.getElementById('function-title3').style.display = 'none'
}
function route(){
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('function-title1').style.display = 'flex'
    document.getElementById('function-title2').style.display = 'none'
    document.getElementById('function-title3').style.display = 'none'
}
function ancient(){
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('function-title1').style.display = 'none'
    document.getElementById('function-title2').style.display = 'none'
    document.getElementById('function-title3').style.display = 'flex'
}
document.getElementById('nav-home').addEventListener('click', function(){
    home()
})
document.getElementById('nav-mountain').addEventListener('click', function(){
    mountain()
})
document.getElementById('nav-route').addEventListener('click', function(){
    route()
})
document.getElementById('nav-ancent').addEventListener('click', function(){
    ancient()
})
document.getElementById('logo').addEventListener('click', function(){
    home()
})
document.getElementById('sec-mountain').addEventListener('click', function(){
    mountain()
})
document.getElementById('sec-route').addEventListener('click', function(){
    route()
})
document.getElementById('sec-ancient').addEventListener('click', function(){
    ancient()
})

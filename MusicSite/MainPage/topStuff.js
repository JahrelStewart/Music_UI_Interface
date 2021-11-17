var logo = document.getElementById('logo');
var search = document.getElementById('searchbar');
var searchText = document.getElementById('search-text');
var dropSearch = document.getElementById('search-area');
var dropLast = document.getElementsByClassName('drop-list')[(document.getElementsByClassName('drop-list').length) - 1];
var dropAmount = document.getElementsByClassName('drop-list').length;
var allDrops = document.getElementsByClassName('drop-list');
var appearRecent = document.getElementById('recent');
var neuBut = document.querySelectorAll('.top-buts');
var neuButContent = document.getElementById('account');
var tops = document.getElementsByClassName('top')[3];
var placetext = "Search for what you want";
var typeIncrement = 0;
var appearIncrement = 0;
var decrement = dropAmount - 1;
var speed = 100;
var dropSpeed = 50;
var last = $(dropLast).offset().top;   
var clicks = true;


//-----------------------------------------------------------------

// console.log(distance + "px"); ---> debugger

search.addEventListener('input', () => {
    if (search.value == '')
    {
        searchText.style.opacity = 0;
    }
    else
    {
        searchText.style.opacity = 0.6;
    }
});

search.addEventListener('focus', () => {
    dropSearch.style.height = last + 22 + "px";
    dropSearch.style.boxShadow = "5px 5px 5px #1b1b2fbe, -5px -5px 5px #1b1b2fbe";
});

document.addEventListener("mousedown", bardAdjust);

function bardAdjust(e)
{
    if (e.target !== dropSearch && !dropSearch.contains(e.target)) {
        dropSearch.style.height = "35px";
        dropSearch.style.boxShadow = "none";
    }
}

search.addEventListener('click', () => {
    typeout();
});

neuBut.forEach((element) => 
{
    element.addEventListener('mouseover', cursorSmall); 
    
    element.addEventListener('mouseleave', cursorNorm); 
});

neuButContent.addEventListener('click', () =>
{
    if(clicks == true)
    {
        neuButContent.style.filter = "invert(32%) sepia(99%) saturate(803%) hue-rotate(205deg) brightness(107%) contrast(108%)";
        clicks = false;
    }
    else
    {
        neuButContent.style.filter = "invert(100%) sepia(48%) saturate(1342%) hue-rotate(289deg) brightness(103%) contrast(106%)";
        clicks = true;
    }
    
});

function typeout() 
{
    if (typeIncrement < placetext.length) {
        msg = search.getAttribute('placeholder') + placetext.charAt(typeIncrement);
        search.setAttribute('placeholder', msg);
        typeIncrement++;
        setTimeout(typeout, speed);
    }
}

function cursorSmall()
{
    mouse.style.transform = "scale(0.5)";
}

function cursorNorm()
{
    mouse.style.transform = "scale(1)";
}

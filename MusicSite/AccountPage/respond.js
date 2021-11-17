var searches = document.querySelector('.search-area');
var searchSec = document.querySelectorAll('.top')[1];
var logos = document.querySelectorAll('.top')[0];
var toppings = document.querySelectorAll('.top')[2];
var searchSecOne = document.querySelectorAll('.searching')[1];
var searchSecTwo = document.querySelectorAll('.searching')[2];
var searchSecText = document.querySelector('#search-text');
var searchSecArea = document.querySelector('#search-area');
var optionList = document.querySelector('.butDrops');
var accbut = document.querySelector('#account')
var accGoto = false;
var accCliked = false;

accbut.addEventListener('click', ()=>
{   
    if(accCliked == false) 
    {
        $(".butDrops").stop(true, false);
        optionList.style.opacity = "0";

        if(accGoto == true)
        {
            optionList.style.display = "flex"; 
            $('.butDrops').fadeTo("fast", 1);
        }
        else
        {
            $('.butDrops').fadeTo("fast", 0);
            optionList.style.display = "none";            
        }  
        
        accCliked = true;
    }
    else
    {
        optionList.style.display = "none";
        accCliked = false;
    }  

});

optionList.style.display = "none";

var width1200 = window.matchMedia("(max-width: 1200px)");
responsive1200(width1200);
width1200.addListener(responsive1200);

var width470 = window.matchMedia("(max-width: 470px)");
responsive470(width470);
width470.addListener(responsive470);

function responsive1200(x) {
    if(x.matches) 
    {   
        if(accCliked == true)  
        {
            optionList.style.display = "flex";
        }
          
        accGoto = true;
    }
    else
    {
        optionList.style.display = "none";
        accGoto = false;
    }

}

function responsive470(x) {
    if(x.matches) 
    {
        moveClip = 340;
    }
    else
    {
        moveClip = 405;
    }

}

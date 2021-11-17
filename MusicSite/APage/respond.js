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

var mqls = [ 
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 750px)"),
    window.matchMedia("(max-width: 880px)"),
    window.matchMedia("(max-width: 1150px)"),
    window.matchMedia("(max-width: 1300px)"),
]

function mediaqueryresponse(mql){

    if(mqls[0].matches)
    {  
        amtColumn = 1;
        viewFalse = 0;
        viewUpY = 300;
        viewFalseZoom = 730;
        viewTrue = 1300;
        moveViewText = -120;
        isMoveView = "center";
    } 
    else if(mqls[1].matches)
    { 
        amtColumn = 2;
        viewFalse = 0;
        viewUpY = 300;
        viewFalseZoom = 730;
        viewTrue = 1200;
        moveViewText = -150;
        isMoveView = "center";
    }
    else if(mqls[2].matches)
    {   
        amtColumn = 2;
        viewFalse = 200; 
        viewUpY = 0;
        viewFalseZoom = 450;
        viewTrue = 1200;      
        moveViewText = -20;
        isMoveView = "end";
    }
    else if(mqls[3].matches)
    { 
        amtColumn = 3;
        viewFalse = 130;
        viewUpY = 0;
        viewFalseZoom = 345;
        viewTrue = 1200;
        moveViewText = 40;
        isMoveView = "end";
    }
    else if(mqls[4].matches)
    { 
        amtColumn = 3;
        viewTrue = 550;
        viewFalse = 0;
        viewUpY = 0;
        viewFalseZoom = 345;
        moveViewText = 0;
        isMoveView = "end";
    }
    else
    {
        amtColumn = 4;
        viewTrue = 0;
        viewFalse = 0;
        viewUpY = 0;
        viewFalseZoom = 345;
        moveViewText = -150;
        isMoveView = "end";
    }
    
    if (viewShift == true) 
    {
        layout(amtColumn, 0.3);
        itemText.style.transform = "translateX(" + moveViewText + "px)";
        camera.position.x = 1000 - viewTrue;
    }
    else
    {
        var e = findElm(item, amtColumn);
        group.position.x = e.x - objArr[item].position.x;
        group.position.y = e.y - objArr[item].position.y;

        camera.position.x = e.x - viewFalse;
        camera.position.y = e.y - viewUpY;
        camera.position.z = viewFalseZoom;

        document.querySelector('#itemTextContainer').style.justifyItems = isMoveView;
    }
    
    scrollHeights();
}

for (var i=0; i<mqls.length; i++){ 
    mediaqueryresponse(mqls[i]);
    mqls[i].addListener(mediaqueryresponse);
}

var width1200 = window.matchMedia("(max-width: 1200px)");
responsive1200(width1200);
width1200.addListener(responsive1200);


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


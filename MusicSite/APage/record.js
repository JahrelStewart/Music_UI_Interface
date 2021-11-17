var recordSpin = document.querySelector('#spinning');
var record = document.querySelector('.record');
var card = document.querySelector('.card');
var expand = document.querySelector('#grow');
var expand2 = document.querySelector('#grow2');
var except = document.querySelectorAll('.container-fluid > div:not(#cards):not(.trackContainer):not(#musicGuide)');
var canClose = false;

cont.addEventListener('mousedown', getMouseDirection);
window.addEventListener('mouseup', closeUp);

function getMouseDirection(e) 
{
    if(e.button == 0)
    {
        if(e.target === handle || handle.contains(e.target))
        {
            return;
        }

        moveAcross.pause();
        moveAcross2.pause();
        window.addEventListener('mousemove', seeker);
    }

    e.preventDefault();
}

function seeker(e)
{    
    // document.querySelector('#bodies').style.zIndex = 2;
    // document.querySelector('#heads').style.zIndex = 1; *

    moveAcross.progress(e.pageX/400);
    moveAcross2.progress(e.pageX/400); 

    if(e.buttons == 0)
    {
        moveAcross.paused(false);
        moveAcross2.paused(false);

        if(e.pageX > 95)  
        {
             if(canClose == false)
            {        
                canClose = true;
                moveAcross.play();
                moveAcross2.play();   
            }
        }
        else if(Math.max(10, e.pageX) <= 95)
        {
            canClose = false;
            moveAcross.reverse();
            moveAcross2.reverse();
        }

        window.removeEventListener('mousemove', seeker);
    
    }       
}

function closeUp(e)
{
    cont.removeEventListener('mousedown', getMouseDirection);

    if(canClose == true)
    {
        if((e.target === card || card.contains(e.target)) || (e.target === cont || cont.contains(e.target)))
        {
            return;
        }

        moveAcross.reverse()
        moveAcross2.reverse();
        canClose = false;
        
    }   

    cont.addEventListener('mousedown', getMouseDirection);
}

var moveAcross = gsap.timeline({paused: true, 
onUpdate:function()
{
    if(moveAcross.progress() >= 0.2)
    {
        // document.querySelector('#bodies').style.zIndex = 2;
        // document.querySelector('#heads').style.zIndex = 2;
    }

    // for (let i= 0; i < except.length; i++) 
    // {
    //     except[i].style.filter = "blur(" + (moveAcross.progress() * 2) + "px)";
    // }

}});

moveAcross.to("#grow", {
    width: moveClip, 
    ease: "expo.in"
});
moveAcross.to("#grow", {
    height: 278, 
    ease: "expo.out"
});

var moveAcross2 = gsap.timeline(
{
    paused: true,
    onUpdate: function()
    {
        if((moveAcross2.reversed() == true) && (moveAcross2.progress() < 0.1))
        {
            // document.querySelector('#bodies').style.zIndex = 4;
            // document.querySelector('#heads').style.zIndex = 5;
        }
    }
});

moveAcross2.to("#grow2", {
    width: moveClip, 
    ease: "expo.in"
});
moveAcross2.to("#grow2", {
    y: -258,
    height: 278, 
    ease: "expo.out"
});

// var moveAcrossClip = gsap.timeline({paused: true});
// moveAcrossClip.to("#cardInner",
// {
//     width: moveClip - 5,
//     ease: "expo.in"
// })
const windowed = document.querySelector('html');
const text = document.getElementById('thePath');
const block = document.querySelector('#block');
const inblock = document.querySelector('#block').childNodes;
const title = document.querySelector('#logo');
const fragment = document.createDocumentFragment();
const musicCtrl = document.querySelector('.slideContainer');
const mouse = document.querySelector('#cursors');
var reverse = false;
var pieces = 6;
var minheight = 20;
var maxHeight = 30;
var play = false;

// ------------------------------------------------------------------------

window.addEventListener('mousemove', cursor);

function cursor(e)
{
    mouse.style.top = e.pageY - $("#cursors").height()/2 + 'px';
    mouse.style.left = e.pageX - $("#cursors").width()/2 + 'px';
}

// ------------------------------------------------------------------------

var blockanimate = anime.timeline({
    targets: "#block div",
    loop: false,
    direction: 'alternate',
    duration: ()=> { return anime.random(100, 200)}, 
    easing: 'easeInOutSine',
})

for (let i = 0; i < pieces; i++) {
    var adiv = document.createElement('div');
    adiv.style.height = getRndInteger(minheight, maxHeight) + "px";
    adiv.id = "inblocks-" + i;
    fragment.appendChild(adiv);
}

block.appendChild(fragment);

$(document).ready(function(){
    animations();
});

function animations()
{
    blockanimate = anime.timeline({
        targets: "#block div",
        loop: false,
        direction: 'alternate',
        duration: ()=> { return anime.random(100, 200)}, 
        easing: 'easeInOutSine',
    })
    .add({
        height: ()=> { return anime.random(minheight, maxHeight)},
    });

    blockanimate.complete = function() {animations();};
}
    
// --------------------------------------------------------------------

var blockMove = anime({
    loop: false,
    targets: '#block div',
    easing: 'easeInOutSine',
    position: "absolute",
    rotate: '90deg',
    left: "67px",
    top: "31px",
    height: 50,
    easing: 'easeOutCirc',
    duration: 170,
    update: function(prog) 
    {
        if(prog.progress < 5 && reverse == true)
        {
            if(play == true)
            {
                blockanimate.pause();
            }
            else
            {
                blockanimate.play();
            }     
        }
        else if(prog.progress >= 5)
        {
            blockanimate.pause();
        }
    },
});

blockMove.pause();

title.addEventListener('mouseenter', ()=>
{
    cursorSmall();

    if(reverse == true)
    {
        reverse = false;
        blockMove.reverse();
    }

    minheight = 30; 
    blockMove.play();
});

title.addEventListener('mouseleave', ()=>
{
    cursorNorm();

    if(reverse == false)
    {
        reverse = true;
        blockMove.reverse();      
    }
    
    minheight = 20;
    blockMove.play();
});

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

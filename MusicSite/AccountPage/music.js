const slider = document.querySelector('.sliderBar .bar');
const handle = document.querySelector('.slider');
const musicGuide = document.querySelector('#musicGuide');
const pause = document.querySelector('#play');
const updown = document.querySelector('#updown');
const thumb = document.querySelector('.thumby');
const blackhole = document.querySelector('.blackhole');
const cont = document.querySelector('.trackContainer');
var saveCursor;
var isplay = false;
var playAgain;

slider.style.height = handle.value + "%";
// var thumbPos = (handle.value/100) * 18;
// thumb.style.top = slider.offsetTop - (thumb.offsetHeight - thumbPos)  + "px";

function playMusic()
{
    if(play == false)
    {
        handle.value++
        slider.style.height = handle.value + "%";

        // thumbPos = (handle.value/100) * 18;
        // thumb.style.top = slider.offsetTop - (thumb.offsetHeight - thumbPos) + "px";
    }

    if(handle.value >= 100)
    {
        handle.value = 0;
    }
}

var timer = setInterval(playMusic, 1000);

//7
function playCursor(e)
{
    musicGuide.style.top = e.pageY - cont.getBoundingClientRect().top + 135 + 'px';
}

musicCtrl.addEventListener('click', (event) =>
{
    var target = event.target;
    if (target === handle || handle.contains(target)) { 
        return;
    }

    if(play == false)
    {
        blockanimate.pause();
        play = true;
        // listItems.get(currPlaying).isPlay = "url(./pic/pausing.svg)";
        // listItems.get(currPlaying).playBorder = "none";
    }
    else
    {
        blockanimate.play();
        play = false;
        // listItems.get(currPlaying).isPlay = "url(./pic/play.svg)"; 
        // listItems.get(currPlaying).playBorder = "2px solid #4d6bff";
    }

    // playing.style.backgroundImage = listItems.get(item).isPlay;
    // playing.style.border = listItems.get(item).playBorder;
    
});

musicCtrl.addEventListener('mouseover', () =>
{
    mouse.style.transform = "scale(0.5)";
    if(isplay != true)
    {
        pause.style.opacity = "1";
    }
    window.addEventListener('mousemove', playCursor);
    
});

musicCtrl.addEventListener('mouseleave', () =>
{
    mouse.style.transform = "scale(1)";
    pause.style.opacity = "0";
});

handle.addEventListener('input', () =>
{
    slider.style.height = handle.value + "%";
    // thumbPos = (handle.value/100) * 18;
    // thumb.style.top = slider.offsetTop - (thumb.offsetHeight - thumbPos) + "px";
});

handle.addEventListener('mousedown', playGuide);
handle.addEventListener('mouseover',playPic);

handle.addEventListener('mouseup', playGuide2);
handle.addEventListener('mouseleave',picPlay);

function playGuide()
{
    blockanimate.pause();
    playAgain = play;
    play = true;

    isplay = true;
    pause.style.opacity = 0;
    updown.style.opacity = 1;
}

function playGuide2()
{
    if(playAgain == true)
    {
        play = true;
        blockanimate.pause();
    }
    else
    {
        play = false;
        blockanimate.play();
    }  
    
    isplay = true;
    pause.style.opacity = 0;
    updown.style.opacity = 1;
}

function playPic()
{
    isplay = true;
    pause.style.opacity = 0;
    updown.style.opacity = 1;
}

function picPlay()
{
    isplay = false
    pause.style.opacity = 1;
    updown.style.opacity = 0;
}

function tracker(e)
{
    thumb.style.top = e.pageY  - musicCtrl.offsetTop - thumb.offsetHeight/2 + "px";
    saveCursor = e.pageY  - musicCtrl.offsetTop;
    handle.value = 100 - ((saveCursor/musicCtrl.offsetHeight) * 100);
    slider.style.height = handle.value + "%";
}

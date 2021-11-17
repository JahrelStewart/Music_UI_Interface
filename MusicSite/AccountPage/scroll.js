var scrollThumb = document.querySelector('.scrollThumb');
var scrollSect = document.querySelector('.bodyScroll');
var bodyThree = document.querySelector('.bodyCenter');
var bodyThreeContent = document.querySelector('.bodyCenter').childNodes;
var lastBox = document.querySelector('.beatStats');
var boxing = document.querySelector('.charts');
// var moveExcept = document.querySelectorAll('.bodyCenter > div:not(#cards):not(.trackContainer):not(#musicGuide)');
var offsets = 25;
var contentHeight = boxing.offsetTop + lastBox.offsetTop + lastBox.offsetHeight;
var barHeight = ((contentHeight - scrollSect.offsetHeight)/ contentHeight) * 100;
var clickPos;
var onthumb = false;
var equation = 0.0;

scrollThumb.style.height = 100 - Math.round(barHeight) + "%";

window.addEventListener('resize', ()=>
{
    contentHeight = boxing.offsetTop + lastBox.offsetTop + lastBox.offsetHeight;
    var barHeight = ((contentHeight - scrollSect.offsetHeight)/ contentHeight) * 100;
    scrollThumb.style.height = 100 - Math.round(barHeight) + "%";
});

bodyThree.style.transform = "translateY(0px)";

scrollThumb.addEventListener('mouseover', cursorSmall);
scrollThumb.addEventListener('mouseleave', cursorNorm);

scrollThumb.addEventListener('mousedown', first);
window.addEventListener('mousemove', second);
window.addEventListener('mouseup', third);

function first(e)
{
    onthumb = true;
    clickPos = ((e.pageY - (scrollSect.getBoundingClientRect().top + $('.scrollThumb').position().top))/scrollThumb.offsetHeight);
}

function second(e)
{
        if(onthumb == true)
        {
            equation = e.pageY - (scrollSect.getBoundingClientRect().top + scrollThumb.offsetTop) - (scrollThumb.offsetHeight * clickPos);

            if(equation < 0) 
            {
                equation = 0;
            }
            else if(equation > (scrollSect.offsetHeight - scrollThumb.offsetHeight))
            {
                equation = (scrollSect.offsetHeight - scrollThumb.offsetHeight);
            }

            scrollThumb.style.transform = "translateY(" + equation + "px)";
            bodyThree.style.transform = "translateY(" + (-(THREE.MathUtils.mapLinear(equation, 0, scrollSect.offsetHeight - scrollThumb.offsetHeight, 0, (contentHeight - scrollSect.offsetHeight + offsets)))) + "px)";

        }  
}

function third()
{
    if(onthumb == true)
    {
       onthumb = false; 
    }
}

function scrollz(event)
{
    event.preventDefault();
    var y = event.deltaY;
    
    equation += y * 0.3; 
    
    if(equation < 0) 
    {
        equation = 0;
    }
    else if(equation > (scrollSect.offsetHeight - scrollThumb.offsetHeight))
    {
        equation = (scrollSect.offsetHeight - scrollThumb.offsetHeight);
    }

    scrollAnime = gsap.timeline({paused: false, ease: "circ.out", duration: 0.4,});

    scrollAnime.to(scrollThumb.style,
    {
        transform: "translateY(" + equation + "px)",
        ease: "circ.out", 
        duration: 0.4,
    }, '-=0.4');

    scrollAnime.to(bodyThree.style,
    {
        transform: "translateY(" + (-(THREE.MathUtils.mapLinear(equation, 0, scrollSect.offsetHeight - scrollThumb.offsetHeight, 0, (contentHeight - scrollSect.offsetHeight + offsets)))) + "px)",
    }, '-=0.4');
          
}

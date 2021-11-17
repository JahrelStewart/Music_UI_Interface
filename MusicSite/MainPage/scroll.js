var scrollThumb = document.querySelector('.scrollThumb');
var scrollSect = document.querySelector('.bodyScroll');
var itemWorld = new THREE.Vector3(0, 0, 0);
var elmt;
var onthumb = false;
var clickPos;
var equation = 0.0;
var scrollAnime;

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
    if(cantScroll == false)
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
            camera.position.y = -(THREE.MathUtils.mapLinear(equation, -1, scrollSect.offsetHeight - scrollThumb.offsetHeight, 637, mapLast));
        }  
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
    // event.preventDefault();
    var y = event.deltaY;
    
    if(mover >= 0.50)
    {
        equation += y * 0.3; 
        
        if(viewShift == false)
        {
            (y > 0) ? item += 1 : item -= 1;

            if(item > itemAmt - 1)
            {
                item = itemAmt - 1;
            }
            else if(item < 0)
            {
                item = 0;
            }

            back(item);
            innerText(item);
            
            elmt = findElm(item, amtColumn);
            
            var chng = {varX: group.position.x, varY: group.position.y};
            gsap.to(chng,
            {
                varX: elmt.x - objArr[item].position.x,
                varY: elmt.y - objArr[item].position.y,
                onUpdate: function()
                {
                    group.position.x = chng.varX;
                    group.position.y = chng.varY;
                },
                ease: "back.out(0.7)",
                duration: 0.3,
            });
            
            upAnimates(item, "back.out(0.7)", 0.3);
            equation = (THREE.MathUtils.mapLinear(item, 0, itemAmt - 1, 0, scrollSect.offsetHeight - scrollThumb.offsetHeight));
        }  

        if(cantScroll == false)
        {
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

            if(viewShift == true)
            {
                scrollAnime.to(camera.position,
                {
                    y: -(THREE.MathUtils.mapLinear(equation, -1, scrollSect.offsetHeight - scrollThumb.offsetHeight, 637, mapLast)),
                }, '-=0.4');
            }        
        }
        
    }
}

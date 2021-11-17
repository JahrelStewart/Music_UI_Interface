var circ = document.querySelector('#circ');
var heads = document.querySelectorAll('.heading');
var circCicked = 1;
var moveClip = 405;

circ.setAttribute('cx', heads[circCicked].offsetLeft + heads[circCicked].offsetWidth/2);

window.addEventListener('resize', ()=>
{
  circ.setAttribute('cx', heads[circCicked].offsetLeft + heads[circCicked].offsetWidth/2);
});

for (let i = 1; i < heads.length; i++) {
    heads[i].addEventListener('click', (e) =>
    {
        goTo(e, i);
        circCicked = i;
    });

    heads[i].addEventListener('mouseover', cursorSmall);

    heads[i].addEventListener('mouseleave', cursorNorm); 
}

function goTo(e, which)
{
    var circMove = gsap.to("#circ",
    {
        cx: e.target.offsetLeft + e.target.offsetWidth/2,
        duration: 0.4,
        paused: false,
        ease: "elastic.out(1, 0.7)",
    });
    
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });

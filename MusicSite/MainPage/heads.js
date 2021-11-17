var circ = document.querySelector('#circ');
var heads = document.querySelectorAll('.heading');
var sideText = document.querySelector('.bodyText .text');

var item = 0;
var itmArr = [];
var objArr = [];
var amtColumn = 4;
var viewFalse = 0;
var viewTrue = 0;
var moveViewText = -150;
var isMoveView = "end";
var viewFalseZoom = 345;
var viewUpY = 0;
var moveClip = 405;
var viewShift = false;
var bodyThree = document.querySelector('.bodyCenter');
var group = new THREE.Group();
var camera = new THREE.PerspectiveCamera(80, bodyThree.offsetWidth/bodyThree.offsetHeight, 1, 10000);
var itemAmt = 24;
const xSpace = 1000;
const offset = 1100;
var lastPos;
var mapLast;

for (let i = 0; i < itemAmt; i++) {    
    var itm = new items(i);
    var objItem = new THREE.CSS3DObject(itm.item); 
    objArr.push(objItem);
    itmArr.push(itm);
  }
  
  function scrollHeights()
  {
      var mark = 1939;
      lastPos = -(findElm(itemAmt - 1, amtColumn).y - 455);
      var scrollDiffPercent = ((lastPos - mark)/ lastPos) * 100;
      mapLast = lastPos - offset;
  
      if(lastPos > mark)
      {
          scrollThumb.style.height = 100 - Math.round(scrollDiffPercent) + "%";
      }
      else
      {
          scrollThumb.style.height =  "100%";
          cantScroll = true;
          mapLast = 637;
      }
  }
  
  function layout(lay, due)
  {
      xBreaker = 0;
      yBreaker = 0;
      var ex = findElm(item, amtColumn).x;
  
      for (let z = 0; z < objArr.length; z++) 
      {   
          
          if ((z % lay == 0) && (z > 0)) 
          {
              xBreaker = 0;
              yBreaker++;
          }
  
          if(viewShift == true)
          {
              gsap.to(objArr[z].position,
              {
                  x: (xBreaker * 500) - group.position.x,
                  y: (yBreaker * -600) - group.position.y,
                  duration: due,
                  ease: 'back.out(0.8)',
              });
          }
          else
          {
              var diff;
              if(z < item)
              {
                  diff = item - z;
                  xBreaker = (ex - group.position.x) + (diff * -xSpace);
              }
              else
              {
                  diff = z - item;
                  xBreaker = (ex - group.position.x) + (diff * xSpace);
              }
  
              gsap.to(objArr[z].position,
              {
                  x: xBreaker,
                  y: objArr[item].position.y,
                  duration: due,
                  ease: 'back.out(0.8)',
              });
          }
          
          xBreaker++;
      }
  }
  
  function upAnimates(item, easaz, due)
  {
      elmts = findElm(item, amtColumn);
  
      var upAnimate = gsap.timeline({paused: false, onUpdate: function()
          {
              mover = upAnimate.progress();
          }
      });
      
      upAnimate.to(camera.position,
      {
          x: elmts.x - viewFalse,
          y: elmts.y - viewUpY,
          z: viewFalseZoom,
          duration: due,
          ease: easaz,
      });
      // upAnimate.to(camera.rotation,
      // {
      //     y: -0.10472,
      // }, "-=0.3");
  }
  
  function findElm(pos, amtColumn)
  {
      var theX; 
      var theY;
  
      theX = xSpace * (pos % amtColumn);
  
      if (pos < amtColumn) 
      {
          theY = 0;
      }
      else
      {
          theY = -600 * Math.trunc(pos / amtColumn);
      }
  
      return {
          x: theX,
          y: theY, 
      };
  }

circ.setAttribute('cx', heads[1].offsetLeft + heads[1].offsetWidth/2);

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

$(document).ready(function(){
    animateCSS('.bodyText .text', 'fadeInRight');
    sideText.style.setProperty('--animate-duration', '0.5s');
});

for (let i = 1; i < heads.length; i++) {
    heads[i].addEventListener('click', (e) =>
    {
        goTo(e, i);
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
    
    switch (which) {
        case 1:
            sideText.innerHTML = heads[1].innerHTML
            break;
        case 2:
            sideText.innerHTML = heads[2].innerHTML;
            break;
        case 3:
            sideText.innerHTML = heads[3].innerHTML;
            break; 
    }

    animateCSS('.bodyText .text', 'fadeInRight');
    sideText.style.setProperty('--animate-duration', '0.5s');
}




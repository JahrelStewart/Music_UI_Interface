var controls;
// var itemAmt = 24;
// var objArr = [];
var mover = 1;
var xBreaker = 0;
var yBreaker = 0;
// var group = new THREE.Group();
var cantClick = false;
var expansion;
var opaque;
var cantScroll = false;

// function scrollHeights()

scrollHeights();

innerText(item);
back(item);

var scene = new THREE.Scene();

for(var objs of objArr)
{   
    group.attach(objs);
}

scene.attach(group);

layout(itemAmt, 0);

camera.position.set(-viewFalse, -viewUpY, viewFalseZoom);
// camera.rotateY(-0.10472);

var HTMLrenderer = new THREE.CSS3DRenderer({antialias: true});
HTMLrenderer.setSize(bodyThree.offsetWidth, bodyThree.offsetHeight);
HTMLrenderer.domElement.style.position = "absolute";
bodyThree.appendChild(HTMLrenderer.domElement);

window.addEventListener('resize', () => 
{
    HTMLrenderer.setSize(bodyThree.offsetWidth, bodyThree.offsetHeight);
    camera.aspect = bodyThree.offsetWidth / bodyThree.offsetHeight;
    camera.updateProjectionMatrix();
});

function resizeRendererToDisplaySize(renderer) 
{
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
}

animate();  

function animate()
{
    render();
    circ.setAttribute('cx', heads[1].offsetLeft + heads[1].offsetWidth/2); 
    camera.updateProjectionMatrix();
    requestAnimationFrame(animate);
}

function render()
{
    // if (resizeRendererToDisplaySize(HTMLrenderer)) 
    // {
    //     const canvas = HTMLrenderer.domElement;
    //     camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //     camera.updateProjectionMatrix();
    // } 

    HTMLrenderer.render(scene, camera);       
}

scrollThumb.addEventListener('mousedown', down);

function down()
{
    viewShift = true;

    if(cantClick == false)
    {
        cantClick = true;
        layout(amtColumn, 0.3);
        itemText.style.transform = "translateX(" + moveViewText + "px)";
        document.querySelector('#itemTextContainer').style.justifyItems = "end";
        scrollHeights();
        rmbr = -1;

        $(".lineFive").fadeTo("fast", 0);
        $(".lineSix").fadeTo("fast", 0);
        $(".playing").fadeTo("fast", 0);

        var downAnimate = gsap.timeline({paused: false});

        downAnimate.to(camera.rotation,
        {
            y: 0,
        }); 
        downAnimate.to(camera.position,
        {
            x: 1000 - viewTrue,
            y: -(THREE.MathUtils.mapLinear(equation, -1, scrollSect.offsetHeight - scrollThumb.offsetHeight, 637, mapLast)),
            z: 1345,
            duration: 0.3,
            ease: "back.out(0.8)",
        }, "-=0.5");
        
        window.addEventListener('mousedown', (e) =>
        {
            if((e.target === (bodyThree) || bodyThree.contains(e.target)) || e.target === (scrollSect) || scrollSect.contains(e.target))
            {
                return;
            }
            if(viewShift == true)
            {
                $(".lineFive").fadeTo("fast", 1);
                $(".lineSix").fadeTo("fast", 1);
                $(".playing").fadeTo("fast", 1);
                document.querySelector('#itemTextContainer').style.justifyItems = isMoveView;
                
                var shift = {var: equation};
                viewShift = false;
                cantClick = false;

                equation = (THREE.MathUtils.mapLinear(item, 0, itemAmt - 1, 0, scrollSect.offsetHeight - scrollThumb.offsetHeight));

                gsap.to(shift,
                {
                    var: equation,
                    onUpdate: function()
                    {
                        scrollThumb.style.transform = "translateY(" + shift.var + "px)";
                    },
                    ease: "circ.out",
                    duration: 0.5,
                });

                layout(itemAmt, 0);
                upAnimates(item, "power.out", 0.3);
                back(item);
                innerText(item);
                itemText.style.transform = "translateX(0px)";
            }   
        });
    }  
}

function expand(amt, i, easaz, due)
{
    expansion = gsap.to(objArr[i].scale, 
    {
        x: amt,
        y: amt,
        z: amt,
        duration: due,
        ease: easaz,   
    });
}
function opacity(amt, i)
{
    for (let z = 0; z < itemAmt; z++) 
    {
        if(z == i) 
        {
            continue;
        }
        else
        {
            opaque = gsap.to(document.querySelector('#item-' + z), 
            {
                css: {opacity: amt},
                duration: 0.2,
                ease: "linear",   
            });
        }
    }
}

// function findElm(pos)
// {
//     var theX; 
//     var theY;

//     theX = xSpace * (pos % amtColumn);

//     if (pos < amtColumn) 
//     {
//         theY = 0;
//     }
//     else
//     {
//         theY = -600 * Math.trunc(pos / amtColumn);
//     }

//     return {
//         x: theX,
//         y: theY, 
//     };
// }

//____________________________________________________________________
//things I might use:

// var geometry = new THREE.PlaneGeometry(7.5, 3, 2);
// var material = new THREE.MeshBasicMaterial({color: "#4A4E69", side: THREE.DoubleSide});
// var plane = new THREE.Mesh(geometry, material);
// scene.add(plane);

// item.appendChild(itemFront);

    // controls.mouseButtons = 
    // {
    //     LEFT: THREE.MOUSE.LEFT,
    //     MIDDLE: THREE.MOUSE.MIDDLE,
    //     RIGHT: THREE.MOUSE.RIGHT
    // };  

// setTimeout(function()
    // {
    //     var vFOV = 1.39626
    //     var height = 2 * Math.tan( vFOV / 2 ) * 1345;
    //     console.log(Math.round(height));
    // }, 500);

// gsap.to(start,
// {
//     var: equation,
//     onUpdate: function()
//     {
    
//     },
//     ease: "circ.out",
//     duration: 1,
// });

//(-equation * 5) - 637;
// camera.position.y = THREE.MathUtils.mapLinear(equation, -1, scrollSect.offsetHeight - scrollThumb.offsetHeight + 1, 637, lastPos - 1100);
// var start = { var: equation };

// function normalizeWheelDelta(e){
//     if(e.detail){
//         if(e.wheelDelta)
//             return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1);
//         else
//             return -e.detail/3;
//     }else
//         return -e.wheelDelta/120;
// }

                // #item
                //     position: absolute
                //     align-self: center
                //     display: grid
                //     grid-template-columns: 1fr 1fr 1fr 1fr 1fr
                //     grid-column-gap: 10%
                //     grid-row-gap: 15%
                //     justify-content: flex-start
                //     width: 100%
                //     height: auto
                //     left: 28%

                //     #items
                //         position: relative
                //         min-width: 370px
                //         height: 455px
                //         border-radius: 50px
                //         background-color: #4A4E69

                // var divs = document.createElement('div');
    // divs.className = "item";
    // divs.id = "item-" + i;
    


    // divs.style.backgroundRepeat = "no-repeat";
    // divs.style.backgroundPosition = "center";
    // divs.style.backgroundSize = "cover";

    // divs.addEventListener('mouseover', () =>
    // {
    //     if(viewShift == true)
    //     {
    //         expand(1.4, i, "expo.out", 0.5);
    //         opacity(0.3, i);
    //     }  
    // });

    // divs.addEventListener('mouseout', () =>
    // {
    //     if(viewShift == true)
    //     {
    //         expand(1, i, "expo.out", 0.5);
    //         opacity(1, i);
    //     }  
    // });
    
    // divs.addEventListener('click', () =>
    // {
    //     if(viewShift == true)
    //     {   
    //         var shift = {var: equation};

    //         cantClick = false;
    //         expansion.paused(true);
    //         opaque.paused(true);
    //         viewShift = false;
    //         item = i;
    //         equation = (THREE.MathUtils.mapLinear(item, 0, itemAmt - 1, 0, scrollSect.offsetHeight - scrollThumb.offsetHeight));

    //         gsap.to(shift,
    //         {
    //             var: equation,
    //             onUpdate: function()
    //             {
    //                 scrollThumb.style.transform = "translateY(" + shift.var + "px)";
    //             },
    //             ease: "circ.out",
    //             duration: 0.5,
    //         });

    //         expand(1, i, "back.out(0.5)", 0.2)
    //         opacity(1, i);
    //         layout(itemAmt, 0.3);  
    //         upAnimates(i, "power.out", 0.3);  
    //     }
    // });

    // if(i == 0)
    // {
    //     divs.appendChild(backz);
    // }

// elm.style.backdropFilter = "blur(10px)";
            // elm.style.backdropFilter = "hue-rotate(180deg) blur(10px)";
            // elm.style.transform = "rotate(-90deg)";
            // elm.style.right = "50%";
            // elm.style.borderRadius = "30px 0px 0px 30px";
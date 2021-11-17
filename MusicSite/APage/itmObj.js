var imagesBack = ["https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                , "https://images.unsplash.com/35/hKViPxgDRGuiGns6wv5S_IMG_5317.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                , "https://images.unsplash.com/photo-1504626877899-b3670586ac9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                , "https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
                , "https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                , "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=827&q=80"
                , "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80"
                , "https://images.unsplash.com/photo-1498843053639-170ff2122f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                , "https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                , "https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
                , "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                , "https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1910&q=80"
                , "https://images.unsplash.com/photo-1553725291-dba76a21b332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1548879239-acb15aa692ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1559713044-c7329e177eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                , "https://images.unsplash.com/photo-1578406843598-34a4518d168d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=674&q=80"
                , "https://images.unsplash.com/photo-1532275664640-d795a201ad21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1526853334958-b94611edec09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                , "https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                , "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80"
                , "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                ];

var backContainer = document.createElement('div');
backContainer.className = "backContainer";
backContainer.id = "backContainer";
var backPic = document.createElement('div');
backPic.className = "itemBack";
backContainer.appendChild(backPic);
document.querySelector('.bodyCenter').appendChild(backContainer);

var cardBack = document.querySelector('.cardBack');
var oneLine = document.querySelector('.oneLine');
var twoLine = document.querySelector('.twoLine');
oneLine.innerHTML = "...";

var lineOneContainer = document.createElement('div');
lineOneContainer.className = "lineOneContainer";
lineOneContainer.id = "lineOneContainer";

var playing = document.createElement('div');
playing.className = "playing";
playing.id = "playing";

var lineOne = document.createElement('div');
lineOne.className = "lineOne";
lineOne.id = "lineOne";

var lineTwo = document.createElement('div');
lineTwo.className = "lineTwo";
lineTwo.id = "lineTwo";

var lineThree = document.createElement('div');
lineThree.className = "lineThree";
lineThree.id = "lineThree";

var lineFour = document.createElement('div');
lineFour.className = "lineFour";
lineFour.id = "lineFour";

var lineFive = document.createElement('div');
lineFive.className = "lineFive";
lineFive.id = "lineFive";

var lineSix = document.createElement('div');
lineSix.className = "lineSix";
lineSix.id = "lineSix"; 

lineOneContainer.appendChild(playing);
lineOneContainer.appendChild(lineOne);

//============================================================================================
var currPlaying = 0;

playing.addEventListener('mouseover', cursorSmall);
playing.addEventListener('mouseleave', cursorNorm); 

playing.addEventListener('click', ()=>
{
    listItems.get(currPlaying).isPlay = "url(./pic/pausing.svg)";
    listItems.get(currPlaying).playBorder = "none";

    cardBack.style.backgroundImage = "url(" + imagesBack[item] + ")";
    oneLine.innerHTML = listItems.get(item).line1;
    twoLine.innerHTML = listItems.get(item).line2;

    if($('.playing').css('background-image').indexOf("/pic/pausing.svg") >= 0 )
    {
        listItems.get(item).isPlay = "url(./pic/play.svg)"; 
        listItems.get(item).playBorder = "2px solid #4d6bff";
        blockanimate.play();
        play = false;
        if(currPlaying != item)
        {
            handle.value = 0;
        }
        slider.style.height = handle.value + "%";
    }
    else
    {
        listItems.get(item).isPlay = "url(./pic/pausing.svg)";
        listItems.get(item).playBorder = "none";
        blockanimate.pause();
        play = true;
    }
    
    playing.style.backgroundImage = listItems.get(item).isPlay;
    playing.style.border = listItems.get(item).playBorder;
    currPlaying = item;
    
});

//============================================================================================

var itemText =  document.createElement('div');
itemText.className = "itemText";
itemText.id = "itemText";

var itemTextContainer =  document.createElement('div');
itemTextContainer.className = "itemTextContainer";
itemTextContainer.id = "itemTextContainer";

itemTextContainer.appendChild(lineOneContainer);
itemTextContainer.appendChild(lineTwo);
itemTextContainer.appendChild(lineThree);
itemTextContainer.appendChild(lineFour);
itemTextContainer.appendChild(lineFive);
itemTextContainer.appendChild(lineSix);

itemText.appendChild(itemTextContainer);

itemText.style.zIndex = "2";

document.querySelector('.bodyCenter').appendChild(itemText);

function items(i) 
{
    this.item = document.createElement('div');
    this.item.className = "item";
    this.item.id = "item-" + i;
    this.item.style.backgroundRepeat = "no-repeat";
    this.item.style.backgroundPosition = "center";
    this.item.style.backgroundSize = "cover";
    
    this.item.addEventListener('mouseover', () =>
    {
        if(viewShift == true)
        {
            expand(1.4, i, "expo.out", 0.5);
            opacity(0.3, i);
            innerText(i);
            back(i);               
        }  
    });

    this.item.addEventListener('mouseout', () =>
    {
        if(viewShift == true)
        {
            expand(1, i, "expo.out", 0.5);
            opacity(1, i);
        }  
    });
    
    this.item.addEventListener('click', () =>
    {
        if(viewShift == true)
        {   
            var shift = {var: equation};

            $(".lineFive").fadeTo("fast", 1);
            $(".lineSix").fadeTo("fast", 1);
            $(".playing").fadeTo("fast", 1);
            document.querySelector('#itemTextContainer').style.justifyItems = isMoveView;

            cantClick = false;
            expansion.paused(true);
            opaque.paused(true);
            viewShift = false;
            item = i;
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

            expand(1, i, "back.out(0.5)", 0.2)
            opacity(1, i);
            layout(itemAmt, 0.3);  
            upAnimates(i, "power.out", 0.3);  
            back(item);
            innerText(item);
            itemText.style.transform = "translateX(0px)";
        }
    });
}

var rmbr = -1;
var rmbr2 = -1;

var listItems = new Map();
listItems.set(0, 
{
    line1: "Angel's Cloud",
    line2: "BY CHAD HODGE",
    line3: "RELEASED JUNE 4, 2020",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(1, 
{
    line1: "Bird Clout",
    line2: "BY JAHREL STEWART",
    line3: "RELEASED SEPTEMBER 5, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(2, 
{
    line1: "Lip Butter",
    line2: "BY AZURE-DOMINUS",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(3, 
{
    line1: "Screaming",
    line2: "BY THOU ART",
    line3: "RELEASED APRIL 7, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(4, 
{
    line1: "Cinderella",
    line2: "BY LIL DRIP",
    line3: "RELEASED FEBURARY 15, 2018",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(5, 
{
    line1: "Yellow Flush",
    line2: "BY BIG.PAC",
    line3: "RELEASED JANUARY 9, 2020",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(6, 
{
    line1: "Cosmo and Wanda",
    line2: "BY 123BULB",
    line3: "RELEASED DECEMBER 25, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(7, 
{
    line1: "Paper Plane",
    line2: "BY USER",
    line3: "RELEASED NOVEMBER 8, 2017",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(8, 
{
    line1: "Finger Drip",
    line2: "BY JOHN DOE",
    line3: "RELEASED AUGUST 4, 2020",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(9, 
{
    line1: "Skyscraper",
    line2: "BY TYLER DE CREATOR",
    line3: "RELEASED OCTOBER 2, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(10, 
{
    line1: "Reach",
    line2: "BY STUNNA 4 VEGAS",
    line3: "RELEASED JULY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(11, 
{
    line1: "Float Away",
    line2: "BY GUNNA",
    line3: "RELEASED JUNE 20, 2020",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(12, 
{
    line1: "Blue Empress",
    line2: "BY DRAKE",
    line3: "RELEASED MARCH 2, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(13, 
{
    line1: "Big Bang Theory",
    line2: "BY GHOST WRITER",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(14, 
{
    line1: "Dreamy",
    line2: "BY TUPAC",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(15, 
{
    line1: "Valentine Burst",
    line2: "BY 2 REALZ",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(16, 
{
    line1: "Calmy",
    line2: "BY YOUNGBOY NBA",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(17, 
{
    line1: "Tekno Rush",
    line2: "BY CAPITAL STEEZ",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(18, 
{
    line1: "Comical Dive",
    line2: "BY JOEY BADASS",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(19, 
{
    line1: "Ethereal Lake",
    line2: "BY CJ FLY",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(20, 
{
    line1: "Vouge",
    line2: "BY KENDRICK",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(21, 
{
    line1: "Ginger Leaf",
    line2: "BY J.COLE",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(22, 
{
    line1: "Just Banana",
    line2: "BY TRAVIS SCOTT",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});
listItems.set(23, 
{
    line1: "Lonely Rose",
    line2: "BY TYGA",
    line3: "RELEASED MAY 20, 2019",
    line4: "105 BPM &nbsp | &nbsp 3.9K PLAYS",
    line5: "$5.00",
});

for(i = 0; i < listItems.size; i++)
{
    listItems.get(i).isPlay = "url(./pic/pausing.svg)";
    listItems.get(i).playBorder = "none";
}

var back = function(which)
{
    if(which == rmbr)
    {
        return;
    }

    $(".itemBack").stop(true, false);
    backPic.style.opacity = "0";
    backPic.style.backgroundImage = "url(" + imagesBack[which] + ")";    
    $(".itemBack").fadeTo("slow", 0.2);
    
    rmbr = which;

    // setTimeout(() => {
    //     backPic.style.opacity = "0";
    //     backPic.style.transition = "opacity 0s";
    // }, 50);
    
    // setTimeout(() => {
    //     backPic.style.opacity = "0.2"; 
    //     backPic.style.transition = "opacity 0.8s";  
    // }, 150);
}

//=================================================================================================

var innerText = function(which)
{
    if(which == rmbr2)
    {
        return;
    }

    lineOne.innerHTML = listItems.get(which).line1;
    lineTwo.innerHTML = listItems.get(which).line2;
    lineThree.innerHTML = listItems.get(which).line3;
    lineFour.innerHTML = listItems.get(which).line4;
    lineFive.innerHTML = listItems.get(which).line5;

    playing.style.backgroundImage = listItems.get(which).isPlay;
    playing.style.border = listItems.get(which).playBorder;
    
    // animateCSS(".lineOne", 'fadeInLeft');
    // animateCSS(".lineTwo", 'fadeInLeft');
    // animateCSS(".lineThree", 'fadeInLeft');
    // animateCSS(".lineFour", 'fadeInLeft');
    // animateCSS(".lineFive", 'fadeInLeft');

    //create for loop for the following lol:

    $(".lineOneContainer").stop(true, false);
    $(".lineOne").stop(true, false);
    $(".lineTwo").stop(true, false);
    $(".lineThree").stop(true, false);
    $(".lineFour").stop(true, false);
    $(".lineFive").stop(true, false);
    $(".lineSix").stop(true, false);
    $(".playing").stop(true, false);
    
    lineOneContainer.style.opacity = "0";
    lineOne.style.opacity = "0";
    lineTwo.style.opacity = "0";
    lineThree.style.opacity = "0";
    lineFour.style.opacity = "0";
    lineFive.style.opacity = "0";
    lineSix.style.opacity = "0";
    playing.style.opacity = "0";
    
    $('.lineOneContainer').fadeTo("slow", 1);
    $('.lineOne').fadeTo("slow", 1);
    $('.lineTwo').fadeTo("slow", 1);
    $(".lineThree").fadeTo("slow", 1);
    $(".lineFour").fadeTo("slow", 1);
    
    if(viewShift == true)
    {
        $(".lineFive").fadeTo("slow", 0);
        $(".lineSix").fadeTo("slow", 0);
        $(".playing").fadeTo("slow", 0);
        playing.style.display = "none";
    }
    else
    {
        $(".lineFive").fadeTo("slow", 1);
        $(".lineSix").fadeTo("slow", 1);
        $(".playing").fadeTo("slow", 1);
    }

// ===============================================================================

rmbr2 = which;

}
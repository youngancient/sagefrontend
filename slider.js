
// Slider Js
var counter = 1;
setInterval(function(){
    document.querySelector(".desktop .slides #radio"+counter).checked = true;

    // controlling desktop auto slide divs
    const auto = document.querySelectorAll('.nav-auto div');
    auto.forEach(div =>{
        div.style.background = '#c4c4c4';
    })
    document.querySelector('.nav-auto .auto-btn'+counter).style.background = '#1236f0';
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);
var mcounter = 1;
setInterval(function(){
    document.querySelector(".mobile #m-radio"+counter).checked = true;
    mcounter++;
    if(mcounter > 3){
        mcounter = 1;
    }
}, 5000);
// slider Js end
document.addEventListener('DOMContentLoaded', function(){
    window.onscroll = function(){
        firstGridAnimation();
        secondGridAnimation();
        thirdGridAnimation();
        aboutUsAnimation();
        pandsAnimation();
        blogAnimation();
        joinusAnimation();
        visionAnimation();
    };
});
// animations
const triggerPoint = window.innerHeight/ 5*4;

function firstGridAnimation(){
    const card = document.querySelector('.second .grid-one')
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.second .grid-one p').style.transform ='translateX(0)';
    }
}
function secondGridAnimation(){
    const card = document.querySelector('.second .grid-two')
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.second .grid-two p').style.transform ='translateX(0)';
    }
}
function thirdGridAnimation(){
    const card = document.querySelector('.second .grid-three')
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.second .grid-three p').style.transform ='translateX(0)';
    }
}
function blogAnimation(){
    const card = document.querySelector('.blog .blog-svg')
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.blog .blog-svg').style.transform ='translateX(0)';
    }
}
function joinusAnimation(){
    const card = document.querySelector('.joinus .blue');
    const card2 = document.querySelector('.joinus .blue .paddit');
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.joinus .joinus-text').style.transform ='translateX(0)';
        document.querySelector('.joinus .joinus-svg').style.transform ='translateX(0)';
    }
    const cardTop2 = card2.getBoundingClientRect().top;
    if(cardTop2 < triggerPoint){
        document.querySelector('.joinus .joinus-text').style.transform ='translateX(0)';
       
    }
}

function visionAnimation(){
    const card = document.querySelector('.vision-grid .one')
    const card2 = document.querySelector('.vision-grid .two')
    const card3 = document.querySelector('.vision-grid .mobile2')
    const cardTop = card.getBoundingClientRect().top;
    const cardTop2 = card2.getBoundingClientRect().top;
    const cardTop3 = card3.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.vision-grid .one .transparent').style.transform ='translateX(0)';
    }
    if(cardTop2 < triggerPoint){
        document.querySelector('.vision-grid .two .transparent').style.transform ='translateX(0)';
    }
    if(cardTop3 < triggerPoint){
        document.querySelector('.vision-grid .mobile2').style.transform ='translateX(0)';
    }
}

function aboutUsAnimation(){
    const card = document.querySelector('.aboutus section');
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.aboutus section .text').style.transform ='translateX(0)';
    }
}
function pandsAnimation(){
    const card = document.querySelector('.pands .pands-2 .div-one');
    const card2 = document.querySelector('.pands .pands-2 .div-two');
    const cardTop = card.getBoundingClientRect().top;
    const cardTop2 = card2.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.pands .pands-2 .div-one').style.transform ='translateX(0)';
    }
    if(cardTop2 < triggerPoint){
        document.querySelector('.pands .pands-2 .div-two').style.transform ='translateX(0)';
    }
}

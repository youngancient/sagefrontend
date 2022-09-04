const cont_one = document.querySelector('.image-one .appear');
const cont_two = document.querySelector('.image-two .appear');
const image_two = document.querySelector('.image-two');
const image_one = document.querySelector('.image-one');
const btn_one = document.querySelector('.image-one .imagebutton');
const btn_two = document.querySelector('.image-two .imagebutton');


function showOne(){
    cont_one.classList.remove('go-left');
    image_one.style.background = "hsla(0, 0%, 0%,1)";
    btn_one.classList.add('hideit');
}

function showTwo(){
    cont_two.classList.remove('go-left');
    image_two.style.background = "hsla(0, 0%, 0%,1)";
    btn_two.classList.add('hideit');
}

function removeOne(){
    image_one.style.background = "hsla(0, 0%, 0%,0.9)";
    cont_one.classList.add('go-left');
    btn_one.classList.remove('hideit');
}
function removeTwo(){
    image_one.style.background = "hsla(0, 0%, 0%,0.9)";
    cont_two.classList.add('go-left');
    btn_two.classList.remove('hideit');
}
document.addEventListener('DOMContentLoaded',function(){
    window.onscroll =() =>{
        problemsAnimation();
        missionAnimation();
        aboutAnimation();
        floater();
    }
});
const triggerPoint = window.innerHeight/ 5*4;
function problemsAnimation(){
    const card = document.querySelector('.problems .div-problems');
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelector('.problems .problem-words').style.transform ='translateX(0)';
    }
}
function missionAnimation(){
    const card = document.querySelector('.div-mission .f-one');
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerPoint){
        document.querySelectorAll('.f-one .go-up').forEach(one=>{
            one.style.transform ='translateX(0)';
        })
    }
    const card2 = document.querySelector('.div-mission .f-two');
    const cardTop2 = card2.getBoundingClientRect().top;
    if(cardTop2 < triggerPoint){
        document.querySelectorAll('.f-two .go-up').forEach(one=>{
            one.style.transform ='translateX(0)';
        })
    }
    const card3 = document.querySelector('.div-mission .f-three');
    const cardTop3 = card3.getBoundingClientRect().top;
    if(cardTop3 < triggerPoint){
        document.querySelectorAll('.f-three .go-up').forEach(one=>{
            one.style.transform ='translateX(0)';
        })
    }
}
function aboutAnimation(){
    const cards = document.querySelectorAll('.div-values .value');
    cards.forEach(card=>{
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerPoint){
            card.style.transform ='translateX(0)';
        }
    });
}
function floater(){
    const card = document.querySelector('main .start');
    const cardTop = card.getBoundingClientRect().top;
    const card2 = document.querySelector('footer');
    const cardTop2 = card2.getBoundingClientRect().top;
    if(cardTop < triggerPoint && cardTop2 > triggerPoint){
        document.querySelector('main .floater').style.display ='flex';
    } 
    if(cardTop2 < triggerPoint){
        document.querySelector('main .floater').style.display ='none';
    }
    if(cardTop > triggerPoint){
        document.querySelector('main .floater').style.display ='none';
    }
}
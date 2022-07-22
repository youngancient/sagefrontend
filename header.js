const menu = document.querySelector(".menu");
const filter = document.querySelector(".mobile-dropdown ");
const slideIn = document.querySelector(".mobile-dropdown .dropdown-div");
const mSArrow = document.querySelector('.services .direction');
const admissionsArrow = document.querySelector(".services .admissions .direction");
const mPArrow = document.querySelector('.products .direction');
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.mobile-links .services a').onclick = function(){
        mSArrow.classList.toggle('fa-angle-up');
        document.querySelector('.services .under-services').classList.toggle('fl');
    }
    document.querySelector('.mobile-links .products a').onclick = function(){
        mPArrow.classList.toggle('fa-angle-up');
        document.querySelector('.mobile-links .under-products').classList.toggle('fl');
    }
    document.querySelector('.under-services .admissions a').onclick = function(){
        admissionsArrow.classList.toggle('fa-angle-up');
        document.querySelector('.admissions .under-admissions').classList.toggle('fl');
    }
});

//for menu
let isClicked = false;
// remember to set the overflow-y of the body to hidden to avoid scrolling
function show(){
    filter.classList.toggle('color');
    document.querySelector("body").classList.toggle("hidden");
    if(!isClicked){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
        slideIn.classList.remove('left');
        isClicked = true;
    }else{
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
        slideIn.classList.add('left');
        isClicked = false;
    }
}
// This function works only if the mobile nav is in display
function noShow(){
    if (isClicked) {
        filter.classList.remove("color");
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
        slideIn.classList.add("left");
        isClicked = false;
      }
  }

//for dropdown items

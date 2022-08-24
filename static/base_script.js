//for menu
const menu = document.querySelector(".menu");
const filter = document.querySelector(".mobile-dropdown ");
const slideIn = document.querySelector(".mobile-dropdown .dropdown-div");
let isClicked = false;
// remember to set the overflow-y of the body to hidden to avoid scrolling
const mSArrow = document.querySelector('.services .direction');
const admissionsArrow = document.querySelector(".services .admissions .direction");
const mPArrow = document.querySelector('.products .direction');
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.mobile-links .services a').onclick = function(){
        mSArrow.classList.toggle('rotate');
        document.querySelector('.mobile-links .services .under-services').classList.toggle('fl');
    }
    document.querySelector('.mobile-links .products a').onclick = function(){
        mPArrow.classList.toggle('rotate');
        document.querySelector('.mobile-links .under-products').classList.toggle('fl');
    }
    document.querySelector('.under-services .admissions a').onclick = function(){
        admissionsArrow.classList.toggle('rotate');
        document.querySelector('.admissions .under-admissions').classList.toggle('fl');
    }
});
const service = document.querySelector(".desktop-services");
const sArrow = document.querySelector(".desktop-links .services .fa-angle-down");
const pArrow = document.querySelector(".desktop-links .products .fa-angle-down");
const product = document.querySelector(".desktop-products");
function showUnderServices(){
    service.classList.toggle('display');
    sArrow.classList.toggle('rotate');
}
function showUnderProducts(){
    product.classList.toggle('display');
    pArrow.classList.toggle('rotate');
}
function show(){
    filter.classList.toggle('color');
    filter.classList.toggle('visible');
    document.querySelector("body").classList.toggle("hidden");
    if(!isClicked){
        slideIn.classList.remove('left');
        isClicked = true;
    }else{
        slideIn.classList.add('left');
        isClicked = false;
    }
}
// This function works only if the mobile nav is in display
function noShow(){
    if (isClicked) {
        document.querySelector("body").classList.toggle("hidden");
        filter.classList.toggle('color');
        filter.classList.toggle("visible");
        slideIn.classList.add("left");
        isClicked = false;
      }
  }

//for dropdown items

// header js end

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



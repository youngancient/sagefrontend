var counter = 1;
setInterval(function(){
    document.querySelector(".desktop .slides #radio"+counter).checked = true;
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
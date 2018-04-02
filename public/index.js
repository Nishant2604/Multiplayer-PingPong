var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

adjust_size();

$(window).resize(() =>{
    adjust_size();
});

function adjust_size() {  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


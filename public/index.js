var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

adjust_size();

$(window).resize(() =>{
    adjust_size();
});

function adjust_size() {  
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;

    var dimensions = {
        width: canvas.width,
        height: canvas.height,
        wsize: canvas.width * 0.1,
        hsize: canvas.height * 0.01
    }
    context.rect((dimensions.width / 2), dimensions.height - dimensions.hsize, dimensions.wsize, dimensions.hsize);
    context.fill();
}

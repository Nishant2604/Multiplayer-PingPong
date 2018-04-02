var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

$(window).resize(() =>{
    adjust_size();
});

function adjust_size() {  
    canvas.width = window.innerWidth - 5;
    canvas.height = window.innerHeight - 5;
    refresh();
}

function refresh(x){  
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var dimensions = {
        width: canvas.width,
        height: canvas.height,
        wsize: canvas.width * 0.1,
        hsize: canvas.height * 0.01
    }
    context.rect((dimensions.width / 2) - dimensions.wsize / 2 + x, dimensions.height - dimensions.hsize, dimensions.wsize, dimensions.hsize);
    context.fill();
}

var x = 0;

function animate() {
    adjust_size();
    requestAnimationFrame(animate);
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == 'ArrowRight'){
            x++;
        } else if (keyName == 'ArrowLeft'){
            x--;
        }
    });
    refresh(x);
}

animate();
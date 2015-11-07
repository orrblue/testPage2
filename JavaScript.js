var ctx = canvas.getContext('2d'),
width = 180,
height = 220;

initializeCanvas();
drawY();

function displayHello() {
    return "Hello World!!";
}

function drawY() {
    ctx.fillStyle = 'white';
    ctx.fillRect(20, 20, 20, 60); //left rectangle
    ctx.fillRect(40, 80, 20, 20); //left square1
    ctx.fillRect(60, 100, 20, 20); //left square2
    
    ctx.fillRect(140, 20, 20, 60); //right rect
    ctx.fillRect(120, 80, 20, 20); //right sqr1
    ctx.fillRect(100, 100, 20, 20); //right sqr2
    
    ctx.fillRect(80, 120, 20, 80); //midde rectangle
   
}

function drawH() {
    var img = document.getElementById("harvardLogo");
    ctx.drawImage(img, 50, 50;)
    
}

function initializeCanvas() {
    canvas.width = width;
    canvas.height = height;
}


let s;
let borderWidth = 400;
let borderHeight = 400;
let scl = 20;
let food;
// let cols = floor(width/scl);
// let rows = floor(height/scl);

function setup() {
    createCanvas(borderWidth, borderHeight);
    s = new Snake();
    frameRate(10);
    food = new Food();
}



function draw() {
    background(51);
    s.update();
    s.show();
    food.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.changeDirection(0, -1);
    }
    else if (keyCode === DOWN_ARROW) {
        s.changeDirection(0, 1);
    }
    else if (keyCode === RIGHT_ARROW) {
        s.changeDirection(1, 0);
    }
    else if (keyCode === LEFT_ARROW) {
        s.changeDirection(-1, 0);
    }
}
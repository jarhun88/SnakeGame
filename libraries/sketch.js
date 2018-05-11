
let snake;
let borderWidth = 400;
let borderHeight = 400;
let scl = 20;
let food;
let snakeSpeed = 6;
// let cols = floor(width/scl);
// let rows = floor(height/scl);

function setup() {
    createCanvas(borderWidth, borderHeight);
    snake = new Snake();
    frameRate(snakeSpeed);
    food = new Food();
}



function draw() {
    background(51);
    snake.update();
    snake.show();
    food.show();
    snake.death();


}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.changeDirection(0, -1);
    }
    else if (keyCode === DOWN_ARROW) {
        snake.changeDirection(0, 1);
    }
    else if (keyCode === RIGHT_ARROW) {
        snake.changeDirection(1, 0);
    }
    else if (keyCode === LEFT_ARROW) {
        snake.changeDirection(-1, 0);
    }
}
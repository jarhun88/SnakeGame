function Snake(){
    this.x = 1;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.changeDirection = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function() {
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    // this.eat = function(food) {
    //     if (this.x == food.x && this.y == food.y) {
    //
    //     }
    // }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }
}
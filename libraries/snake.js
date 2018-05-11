function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tail = [];
    this.total = 0;

    this.changeDirection = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    this.update = function() {

        if (this.total === this.tail.length)
            for (let i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
        this.tail[this.total-1] = createVector(this.x, this.y);

        // console.log(this.total);
        // console.log(this.tail.length);
        // addition
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, borderWidth - scl);
        this.y = constrain(this.y, 0, borderHeight - scl);

        if (snake.eats(food)){
            food = new Food();
        }
    };


    this.show = function() {
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        //     fill(255);
        rect(this.x, this.y, scl, scl);
    };

    this.eats = function(food) {
        if (this.x === food.x && this.y === food.y) {
            this.total++;
            return true;
        }
        else return false;
    }
}
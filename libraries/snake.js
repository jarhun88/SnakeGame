function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.body = [];

    this.changeDirection = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    this.update = function() {
        // for (let i = 0; i < this.body.size(); i++){
        //     this.body[i] =
        // }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, borderWidth - scl);
        this.y = constrain(this.y, 0, borderHeight - scl);

        
    };


    this.show = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    };

    this.eats = function(food) {
        return (this.x === food.x && this.y === food.y);
    }


}
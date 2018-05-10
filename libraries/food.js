function Food() {
    this.x = floor(random(0, (borderWidth-scl)/20)) * 20;
    this.y = floor(random(0, (borderHeight-scl)/20)) * 20;

    this.show = function() {
        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    };


}


function Food() {
    this.x = floor(random(0, (borderWidth-scl)/scl)) * scl;
    this.y = floor(random(0, (borderHeight-scl)/scl)) * scl;

    this.show = function() {
        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    };


}


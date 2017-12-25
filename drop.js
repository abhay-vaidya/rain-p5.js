class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, 50);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 1, 20);
    }
    
    fall() {
        this.y = this.y + this.yspeed;
        var gravity = map(this.z, 0, 20, 0.1, 0.2);
        this.yspeed = this.yspeed + gravity;
        if ((this.y > height) || this.touching()) {
            ellipse(posx, posy, 20, 5);
            for (var i = 0; i < 10; i++) {
                var yrandom = random(30, 150);
                var posx = random(this.x + 10, this.x + 30);
                var posy = random(this.y, this.y - yrandom);
                noStroke();
                fill(255, 255, 255, 50);
                ellipse(posx, posy, random(1, 5), random(1, 5));
            }
            for (var i = 0; i < 2; i++) {
                var yrandom = random(20, 50);
                var posx = random(this.x + 5, this.x + 10);
                var posy = random(this.y, this.y - yrandom);
                noStroke();
                fill(255, 255, 255, 50);
                ellipse(posx, posy, random(2, 5), random(2, 5));
            }
            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }
    
    touching() {
        var d = dist(this.x, this.y, mouseX, mouseY);
        return (d < 95);
    }
    
    show() {
        var thickness = map(this.z, 0, 20, 1, 4);
        strokeWeight(thickness);
        stroke(92, 113, 134, 75);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}
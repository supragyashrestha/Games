function Bird() {
    this.y = height/2;
    this.x = 100;
    this.gravity = 0.6;
    this.lift = -15;
    this.air_resistance = 0.9;
    this.velocity = 0;

    this.push = function() {
        this.velocity += this.lift;
    }
    
    this.show = function() {
        fill(255);
        ellipse(this.x , this.y , 24 , 24);
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if(this.velocity < 0){
            this.velocity *= this.air_resistance;
        }
        else{
            this.velocity *= this.air_resistance+0.09;
        }

        if(this.y > height-12){
                this.y = height-12;
                this.velocity = 0;
        }
        if(this.y < 12){
            this.y = 12;
            this.velocity = 0;
    }
    }
}
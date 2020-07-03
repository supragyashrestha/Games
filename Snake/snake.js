var size = 12;

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.death = function() {
        for( var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x , this.y , pos.x , pos.y);
            if(d<1){
                deathSound.play();
                console.log("GAME OVER!!!");
                clear();
                background(255,0,0);
                gameSound.stop();
                scoreWindow.innerHTML += TotalScore;
                scoretab.style.display = "block";
                //noLoop();
                console.log(TotalScore);
                this.total = 0;
                this.tail = [];

            }
        }
    }

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d<1){
            this.total++;
            speed = speed + 0.5;
            frameRate(speed);
            return true;
        }
        else{
            return false;
        }
    }

    this.dir = function(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function() {
        if(this.total === this.tail.length){
            for( var i = 0; i < this.tail.length - 1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed*size;
        this.y = this.y + this.yspeed*size;

        this.x = constrain(this.x, 0, width-size);
        this.y = constrain(this.y, 0, height-size);
    }

    this.show = function() {
        fill(255);
        for( var i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y , size, size);
        }
        rect(this.x, this.y, size , size);
    }
}
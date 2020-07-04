function pipe() {
    this.top = random((3*height)/4);
    this.bottom = random(600 - 70 -this.top);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.highlight = false;
    this.pipe_crossed = false;

    this.show = function() {
        fill(0,204,0);
        if(this.highlight){
            image(pipedesigntopred,this.x , 0 , this.w , this.top);
            image(pipedesignbottomred,this.x , height-this.bottom , this.w , this.bottom);
        }
        image(pipedesigntop,this.x , 0 , this.w , this.top);
        image(pipedesignbottom,this.x , height-this.bottom , this.w , this.bottom);

        //rect(this.x , 0 , this.w , this.top);
        //rect(this.x , height-this.bottom , this.w , this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        return (this.x < -this.w);
    }

    this.hits = function(bird) {
        if(bird.y < this.top + alien.height/2 || bird.y > height - this.bottom - alien.height/2){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                gameover = true;
                console.log("Game End!");
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    this.crossed = function(bird) {
        if(bird.x > this.x + this.w + alien.width/2){
            if(!this.pipe_crossed){
                this.pipe_crossed = true;
                TotalScore += 1;
                console.log(TotalScore);
            }
        }
    }
}
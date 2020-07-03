var bird;
var pipes = [];

function setup() {
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new pipe());
}

function draw() {
    background(0);
    bird.show();
    bird.update();

    if(frameCount % 100 == 0){
        pipes.push(new pipe());
    }

    for( var i = pipes.length-1 ; i > -1 ; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            //console.log("hit");
        }

        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }
    }

    
}

function keyPressed() {
    if(key == ' '){
        bird.push();
    }
}
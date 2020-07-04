var bird;
var pipes = [];
let alien;
var gameover = false;
var TotalScore = 0;

function preload() {
    alien = loadImage("https://i.ibb.co/84kx9XP/ship-Yellow-manned.png");
    pipedesigntop = loadImage("https://i.ibb.co/ZKY4xzM/full-pipe-top.png")
    pipedesignbottom = loadImage("https://i.ibb.co/XtXYgqx/full-pipe-bottom.png")
    pipedesignbottomred = loadImage("https://i.ibb.co/x1RzfGJ/pipeupred.png")
    pipedesigntopred = loadImage("https://i.ibb.co/2KnRBq3/pipedownred.png")
    bg = loadImage("https://i.ibb.co/0tNRxf4/background1.png");
}

function setup() {
    createCanvas(400,600);
    TotalScore = 0;
    bird = new Bird();
    pipes.push(new pipe());
}

function draw() {
    background(bg);
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
        if(pipes[i].crossed(bird)){
            
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
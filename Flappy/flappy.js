var bird;
var pipes = [];
let alien;
var gameover = false;
var TotalScore = 0;
var mode = 0;
const welcomeScreen = 0;
const gameScreen = 1;
const gameOverScreen = 2;
const winScreen = 3;
var scoretab = document.getElementById("scoreTab");
var scoreWindow = document.getElementById("demo");

function preload() {
    alien = loadImage("https://i.ibb.co/84kx9XP/ship-Yellow-manned.png");
    pipedesigntop = loadImage("https://i.ibb.co/ZKY4xzM/full-pipe-top.png")
    pipedesignbottom = loadImage("https://i.ibb.co/XtXYgqx/full-pipe-bottom.png")
    pipedesignbottomred = loadImage("https://i.ibb.co/x1RzfGJ/pipeupred.png")
    pipedesigntopred = loadImage("https://i.ibb.co/2KnRBq3/pipedownred.png")
    bg = loadImage("https://i.ibb.co/0tNRxf4/background1.png");
}

function setup() {
    var canvas = createCanvas(700, 600);
    canvas.parent('game_window');
    TotalScore = 0;
    bird = new Bird();
    pipes.push(new pipe());
}

function draw() {

    if (mode == welcomeScreen){
        //start screen
        background(0);
        fill(227, 101, 91);
        textSize(50);
        textAlign(CENTER);
        text("Hopping Alien",350, 200);
        textSize(25);
        textAlign(CENTER);
        text("Press 'P' to play.",350, 250);
        //text
        text("Goal: Cross as many pipes as you can.", 350, 290);
        text("Use key 'Spacebar' to hop. Refresh page to play again.", 350, 330);
    }
    else if (mode == gameScreen){
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
    else if (mode == gameOverScreen){
        //start screen
        background(0);
        fill(227, 101, 91);
        textSize(50);
        textAlign(CENTER);
        text("Game Over!!!",200, 200);
        textSize(16);
        textAlign(CENTER);
        text("Your Score",200, 250);
        //text
        //text(TotalScore, 200, 290);
    }
    
    
    
    
    
    
}

function keyPressed() {
    if(key == ' '){
        bird.push();
    }
    if(key == 'p'){
        mode = 1;   
    }
}
var s;
var speed = 7.0;
var musicSpeed = 1.0;
var eatSound;
var deathSound;
var gameSound;
var TotalScore = 0;
var scoreWindow = document.getElementById("demo");
var scoretab = document.getElementById("scoreTab");
var reLoader = document.getElementById("reloader");

function preload() {
    eatSound = loadSound("Powerup3.wav");
    deathSound = loadSound("GameOver.mp3");
    gameSound = loadSound("snakemusik1.mp3");
    gameSound.setVolume(0.4);
}

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('game_window');
    gameSound.play();
    s = new Snake();
    frameRate(speed);
    pick_food_location();
}

function pick_food_location() {
    var col = floor(width/size);
    var row = floor(height/size);
    food = createVector(floor(random(col)) , floor(random(row)));
    food.mult(size);
}

  
function draw() {
    background(51);
    if(s.eat(food)){
        eatSound.play();
        musicSpeed += 0.05;
        TotalScore += 1;
        gameSound.rate(musicSpeed);
        pick_food_location();
    }
    s.death();
    s.update();
    s.show();

    fill(255,0,100);
    rect(food.x,food.y,size,size);
}

function mousePressed() {
    s.total++;
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        if(s.yspeed===0){
            s.dir(0,-1);
        }
        //console.log("up");
    }else if(keyCode === DOWN_ARROW){
        if(s.yspeed===0){
            s.dir(0,1);
        }
        //console.log("down");
    }else if(keyCode === LEFT_ARROW){
        if(s.xspeed===0){
            s.dir(-1,0);
        }
        //console.log("left");
    }else if(keyCode === RIGHT_ARROW){
        if(s.xspeed===0){
            s.dir(1,0);
        }
        //console.log("right");
    }
}

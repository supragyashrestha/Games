var s;
var speed = 7.0;
function setup() {
    createCanvas(600,600);
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

function mousePressed() {
    s.total++;
}
  
function draw() {
    background(51);
    if(s.eat(food)){
        pick_food_location();
    }
    s.death();
    s.update();
    s.show();

    fill(255,0,100);
    rect(food.x,food.y,size,size);
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        s.dir(0,-1);
        //console.log("up");
    }else if(keyCode === DOWN_ARROW){
        s.dir(0,1);
        //console.log("down");
    }else if(keyCode === LEFT_ARROW){
        s.dir(-1,0);
        //console.log("left");
    }else if(keyCode === RIGHT_ARROW){
        s.dir(1,0);
        //console.log("right");
    }
}

var v;
var food = [];
var posion = [];

function setup() {
  createCanvas(640, 360);
  v = new Vehicle(width / 2, height / 2);

  // create food
  for (var i = 0; i < 10; i++) {
    var x = random(10, width - 10);
    var y = random(10, height - 10)
    food.push(createVector(x, y))
  }
  // create posion
  for (var i = 0; i < 10; i++) {
    var x = random(10, width - 10);
    var y = random(10, height - 10)
    posion.push(createVector(x, y))
  }

}

function draw() {
  background(51);

  // draw food
  for (var i = 0; i < food.length; i++) {
    fill(0,0,255);
    ellipse(food[i].x,food[i].y,10*2);
  }
  // draw posion
  for (var i = 0; i < food.length; i++) {
    fill(255,0,255);
    ellipse(posion[i].x,posion[i].y,10*2);
  }


  // Draw an ellipse at the mouse position

  // Call the appropriate steering behaviors for our agents
  v.seek();
  v.update();
  v.display();

}

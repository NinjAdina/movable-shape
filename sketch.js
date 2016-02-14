// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myStar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myStar.drawShape = function () {
	// your code goes here
	noStroke(); // Draw shapes without an outline.
	// The Rainbow.
  fill('red');
  rect(50, 200, 10, 10);
  fill('rgb(100%,50%,10%)'); // Orange.
  rect(50, 210, 10, 10);
  fill(255, 220, 0); // Yellow.
  rect(50, 220, 10, 10);
  fill('rgb(0,150,0)'); // Green.
  rect(50, 230, 10, 10);
  fill(color(0, 0, 255)); // Blue.
  rect(50, 240, 10, 10);
  fill('purple'); //Purple.
  rect(50, 250, 10, 10);


};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?
myStar.speed.x = 0.01;
myStar.speed.y = -0.05;

setup = function() {
	createCanvas(600, 600);
	noStroke(); // Draw shapes without an outline.
	fill(0); // Black pot.
	ellipse(50, 320, 90, 90); // Round pot.
	fill(255, 204, 0); // Gold.
	ellipse(50, 270, 70, 40); // Golden glow.
	fill(0); // Black pot top.
	quad(10, 270, 90, 270, 30, 330, 70, 330); // Pot top.
};

draw = function() {
  myStar.display(); // display myShape
  myStar.update(); // and then update it
};

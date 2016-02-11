// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myShuttle = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myShuttle.drawShape = function () {
	// your code goes here
	noStroke(); // Draw shapes without an outline.
	// The body of the shuttle.
	fill(250); // The space shuttle is white.
	rect(250, 200, 100, 300); // The main structure.
	// The shuttle's wings.
	fill(0); // Will be black.
	triangle(250, 200, 350, 200, 300, 125); // The nose of the shuttle.
	triangle(200, 500, 250, 500, 250, 400); // The left wing.
	triangle(350, 500, 400, 500, 350, 400); // The right wing.
	triangle(300, 500, 280, 520, 300, 400); // The middle wing.

	// Windows on the shuttle.
	fill(200) // Windows will be a very light gray.
	quad(258, 190, 280, 190, 275, 180, 265, 180); // Small left window on the nose of the shuttle.
	quad(282, 190, 315, 190, 310, 180, 287, 180); // Large middle window on the nose.
	quad(318, 190, 342, 190, 335, 180, 322, 180); // Small right window on the nose.
	fill(0); // The circular frame of the window will be black.
	ellipse(300, 250, 50, 50); // Outer frame of the window.
	fill(200); // The window itself will be light gray like the other windows.
	ellipse(300, 250, 40, 40); // The main window on the body of the shuttle.

};

myShuttle.speed.y = -3;

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(color(0, 200, 255)); // refresh the background; sky blue
	noStroke(); // Draw shapes without an outline.
	fill('rgb(0,150,0)'); // A green lawn.
	rect(0, 500, 600, 100)
  myShuttle.display(); // display myShape
  myShuttle.update(); // and then update it
};

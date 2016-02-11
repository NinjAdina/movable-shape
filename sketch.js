// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myCar.drawShape = function () {
	// your code goes here
	var car = {
	    x: 100,
	    y: 385,
	    bodyLength: 400,
	    bodyHeight: 100,
	    hoodLength: 115,
	    cabinLength: 200,
	    cabinHeight: 60,
	    carCorners:20,
	    frontWheelOffset: 65,
	    backWheelOffset: 65,
	    wheelBase: 270,
	    wheelWidth: 65,
	    wheelHeight: 65,

	    draw: function() {
	      this.drawBody();
	      this.drawCabin();
	      this.drawFrontWheel();
	      this.drawBackWheel();
	    },
	    drawBody: function() {
	      fill(color(0, 0, 255)); // Blue.
	      rect(this.x, this.y, this.bodyLength, this.bodyHeight, this.carCorners);
	    },

	    drawCabin: function() {
	      fill(color(0, 0, 255)); // Blue.
	      rect(this.x + this.hoodLength, this.y - this.cabinHeight, this.cabinLength, this.cabinHeight + this.carCorners, this.carCorners);
	    },

	    drawFrontWheel: function() {
	      fill(0);
	      ellipse(this.frontWheelOffset + this.x, this.y + this.bodyHeight, this.wheelWidth, this.wheelHeight);
	    },

	    drawBackWheel: function() {
	      fill(0);
	      ellipse(this.x + this.frontWheelOffset + this.wheelBase, this.y + this.bodyHeight, this.wheelWidth, this.wheelHeight);
	    }
	}
	car.draw();
};

myCar.speed.x = -0.5;

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(100); // refresh the background; It's dark out.
	noStroke(); // Draw shapes without an outline.
	fill(0); // Black road.
	rect(0, 500, 600, 100); // The pavement
  myCar.display(); // display myShape
  myCar.update(); // and then update it
};

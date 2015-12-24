// Creating variables
var myX = 50, myY = 600;
var skorostX = 7, skorostY = -50;

function update() {
	myX = myX + skorostX;
	myY = myY + skorostY;

	//skorostX = skorostX+0.1;

	skorostY = skorostY * 0.94;
	skorostY = skorostY + 0.7;
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

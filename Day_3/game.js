// Creating variables
var squareSize=1; 
var height=200;
var deltaX=1,deltaY=-1;
var time;

function update() {
}

function draw() {
	// This is how you draw a rectangle
	var sqX=0,sqY=600-squareSize;
	while(sqX<800-squareSize)
	{
		context.fillRect(sqX,sqY,squareSize,squareSize);
		sqX+=deltaX+squareSize;
		sqY+=deltaY*squareSize;
		if(sqY<height)
		{
			sqY-=(deltaY*squareSize);
			deltaY=1;
			sqY+=deltaY*squareSize;
		}
		if(sqY>600-squareSize)
		{
			sqY-=(deltaY*squareSize);
			deltaY=-1;
			sqY+=deltaY*squareSize;
		}
	}
	height+=1;
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}



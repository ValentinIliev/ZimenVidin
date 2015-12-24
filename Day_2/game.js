

// Creating variables
var myX = 0, myY = 0;
var deltaX = 0,deltaY = 0;

var block1x,block1y;

var block2x,block2y;

var blockSize=50;

block1x=(Math.random()*1000)%250;
block1y=(Math.random()*1000)%250+blockSize

block2x=(Math.random()*1000)%350+block1x+blockSize;
block2y=block1y-blockSize;

myX=block2x;
myY=(Math.random()*1000)%400+block2y+blockSize;

function update() {
	myX=myX+deltaX;
	myY=myY+deltaY;
	if(myX<0||myX>570||myY<0||myY>770)
	{
		console.log("Game Over!!!");
	}
	if(areColliding(myX,myY,30,30,block1x,block1y,blockSize,blockSize)||areColliding(myX,myY,30,30,block2x,block2y,blockSize,blockSize))
	{
		myX-=deltaX;
		deltaX=0;
		myY-=deltaY;
		deltaY=0;
	}
}
function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
	context.fillStyle="black";
	context.fillRect(block1x,block1y,blockSize,blockSize);
	context.fillRect(block2x,block2y,blockSize,blockSize);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
	if(deltaX==0&&deltaY==0)
	{
		if(key==37)
		{
			deltaX=-1;
		}
		if(key==38)
		{
			deltaY=-1;
		}
		if(key==39)
		{
			deltaX=1;
		}
		if(key==40)
		{
			deltaY=1;
		}
	}
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}


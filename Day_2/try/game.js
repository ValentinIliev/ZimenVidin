// Creating variables
var myX = 300, myY = 300;

var block1x=100,block1y=200; //NE GI PIPAME
var block2x=300,block2y=200-31; //NE GI PIPAME

var deltaX=0,deltaY=0;

function update() {
	myX=myX+deltaX;
	myY=myY+deltaY;
	if(myX<0||myX>800||myY<0||myY>600) //ako sme izvun canvas-a
	{
		console.log("Game Over!!!!");
	}
	if(areColliding(myX,myY,30,30,block1x,block1y,30,30)||areColliding(myX,myY,30,30,block2x,block2y,30,30)) //ako se bluskame nqkude
	{
		myX-=deltaX;
		myY-=deltaY;
		deltaX=0;
		deltaY=0;
	}
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
	context.fillStyle="black";
	context.fillRect(block1x,block1y,30,30);
	context.fillRect(block2x,block2y,30,30);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
	if(deltaX==0&&deltaY==0)
	{
		if(key==37)
		{
			deltaX=-1;
			deltaY=0;
			//lqvo
		}
		if(key==39)
		{
			deltaX=1;
			deltaY=0;
			//dqsno
		}
		if(key==38)
		{
			deltaX=0;
			deltaY=-1;
			//gore
		}
		if(key==40)
		{
			deltaX=0;
			deltaY=1;
			//dolu
		}
	}
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

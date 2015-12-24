

// Creating variables
var myX = 100, myY = 600;
var skorostX = 7, skorostY = -50;
var razdX=-5,razdY=-5,dist=3;

function update() {
	myX = myX + skorostX;
	myY = myY + skorostY;

	//skorostX = skorostX+0.1;

	skorostY = skorostY * 0.94;
	skorostY = skorostY + 0.7;
}

function draw() {
	// This is how you draw a rectangle
	var addX=razdX,addY;
	for(var i=0;i<3;i++)
	{
		addY=razdY;
		for(var j=0;j<3;j++)
		{
			context.fillRect(myX+addX, myY+addY, 3, 3);
			addY+=dist;
		}
		addX+=dist;
	}
	dist++;
	razdX-=1;
	razdY-=1;
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

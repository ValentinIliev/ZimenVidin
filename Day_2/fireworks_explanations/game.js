// Creating variables
var myX = 50, myY = 600;
var skorostX = 7, skorostY = -50;
var kordX=-10,kordY=-10,distBetween=0;

function update() {
	myX = myX + skorostX;
	myY = myY + skorostY;

	//skorostX = skorostX+0.1;

	skorostY = skorostY * 0.94;
	skorostY = skorostY + 0.7;

	if(myY>600)
	{
		myX=50;
		myY=600;
		skorostX=7;
		skorostY=-50;
		kordX=-10;
		kordY=-10;
		distBetween=0;
	}
}

function draw() {
	// This is how you draw a rectangle
	var kordDrawX,kordDrawY;
	kordDrawY=kordY;
	for(var i=0;i<10;i++)
	{
		kordDrawX=kordX;
		for(var j=0;j<10;j++)
		{
			//risuvame vsqko individualno kvadratche
			var red=Math.floor(Math.random()*256);
			var green=Math.floor(Math.random()*256);
			var blue=Math.floor(Math.random()*256);
			context.fillStyle="rgb("+red+","+green+","+blue+")";
			context.fillRect(myX+kordDrawX,myY+kordDrawY,10,10);
			kordDrawX+=distBetween+10;			
		}
		kordDrawY+=distBetween+10;
	}
	distBetween+=0.3;
	//kordX-=1;
	//kordY-=1;
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

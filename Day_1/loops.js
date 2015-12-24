// Creating variables

function update() {
}

function draw() {
	// This is how you draw a rectangle
	// fillText("texta",x,y)
	var x=28,y=28;
	for(var i=1;i<=1000;i++) //i++ -> i=i+1
	{
		context.fillText(i,x,y);
		if(i<10)
		{
			x+=10;
		}
		if(i>=10&&i<100) //&& 2*(Shift+7) oznachava и, and
		{
			x+=20;
		}
		if(i>=100&&i<1000)
		{
			x+=30;
		}
		//canvasa 800 v shirina
		if(x>=780)
		{
			y+=10;
			x=28;
		}
	}
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

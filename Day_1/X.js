// Creating variables

function update() {
}

function draw() {
	// This is how you draw a rectangle
	context.fillStyle="black";
	/*for(var i=1;i<=6;i++)
	{
		context.fillRect(i*10,i*10,10,10); // gore vlqvo (normalno-to)
		context.fillRect((12-i)*10,i*10,10,10); //gore vdqsno
		context.fillRect(i*10,(12-i)*10,10,10);  // dolu lqvo
		context.fillRect((12-i)*10,(12-i)*10,10,10); //dolu dqsno
	}*/
	var indent=20;
	for(var i=0;i<11;i++)
	{
		for(var j=0;j<11;j++)
		{
			if(i==j||i==(10-j))
			{
				context.fillRect(i*10+indent,j*10+indent,10,10);
			}
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

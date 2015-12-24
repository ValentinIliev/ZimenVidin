// Creating variables

function update() {
}

function draw() {
	context.fillStyle = "black";
	var broiKvadratchetaVsegashnataRedica = 20;
	var segashnaRedica = 0;

	while(broiKvadratchetaVsegashnataRedica > 0)
	{
		for(var br = 0;br < broiKvadratchetaVsegashnataRedica;br = br + 1)
		{
			context.fillRect(br * 10, segashnaRedica * 10, 10, 10);
		}
		segashnaRedica = segashnaRedica + 1;
		broiKvadratchetaVsegashnataRedica = broiKvadratchetaVsegashnataRedica - 1;
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

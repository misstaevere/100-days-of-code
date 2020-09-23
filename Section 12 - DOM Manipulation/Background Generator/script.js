var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// 2. Display the initial CSS linear gradient property on page load.
body.onload = function() {
	setGradient();
}

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
var randomBtn = document.querySelector(".random");

function newColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

function randomColor() {
	color1.value = newColor();
	color2.value = newColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomColor);
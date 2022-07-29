var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setBackground() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function buttonRCG() {
	button.addEventListener("click", ()=>
	{
		RCG1();
		RCG2();
		setBackground();
	})
};

function RCG1() {
		var letters = '0123456789ABCDEF';
  		var color = '#';
		for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		}
		color1.value = color;
		delete(color);
}

function RCG2() {
		var letters = '0123456789ABCDEF';
  		var color = '#';
		for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		}
		color2.value = color;
		delete(color);
}

function setGradient() {
	
	body.addEventListener("load", ()=>{
		setBackground();
	})
	buttonRCG();
	setBackground();
};

setGradient();

color1.addEventListener("input", buttonRCG);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", buttonRCG);

color2.addEventListener("input", setGradient);

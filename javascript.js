var css = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient")

console.log(css);
console.log(color1);
console.log(color2);
function colorchanger() {
	body.style.background = "linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
console.log(body.style.background);

}


color1.addEventListener("input",colorchanger)
color2.addEventListener("input",colorchanger)
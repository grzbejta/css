const bgAnimation = document.getElementById("bgAnimation");

const numberOffColor = 400;

for (let i = 0; i < numberOffColor; i++) {
	const colorBox = document.createElement("div");
	colorBox.classList.add("colorBox");
	bgAnimation.appendChild(colorBox);
}

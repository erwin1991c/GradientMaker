const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const angleInput = document.getElementById('angle');
const stopsInput = document.getElementById('stops');
const generateButton = document.getElementById('generate-gradient');
const gradientPreview = document.getElementById('gradient-preview');

generateButton.addEventListener('click', () => {
	const color1 = color1Input.value;
	const color2 = color2Input.value;
	const angle = angleInput.value;
	const stops = stopsInput.value;
	
	// Generate gradient code here using the input values
	const gradientCode = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
	
	// Apply the generated gradient to the preview element
	gradientPreview.style.background = gradientCode;
});

const button = document.querySelector('#button-colour');
console.log(button);

function randomColour(){
	return (Math.random() * 255).toFixed()
}

button.addEventListener('click', () => {
	const newColour = `rgb(${randomColour()},${randomColour()},${randomColour()})`
	button.innerHTML = newColour;
	document.body.style.background = newColour;
});

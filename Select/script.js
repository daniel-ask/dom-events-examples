const movies = {
	quietPlace2: ["11:00am", "01:00pm", "04:00pm"],
	inTheHeights: ["08:00am", "12:30pm", "08:00pm"],
	fastFurious23: ["11:00pm"]
}

const [selectMovie, selectTime] = document.querySelectorAll('select');

function changeTimes(){
	selectTime.disabled = false;
	const selectedMovie = selectMovie.options[selectMovie.selectedIndex].value;
	// console.log(movies[selectedMovie]);
	console.log(selectTime.options)
	while(selectTime.options.length){
		selectTime.remove(0);
	}

	console.log(document.body.children)

	for(let time of movies[selectedMovie]){
		const newOption = new Option(time);
		console.log(newOption);
		selectTime.options.add(newOption);
	}

	console.log(selectTime.options[selectTime.selectedIndex].innerHTML);
	// if(selectTime.options[selectTime.selectedIndex].innerHTML == '11:00pm'){
	// 	window.open();
	// }
}
selectMovie.addEventListener('change',changeTimes);
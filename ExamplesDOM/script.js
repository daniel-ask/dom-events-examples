console.log(document);
console.log(typeof document);
console.log(document.__proto__);

const h1Title = document.createElement('h1');
document.body.prepend(h1Title);

const h1Content = document.createTextNode('Gotta Go FAST!');
console.log(h1Content);

h1Title.appendChild(h1Content);

const orderedList = document.getElementById('student-order');
console.log(orderedList);

// orderedList.style.background = "black"

const listItems = document.getElementsByTagName('li');
document.get
console.log(listItems);

listItems[2].style.background = 'white';

const secondListItem = document.querySelector('#second-item');

secondListItem.innerHTML = 'THIS IS THE SECOND ITEM'
secondListItem.style.background = 'cyan';

const redBackgroundItem = document.querySelectorAll('.red-background');
console.log(redBackgroundItem);
redBackgroundItem[1].style.background = 'red'

const newThirdItem = document.createElement('li');
newThirdItem.innerHTML = 'NEW SECOND ELEMENT';

orderedList.insertBefore(newThirdItem, secondListItem);

orderedList.replaceChild(newThirdItem, secondListItem);

function clickOl(){
	console.log('GOOD BYE');
}

function mouseOverOL(){
	h1Title.innerHTML = 'YOU ARE MOUSING OVER THE OL'
}
function clickH1(){
	console.log('HELLO');
}

h1Title.addEventListener('click', clickH1);


h1Title.removeEventListener('click',clickH1);

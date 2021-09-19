const cards = document.querySelectorAll(".card");
// console.log(cards);

//variables
var isFlipped = false;
var firstCard = null;
var secondCard = null;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
	this.classList.add("flip");
	if (!isFlipped) {
		isFlipped = true;
		firstCard = this;
	} else {
		secondCard = this;
		checkIt();
	}
}

let checkIt = () => {
	if (firstCard.dataset.image === secondCard.dataset.image) success();
	else fail();
}

let removeEventListener = (event, action, ...elements) => {
	elements.forEach((element) => element.removeEventListener(event, action));
}

let success = () => {
	removeEventListener("click", flip, firstCard, secondCard);
	reset();
}

function fail() {
	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");
		reset(false, null, null);
	}, 1000);
}

function reset(...restParams) {[isFlipped, firstCard, secondCard] = restParams}

let shuffle = () => {
	cards.forEach((card) => {
		card.style.order = Math.floor(Math.random() * 16);
	});
}
window.onload = shuffle

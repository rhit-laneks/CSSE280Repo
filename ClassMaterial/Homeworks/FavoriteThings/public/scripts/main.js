/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Kaylee Lane
 */

/** namespace. */
var rhit = rhit || {};


rhit.counter = 0;

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");

	
	$("#counterButtonsGroup button").click((event) => {
		const dataAmount = $(event.target).data("amount");
		const dataIsMultiplication = !!$(event.target).data("isMultiplication");
		rhit.updateCounter(dataAmount, dataIsMultiplication);
	});

	$("#colorButtonsGroup button").click((event) => {
		console.log("clicked color");
		const color = $(event.target).data("color");
		rhit.updateColor(color);
	})
};

rhit.updateCounter = function (amount, isMultiplication) {
	if(isMultiplication) {
		rhit.counter = rhit.counter * amount;
	} else {
		rhit.counter = rhit.counter + amount;
	}
	$("#counterText").html(`${rhit.counter}`);
};

rhit.updateColor = function (color) {
	const box = document.getElementById('favoriteColorBox');

	box.style.backgroundColor = color;
	
	$(`#favoriteColorBox`).html(`${color}`);
}

rhit.main();



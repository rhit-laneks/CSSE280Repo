

/** namespace. */
var rhit = rhit || {};

rhit.PageController = class {
	constructor() {
	// Enable the onclick listener
}

	updateView() {

	}
};

rhit.Game = class {
	constructor() {
	// TODO: Make instance variables
}

	pressedButtonAtIndex(buttonIndex) {

	}

	getMarkAtIndex(buttonIndex) {
		return "X"; // TODO: Implement
	}

	getState() {
		return "X's Turn"; // TODO: Implement
	}
};

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();

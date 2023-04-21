/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Kaylee Lane
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";
let counter = 0;

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	document.querySelector("#decrementButton").onclick = (event) => {
		console.log("decrement button");
		counter = counter - 1;
		updateView();
	  };
	  document.querySelector("#resetButton").onclick = (event) => {
	   console.log("reset button");
	   counter = 0;
	   updateView();
	  };     
	  document.querySelector("#incrementButton").onclick = (event) => {
		console.log("increment button");
		counter = counter + 1;
		updateView();
	  };

	  
   
};

`Count = ${counter}`
function updateView() {
   document.querySelector("#counterText").innerHTML = `Count = ${counter}`
 }




rhit.main();

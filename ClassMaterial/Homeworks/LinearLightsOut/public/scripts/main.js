
var rhit = rhit || {};

rhit.PageController = class {
	constructor() {
		this.game = new rhit.Game();

		const lights = document.querySelectorAll(".myButton");
		for(const light of lights) {
			light.onclick = (event) => {
				console.log("CLICKED A LIGHT!");
				const lightIndex = parseInt(light.dataset.buttonIndex);
				console.log("I clicked button:", lightIndex);
				this.game.pressButtonAtIndex(lightIndex);
				this.updateView();
			}
		}

		document.querySelector("#newGameButton").onclick = (event) => {
			this.game = new rhit.Game();
			this.updateView();
		};

		this.updateView();

	}

	updateView() {
		const lights = document.querySelectorAll(".myButton");
		lights.forEach((light, index) => {
			light.innerHTML = this.game.getMarkAtIndex(index);

		});
	}

	//updating the text will be similar to favorite things number
	// document.querySelector("#gameText").innerHTML = ;
};



rhit.Game = class {

	static NUM_BUTTONS = 7;
    static LIGHT_STATE = {
        ON: "1",
        OFF: "0"
    }



	constructor() {
		document.querySelector("#gameText").innerHTML = `Make the buttons match`;
		this.buttonValues = [];
        this.numPresses = 0;
		for (let k = 0; k < rhit.Game.NUM_BUTTONS; k++) {
            this.buttonValues.push(rhit.Game.LIGHT_STATE.OFF);
        }
        this.randomizeButtons();

	}

	randomizeButtons() {
        // Start with a win and randomly press buttons
        for (let k = 0; k < rhit.Game.NUM_BUTTONS * 10; k++) {
			console.log("LOOPING");
            this.pressButtonAtIndex(Math.floor(Math.random() * this.buttonValues.length), true)
			
        }
        if (this.isGameWon()) {
            this.pressButtonAtIndex(Math.floor(Math.random() * this.buttonValues.length), true)
        }
        this.numPresses = 0;
    }


	pressButtonAtIndex(buttonIndex, isSetup = false) {
		if(isSetup == false && this.isGameWon()) {
			console.log("The game is over");
		return;
		}

		for(let i = -1; i < 2; i++) {
			if((buttonIndex + i) >= 0 && (buttonIndex + i) < 7) {
				if(this.buttonValues[buttonIndex + i] == rhit.Game.LIGHT_STATE.ON) {
					this.buttonValues[buttonIndex + i] = rhit.Game.LIGHT_STATE.OFF;
					document.querySelector(`#button${buttonIndex + i}`).classList.remove('light-on');
					document.querySelector(`#button${buttonIndex + i}`).classList.add('light-off');
					console.log("BUTTON IS:", this.buttonValues[buttonIndex + i]);
				} else {
					this.buttonValues[buttonIndex + i] = rhit.Game.LIGHT_STATE.ON;
					document.querySelector(`#button${buttonIndex + i}`).classList.remove('light-off');
					document.querySelector(`#button${buttonIndex + i}`).classList.add('light-on');
					console.log("ELSE BUTTON IS:", this.buttonValues[buttonIndex + i]);
				}
			}
		}
		if(!isSetup) {
			this.numPresses++;
		}

		if(isSetup == false && this.isGameWon()) {
			//Change text to say: you won in _ moves
			document.querySelector("#gameText").innerHTML = `You won in  ${this.numPresses} moves`;
		} else if(isSetup == false) {
			//change text to say you have taken_ moves so far
			if(this.numPresses == 1) {
				document.querySelector("#gameText").innerHTML = `You have taken ${this.numPresses} move so far`;
			} else {
				document.querySelector("#gameText").innerHTML = `You have taken ${this.numPresses} moves so far`;

			}
		}


	}

	isGameWon() {

		var lineOfLights = "";
		for(let i = 0; i < 7; i++) {
			lineOfLights+= this.buttonValues[i];

		}
		console.log("lights",lineOfLights);
		if(lineOfLights == "0000000" || lineOfLights == "1111111") {
			return true;
		} else {
			return false;
		}
	}

	getMarkAtIndex(buttonIndex) {
		return this.buttonValues[buttonIndex];
	}

};



/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();

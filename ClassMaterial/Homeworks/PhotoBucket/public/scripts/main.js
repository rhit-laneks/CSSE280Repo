
var rhit = rhit || {};

rhit.FB_COLLECTION_PICS = "Pics";
rhit.FB_KEY_CAPTION = "caption";
rhit.FB_KEY_IMAGEURL = "imageUrl";
rhit.FB_KEY_LAST_TOUCHED = "lastTouched";
rhit.fbImagesManager = null;
rhit.fbSingleImageManager = null;

// From: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
function htmlToElement(html) {
	var template = document.createElement('template');
	html = html.trim();
	template.innerHTML = html;
	return template.content.firstChild;
   }



rhit.ListPageController = class {
	constructor() {

		document.querySelector("#submitAddImage").addEventListener("click", (event) => {
			const caption = document.querySelector("#inputCaption").value;
			const imageUrl = document.querySelector("#inputImageUrl").value;
			rhit.fbImagesManager.add(imageUrl, caption);

		});

		$("#addImageDialog").on("show.bs.modal",  (event) => {
			//Pre animation
			document.querySelector("#inputCaption").value = "";
			document.querySelector("#inputImageUrl").value = "";
		});

		$("#addImageDialog").on("shown.bs.modal",  (event) => {
			//Post animation
			document.querySelector("#inputImageUrl").focus();
		  });

		  //Start listening!
		  rhit.fbImagesManager.beginListening(this.updateList.bind(this));

	}

	
	updateList() {
		console.log("I need to update the list on the page!");
		console.log(`Num images = ${rhit.fbImagesManager.length}`);

		

		const newList = htmlToElement('<div id="columns"></div>')
		//Fill the imageListContainer with image/caption cards using a loop
		for(let i = 0; i < rhit.fbImagesManager.length; i++) {
			const pic = rhit.fbImagesManager.getImageAtIndex(i);
			const newCard = this._createCard(pic);

			newCard.onclick = (event) => {
				window.location.href = `/pic.html?id=${pic.id}`;

			};

			newList.appendChild(newCard);
		}

	
		const oldList = document.querySelector("#columns");
		oldList.removeAttribute("id");
		oldList.hidden = true;

		oldList.parentElement.appendChild(newList);
	}	


	_createCard(imageCard) {
		return htmlToElement(`<div class="pin">
		  <img src=${imageCard.imageUrl} alt=${imageCard.caption}>
		  <p class="caption">${imageCard.caption}</p>
		
	  </div>`);
	}
   }

   
   rhit.ImageCard = class {
	constructor(id, imageUrl, caption) {
	  this.id = id;
	  this.imageUrl = imageUrl;
	  this.caption = caption;  
	}
   }

   rhit.FbImagesManager = class {
	constructor() {
	  this._documentSnapshots = [];
	  this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_PICS);
	  this._unsubscribe = null;
	}
	add(imageUrl, caption) {  

		// Add a new document with a generated id.
		this._ref.add({
			[rhit.FB_KEY_CAPTION]: caption,
			[rhit.FB_KEY_IMAGEURL]:imageUrl,
			[rhit.FB_KEY_LAST_TOUCHED]: firebase.firestore.Timestamp.now(),
		})
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
	  }
	beginListening(changeListener) {  
		this._unsubscribe = this._ref
		.orderBy(rhit.FB_KEY_LAST_TOUCHED, "desc")
		// .limit(50)
		.onSnapshot((querySnapshot) => {
		  console.log("update!");
		  this._documentSnapshots = querySnapshot.docs;
			changeListener();
		});
	}

	stopListening() {  
		this._unsubscribe();
	  }

	get length() {  
		return this._documentSnapshots.length;
	  }
	getImageAtIndex(index) {  
		const docSnapshot = this._documentSnapshots[index]; 
		const pic = new rhit.ImageCard(docSnapshot.id,
			docSnapshot.get(rhit.FB_KEY_IMAGEURL),
			docSnapshot.get(rhit.FB_KEY_CAPTION),);
		return pic;
	 }
   }

   rhit.DetailPageController = class {
	constructor() {
		document.querySelector("#submitEditCaption").addEventListener("click", (event) => {
			const caption = document.querySelector("#inputCaption").value;
			rhit.fbSingleImageManager.update(caption);

		});

		$("#editImageDialog").on("show.bs.modal",  (event) => {
			//Pre animation
			document.querySelector("#inputCaption").value = rhit.fbSingleImageManager.caption;
			document.querySelector("#inputImageUrl").value = rhit.fbSingleImageManager.image;
		});

		$("#editImageDialog").on("shown.bs.modal",  (event) => {
			//Post animation
			document.querySelector("#inputCaption").focus();
		  });


		document.querySelector("#submitDeleteImage").addEventListener("click", (event) => {
			rhit.fbSingleImageManager.delete().then(function () {
				console.log("Document successfully deleted!");
				window.location.href = "/";
			}).catch(function (error) {
				console.error("Error removing document: ", error);
			});
		});

		rhit.fbSingleImageManager.beginListening(this.updateView.bind(this));
	}
	updateView() { 
		document.querySelector("#cardCaption").innerHTML = rhit.fbSingleImageManager.caption;
		document.querySelector("#cardImage").src = rhit.fbSingleImageManager.imageUrl;
		document.querySelector("#cardImage").alt = rhit.fbSingleImageManager.caption;
	}
}

rhit.FbSingleImageManager = class {
	constructor(imageCardId) {
	  this._documentSnapshot = {};
	  this._unsubscribe = null;
	  this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_PICS).doc(imageCardId);///////////////////
	}
	beginListening(changeListener) {
		this._unsubscribe = this._ref.onSnapshot((doc) => {
			if (doc.exists) {
				console.log("Document data:", doc.data());
				this._documentSnapshot = doc;
				changeListener();
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
				// window.location.href = "/";
			}
		});


	}
	stopListening() {
	  this._unsubscribe();
	}
	update(caption) {

		this._ref.update({
			[rhit.FB_KEY_CAPTION]:caption,
			[rhit.FB_KEY_LAST_TOUCHED]: firebase.firestore.Timestamp.now(),
		})
		.then(() => {
			console.log("Document successfully updated!");
		})
		.catch(function(error) {
			console.error("Error updating document: ", error);
		});
	}


	delete() {
		return this._ref.delete()
	}

	get caption() {
		return this._documentSnapshot.get(rhit.FB_KEY_CAPTION);
	}

	get imageUrl() {
		return this._documentSnapshot.get(rhit.FB_KEY_IMAGEURL);
	}

   }


rhit.main = function () {
	console.log("Ready");
	if(document.querySelector("#listPage")) {
		console.log("You are on the list page.");
		rhit.fbImagesManager = new rhit.FbImagesManager();
		new rhit.ListPageController();

	}

	if(document.querySelector("#detailPage")) {
		console.log("You are on the detail page.");

		const queryString = window.location.search;
		console.log(queryString);
		const urlParams = new URLSearchParams(queryString);
		const picId = urlParams.get("id");

		if(!picId) {
			window.location.href = "/";
		}
		rhit.fbSingleImageManager = new rhit.FbSingleImageManager(picId);
		new rhit.DetailPageController();
	}
};

rhit.main();


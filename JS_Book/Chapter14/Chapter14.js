//Chapter 14 Reference File: HTML5 APIs



//Data attributes

// The data- attribute is a way of embedding data in a web page using custom attributes 
// that are ignored by the browser.
//Examples:
// data-powers = 'flight superSpeed'
// data-rating = '5' 
// data-dropdown 
// data-user = 'DAZ' 
// data-max-length = '32'

//using data attributes
<div id='hero' data-powers='flight superSpeed'>
Superman
</div>

const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
// << 'flight superSpeed'


//HTML5 APIs

// Here is a basic example of storing information. To save a value locally, use:

localStorage.setItem('name', 'Walter White');
            
// To illustrate that it’s being saved locally, try completely closing your browser, reopening it, and entering the following code in the console:

localStorage.getItem('name'); 
// << "Walter White"
            
// Rather than using the getItem() and setItem() methods, assignment can be used instead. In the next example, we simply reference localStorage.name as if it was a variable to change its value:

localStorage.name = 'Heisenberg'; 

console.log(localStorage.name); 
// << "Heisenberg";
            
// To remove an entry from local storage, use the removeItem method:

localStorage.removeItem('name');
            
// Alternatively, this can be done using the delete operator:

delete localStorage.name;
            
// To completely remove everything stored in local storage, use the clear() method:

localStorage.clear();


// The code following will add an event listener that logs information about any changes to the Web Storage (note that this example won't work locally as it needs to be running on a server):
addEventListener('storage', (event) => {
console.log(`The ${event.key} was updated from ${event.oldValue} to ${event.newValue} and saved in 
${event.storageArea}`) }, false);


//Geolocation

// The Geolocation API is used to obtain the geographical position of the device. This means it can be used to find the user’s exact location, then link to nearby places or measure the speed at which the user is moving. 
            
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 
    }

navigator.geolocation.getCurrentPosition(youAreHere);


// This method returns an ID that can be used to reference the position being watched:
const id = navigator.geolocation.watchPosition(youAreHere);
            
// The clearWatch() method can be used to stop the callback being called, using the ID of the watch as an argument:

navigator.geolocation.clearWatch(id);



//Web workers////////////////////////////////////////////
const worker = new Worker('task.js');

// To post a message to the worker, the following code is used inside the main script:

worker.postMessage('Hello');
            
// To post a message from the worker, the following is used in the worker script:

self.postMessage('Finished');


// log any data returned from the worker to the console:
worker.addEventListener('message', (event) => {
console.log(event.data);
}, false);


// When a worker has completed its task, it can be stopped using the terminate() method from within the main script:
worker.terminate();
            
// Or using the close() method from inside the worker script:
self.close();


//Notifications

if(window.Notification) {
    Notification.requestPermission();
}
// This returns a promise with the permission property of the Notification object set to either 'granted' or 'denied'. If it’s set to granted, you can create a new notification using a constructor function, like so:

if(window.Notification) {
Notification.requestPermission()
.then((permission) => {
    if(Notification.permission === 'granted') {
    new Notification('Hello JavaScript!');
    }
});
}

// The function also accepts a second parameter, which is an object of options
const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepointlogo.png'
});


// You can close the notification programmatically using the close() method:
notification.close();


// you could open a new window when the user clicked on the notification using the following code:
notification.addEventListener('click', () => {
window.open('https://sitepoint.com')
}, false);


//Multimedia

// An audio clip can be inserted into a page with the <audio> tag, using the src attribute to point to the audio file:
{/* <audio src='/song.mp3' controls>
Your browser does not support the audio element.
</audio> */}


// A video clip can be inserted with the <video> tag, using the src attribute to point to the movie file:
{/* <video src='http://movie.mp4' controls>
Your browser does not support the video element.
</video> */}


// Some of the properties are only available once the browser has received all the metadata associated with the video. This means that, in order to ensure a value is returned, you should use an event listener that fires once the metadata has loaded, like the one shown below:
video.addEventListener('loadedmetadata', () => { console.log(video.duration); });
            


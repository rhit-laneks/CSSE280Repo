//Chapter 13: Ajax

// Ajax is a technique that allows web pages to communicate asynchronously with 
// a server, and it dynamically updates web pages without reloading. This enables 
// data to be sent and received in the background, as well as portions of a page 
// to be updated in response to user events, while the rest of the program continues to run



// The Fetch API provides a global fetch() method that only has one mandatory argument, which is the URL of the resource you wish to fetch.
fetch('https://example.com/data')
            .then( // code that handles the response )
            .catch( // code that runs if the server returns an error )




// we can use an if block to check if the request was successful, 
// and throw an error otherwise
const url = 'https:example.com/data';

fetch(url)
.then((response) => {
if(response.ok) {
return response;
}
throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )





// an example of how a redirect response promise would be resolved
fetch(url)
.then( response => response.redirect(newURL)); // redirects to another URL
.then( // do something else )
.catch( error => console.log('There was an error: ', error))
            

// an example of how a text response promise would be resolved
fetch(url)
.then( response => response.text() ); // transforms the text stream into a JavaScript string
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))


// an example of how a file response promise would be resolved
fetch(url)
.then( response => response.blob() ); // transforms the data into a blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))


// an example of how a JSON response promise would be resolved
fetch(url)
.then( response => response.json() ); // transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))


// create your own response objects using a constructor function
const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
    });


// A constructor function is used to create a new Request object
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
    });
 
    
// Once the Request object is assigned to a variable, it can then be used as 
// the parameter of the fetch() method
fetch(request)
.then( // do something with the response )
.catch( // handle any errors)




// Alternatively, you can enter the URL and object directly as arguments of the fetch() method, without having to create a Request object
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then( // do something with the response )
.catch( // handle any errors)



// A new Headers instance is created using a constructor function
const headers = new Headers();

// The constructor function can be provided with an optional argument containing any initial header values
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })



// We can use the Headers, Request and Response objects to put together a typical example that sets up the URL, Request and Headers before calling the fetch() method

const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

const request = (url,{
headers: headers
})

fetch(request)
.then( function(response) {
if(response.ok) {
return response;
}
throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )
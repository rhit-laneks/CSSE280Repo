//Chapter 11 Callbacks, Closure, Async, Promises


//Callbacks
//functions passed to other functions as arguments and then 
// invoked inside the function they are passed to

//example of a function that accepts a callback
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
    }

//callback
function selfDestruct(){
    console.log('BOOOOM!');
    }

//Using the callback
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
    
    // << 'This tape will self-destruct in five seconds ... '
    // << 'Hmmm, should I accept this mission or not ... ? '
    // << 'BOOOOM!'



//How to make Asyn

// functions are preceded by the async keyword and allow you to write asynchronous
//  code as if it was synchronous. This is achieved by using the await operator before an asynchronous function. 
// This will wrap the return value of the function in a promise that can then be assigned to a variable. 
// The next line of code is not executed until the promise is resolved.

async function loadGame(userName) {

    try {
    const user = await login(userName);
    const info = await getPlayerInfo (user.id);
    // load the game using the returned info
    }

    catch (error){
    throw error;
    }
}


// How to make Promises
// A promise is created using a constructor function. This takes a function called an executor as 
// an argument. The executor initializes the promise and starts the asynchronous operation. It also 
// accepts two functions as arguments: the resolve() function is called if the operation is successful,
//  and the reject() function is called if the operation fails.

const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

//Promise Example:
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
    }

const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
    (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
    });


//Closures
// A closure is formed when the inner function is returned by the outer function, 
// maintaining access to any variables declared inside the enclosing function.

function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
    }

    const closure = outer(); //We can now assign a variable to the return value of the outer() function:

    closure();
// << Outside!
// Inside!
            

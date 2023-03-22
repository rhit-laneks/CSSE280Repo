//JS Book reference: Callbacks Section


//A callback is a function that is passed as an argument to another function.

//Example of a function called sing(), which accepts the name of a song:

function sing(song) {
console.log(`I'm singing along to ${song}`);
}

sing('Let It Go')
//<< 'I'm singing along to Let It Go'
            

//adding a callback parameter to sing() makes it more flexible:
//The callback is provided as a parameter, then invoked inside the body of the function.
function sing(song,callback) {
console.log(`I'm singing along to ${song}.`);
callback();
}


//You can't define a parameter as a callback. The following code checks if an argument is a function.
//and will only attempt to invoke the callback if it is a function.
if(typeof(callback) === 'function'){
callback();
}
            

//the following function can be used as the callback:
function dance() {
console.log("I'm moving my body to the groove.");
}
            
//pass dance into sing
sing('Let It Go',dance);  
//<< 'I'm singing along to Let It Go.'
//'I'm moving my body to the groove.'
            
//No parentheses becuaes the argument is only a reference to the function. 
//The actual callback is invoked in the body of the function, where parentheses are used.

//A function can take an anonymous function as a callback:
sing('Let It Go',()=>{ console.log("I'm standing on my head.");});
//<< 'I'm singing along to Let It Go.'
//'I'm standing on my head.'

//Anonymous functions should only be used for callbacks if they are simple.
//They can become hard to read and difficult to debug

//Sorting arrays with a callback
 //Using .sort() on an array of numbers sorts them in alphabetical order rather than numerical order.
 //We can solve this problem by providing a callback function to the sort method that tells it how to compare two values.

 function numerically(a,b){ //This function can be used for this purpose
    return a-b;
    }

//The numerically function returns A negative value if a comes before b, 0 if a and b are equal, and a positive value if a comes after b
[1,3,12,5,23,18,7].sort(numerically); //Using the function
//returns [1, 3, 5, 7, 12, 18, 23]
            
//In some rare instances where an array includes some very large and negative numbers, an overflow error can occur 
//and the result of a-b becomes smaller than the smallest number that JavaScript is able to cope with. If this is the case, 
//the following function can be used as a callback instead:

function numerically (a,b) {
if (a < b) {
    return -1;
} else if (a> b) {
    return 1;
} else {
    return 0;
}
}


//The forEach() loop will loop through the array and invoke a callback function using each value as an argument.
// The callback function takes three parameters, the first represents the value in the array, the second represents
//the current index and the third represent the array that the callback is being called on. The example above could be written as:

colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );
// <<  "Color at position 0 is Red"
//     "Color at position 1 is Green"
//     "Color at position 2 is Blue"

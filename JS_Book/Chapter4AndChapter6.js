//JS Book reference: Chapter 4, Chapter 6


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



//Chapter 6

//Getting elements


const body = document.body; //access the body element of a web page and assign it to the variable body
typeof body; //check its type
//"object";
                
//This is a special Node object with a number of properties and methods that we can use to find information about, or modify, the body element.

body.nodeType; //find out what type of node it is
//returns 1
                
All nodes have a  they are. These are summmarized in the table below.
//The numerical codes that signify what type a node is are:
//1	element
//2	attribute
//3	text
//8	comment
//9	body

body.nodeName; //find the name of the element
//<< "BODY" is returned in uppercase letters
                
//Legacy DOM shortcut methods:
// Document.body returns the body element of a web page, as we saw in the previous example.
// Document.images returns a node list of all the images contained in the document.
// Document.links returns a node list of all the <a> elements and <area> elements that have an href attribute.
// Document.anchors returns a node list of all the <a> elements that have a name attribute.
// Document.forms returns a node list of all the forms in the document.

//There are two ways to turn a Node list into an array:
const imageArray = Array.from(document.images);

const imageArray = [...document.images];

//getting elements by id:
const h1 = document.getElementById('title');

//getting elements by tag name
const listItems = document.getElementsByTagName('li');
//using index notation to find each individual parargraph in the list
listItems[0];
// << <li class='hero'>Superman</li>
listItems[1];
// << <li class='vigilante hero' id='bats'>Batman</li>
listItems[2];
// << <li class='hero'>Wonder Woman</li>

//getting elements by class name
const heroes = document.getElementsByClassName('hero');

//Query selectors
document.querySelector() //allows you to use CSS notation to find the first element in the document that matches a CSS selector provided as an argument.
document.querySelectorAll() // also uses CSS notation but returns a node list of all the elements in the document that match the CSS query selector

document.querySelector('#bats'); //could be used instead of document.getElementById()
                // << <li class="vigilante hero" id="bats">Batman</li>
document.querySelectorAll('.hero'); //could be used instead of document.getElementsByClassName
                // << NodeList [<li class="hero">, <li id="bats">, <li class="hero">]

                

const wonderWoman = document.querySelector('li:last-child'); //returns only the last list item in the document
                
//The querySelector() method can be called on any element, rather than just document. 

const ul = document.querySelector('ul#roster'); //get a reference to the <ul> element

const batman = ul.querySelector('li#bats'); //find a <li> element with an id of 'bats'


document.getElementById('roster'); //returns all the child nodes of the element with an id attribute of roster

document.children //will only contain list items

document.firstChild; //returns the first child of a node
document.lastChild //returns the last child of a node

// parentNode property returns the parent node of an element
// The nextSibling property returns the next adjacent node of the same parent
// The previousSibling property returns the previous adjacent node

textNode.nodeValue; //find the text contained inside a text node 
//the textContent property resturns the text content of an element as a string

//The getAttribute() method returns the value of the attribute provided as an argument


//Setting an element's attributes

// setAttribute can change the value of an element’s attributes. 
//It takes two arguments: the attribute that you wish to change, and the new value of that attribute.

wonderWoman.setAttribute('class', 'villain'); //change the class of the element in the wonderWoman variable to 'villain', we could do so using this code:

                
//The setAttribute method can be used to add it to the element. 

wonderWoman.setAttribute('id','amazon'); //dd an id of 'amazon' to the wonderWoman element



wonderWoman.id; //The legacy DOM allows access to attributes using dot notation
//<< 'amazon'

wonderWoman //the changes have been made, as this is a live reference to the element:
//<< <li class="villain" id="amazon">Wonder Woman</li>                               
//This notation is still supported, although some attribute names such as class and for are reserved keywords in JavaScript, so we need to use className and htmlFor instead.
                
// The className property allows the class of an element to be set directly.
wonderWoman.className = 'hero';
//Changing the className property of an element by assignment will overwrite all other classes that have already been set on the element.
//This problem can be avoided by using the classList property instead.
//The classList property is a list of all the classes an element has.

wonderWoman.classList.add('warrior'); //The add method can be used to add a class to an element without overwriting any classes that already exist

wonderWoman.classList.remove('warrior'); //The remove method will remove a specific class from an element

//The toggle method will add a class if an element doesn’t have it already, and remove the class if it does have it. 
// It returns true if the class was added and false if it was removed.                
wonderWoman.classList.toggle('hero'); // will remove the 'hero' class
// false
wonderWoman.classList.toggle('sport'); // will add the 'hero' class back
// true

// The contains method will check to see if an element has a particular class
wonderWoman.classList.contains('hero');
// << true
wonderWoman.classList.contains('villain');
// << false

//the classList property is only available in Internet Explorer version 10 and above. 
// If you want to support older versions of Internet Explorer, you could create a function that will add an extra class to an element, rather than just replace the current class.
function addClass(element,newClass){
    if (element.className) {
        element.className = element.className + ' ' + newClass;
    } else {
        element.className = newClass;
    }
    return element.className;
    }

//The document object has a createElement() method that takes a tag name as a parameter and returns that element. 
const flash = document.createElement('li'); //create a new list item as a DOM fragment in memory

// To add some content, we’ll need to create a text node which can be done using the document.createTextNode() method.
// It takes a parameter, which is a string containing the text that goes in the node.
const flashText = document.createTextNode('Flash');

// The appendChild() method will add another node (given as an argument) as a child node
flash.appendChild(flashText); //makes text node a child node of the list element node

// to create a new element with text content:
// Create the element node
// Create the text node
// Append the text node to the element node

//could also use the textContent property to dd a text node to an element without the need to append it
const flash = document.createElement('li');
flash.textContent = 'Flash';

function createElement (tag,text) { //this function performs the two steps we used to create the new element, and then returns that element
    const el = document.createElement(tag);
    el.textContent = text;
    return el
    }


// The appendChild() and insertBefore() methods can be used to move markup that already exists in the DOM as well. 
// This is because a reference to a single DOM element can only exist once in the page, so if you use multiple inserts and appends, only the last one will have an effect. If an element is required to appear in several different places in the document, it would need to be cloned before each insertion.
// There is no insertAfter() method, so you need to ensure you have access to the correct elements to place an element exactly where you want it.
// An element can be removed from a page using the removeChild() method. This method is called on the parent node and has a single parameter, which is the node to be removed. It returns a reference to the removed node.

// The replaceChild() method can be used to replace one node with another.

//The innerHTML element property returns all the child elements of an element as a string of HTML

//Updating CSS

const heroes = document.getElementById('roster');
const superman = heroes.children[0];

superman.style.border = "red 2px solid"; // add red border

// Any CSS property names that are separated by dashes must be written in camelCase notation
superman.style.backgroundColor = 'blue';// the CSS property background-color becomes backgroundColor
superman.style['background color'] = 'blue'; //or provide the properties as a string with bracket notation
superman.style.display = 'none'; //hide element
superman.style.display = 'block'; //make element reappear

// getComputedStyle() that will retrieve all the style information of an element that is given as a parameter

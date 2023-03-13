//Reference document for JavaScript. Content references JS book chapter 2

//Comments:

//single line comment

/*  multi
    line
    comment*/


//Grammar

//two statements on two lines:
const message = 'Hello World!'; 
alert(message); /*semicolons are not needed, but it is best practice to include 
them and they help many automated services work properly*/

//the same statements on one line:
const message = 'Hello World!';alert(message);

//A block is a series of statements that are collected together inside curly braces
{
// this is a block containing 2 statements
const message = 'Hello!';
alert(message);
} //no semicolon needed to terminate blocks
    

/*Reserved words cannot be used to name variables, function parameters, or object properties
Reserved words are: abstract, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, 
goto, if, implements, import, in instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, 
true, try, typeof, var, volatile, void, while, with, yield 

undefined, NaN, Infinity are not reserved but should be treated as if they are */


//Primitive Data Types
//The 6 primitive data types in JS are String, Symbol, Number, Boolean, Undefined, and Null

typeof 'hello'; //string 
//operator is typeof (unary operator becuase requires only one operand) and operand is 'hello'
typeof 10; //number
typeof true; //boolean
typeof {ninja: 'turtle'}; //object
typeof [ 1, 2, 3 ]; //object


//Variables
const name1 = 'Alexa'; // This won't be assigned to another string
let score = 0; // This value may change during the program

name1 = 'Bob'; //can't do becuase name1 is const
score = 5; //can reassign score because it was declares using "let"

let x = 3, y = 4, z = 5; //declare and assign multiple variables at the same time





const name2 = { value: 'Alex'} //For non-primitive data type, const does not make it immutable
name2.value = 'Sam'; //underlying data inside an object can change so this line is valid

name2 = { value: 'Bob' } // This line produces and error because const prevents you from reassigning a variable to another object


//Scope

const a = 1;
{ const a = 3; a; console.log(a); } //prints 3
console.log(a); //prints 1

let b = 2;
{ b = 4; b; console.log(b); } //prints 4
console.log(b); // prints 4

{ c = 5; c; console.log(c); } //prints 5
console.log(c); //prints 5
                
{ const d = 6; d; console.log(d); } //prints 6
console.log(d); //d is not accessible outside the block

//Naming Constants and Variables

/* Valid names:
$name          The $ character is also used by the popular jQuery library, so using this in your variable names may also cause problems
_answer        Variables that start with an underscore generally refer to private properties and methods, so it's best to not follow this convention for your own variable names.
firstName      Camel case
last_name      Underscore
address_line1  Numbers can be used in names but not at the start*/


//Direct Assignment and Assignment By Refernece

const a = 1; //a references the primitive number 1
let b = a; // a = 1, b = 1
b = 2; // a = 1, b = 2

const c = { value: 1 }; //assigning a non-primitive value to a variable is done by reference, so any changes that are subsequently made will affect all references to that object
let d = c; // c.value = 1, d.value = 1
d.value = 2; // c.value = 2, d.value = 2



// Strings
'hello' //String literal is created by writing a group of characters inside quote marks
new String("hello");

//You can also create a string object using the following constructor function:
new String("hello") //[String: 'hello']
/* The previous line creates a new string that is the same as the string literal 'hello', although
 it will be classed as an object rather than a primitive data type. 
 For this reason it is preferable to use the string literal notation */

//'It's me' causes an error
"It’s me" // no error
'It\'s me' // also no error

/* The backslash is used to escape special characters in strings such as:
Single quote marks \'
Double quote marks \"
End of line \n
Carriage return \r
Tab \t*/

back = "This is a backslash \\"
console.log(back); //prints "This is a backslash \"

//String Properties and Methods
const name3 = 'Alexa'; // declare and assign a variable
console.log(name3);// prints Alexa

name3.length; // retrieve the name variable's length property
console.log(name3.length); //prints 5
name3['length']; // alternative notation, note the property name is in quote marks

/* All properties of primitive data types are immutable, meaning they’re unable to be changed. You can try, but your efforts will be futile:

name3.length;
<< 5

name3.length = 7; // try to change the length
<< 7

name3.length; // check to see if it's changed
<< 5 */


//String Properties and Methods
const n = 'Alexa';
n.length //We can access the properties of a string using dot notation
n['length']; //alternative notation, note the property name is in quote marks
//all properties of primitive data types are immutable

n.toUpperCase();//'ALEXA'
n.toLowerCase();//'alexa'
n.charAt(1);//'l'
n.indexOf('A'); //0
n.indexOf('z'); // -1
n.lastIndexOf('a'); //4
n.includes('a');// true
n.includes('z'); //false
n.startsWith('A');//true
n.startsWith('a');//false
n.endsWith('A');//false
n.endsWith('a');//true

'JavaScript'.concat('Ninja');//'JavaScriptNinja'
'Hello'.concat(' ','World','!');//'Hello World!'
'Java' + 'Script' + ' ' + 'Ninja';//'JavaScript Ninja'

'    Hello World     '.trim(); // the space in the middle will be preserved
// returns'Hello World'

'   \t\t  JavaScript Ninja! \r'.trim(); // escaped tabs and carriage returns are also removed
//returns 'JavaScript Ninja!'

'Hello'.repeat(2);// 'HelloHello'
            

//Template Literals: use the backtick character, ` , to deliminate the string
`Hello!`;
`She said, "It's Me!"`
const name4 = `Siri`;
`Hello ${ name4 }!`;
//returns'Hello Siri!'

const age = 39;
`I will be ${ age + 1 } next year`;
//returns 'I will be 40 next year'

`This is the start ...


.... and this is the end`
//returns 'This is the start ...\n\n\n.... and this is the end'

`This character, \`, is a backtick`
//retuns 'This character, `, is a backtick'

//Symbols: create unique values, which helps to avoid any naming collisions

const uniqueID = Symbol();
const uniqueID = Symbol('this is a unique ID'); //can add a description inside the parentheses (this is recommened).
typeof uniqueID;//'symbol'
console.log(uniqueID);//Symbol(this is a unique ID)
String(uniqueID)//'Symbol(this is a unique ID)'
const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');

//Numbers

typeof 42; // integer
//returns 'number'

typeof 3.14159; // floating point decimal
//returns 'number'

Number.isInteger(42);//true

Number.isInteger(3.142);//false

0xAF; // hexadecimal
0o47; // octal
0b1010; //binary
1e6; // means 1 multiplied by 10 to the power 6 (a million): 1000000
2E3; // 2 multiplied by 10^3 (two thousand): 2000
2.5e-3; // means 2.5 multiplied by 10 to the power -3 (0.001):  0.0025


//Number Methods

5..toExponential();//"5e+0"           
5 .toExponential();// "5e+0"
5.0.toExponential();// "5e+0"
(5).toExponential();//"5e+0"
const number = 5;
number.toExponential();//"5e+0"
                
//The toFixed() method rounds a number to a fixed number of decimal places:

const PI = 3.1415926;//undefined

PI.toFixed(3); // only one dot is needed when using constants or variables
//returns "3.142"              
//Note that the value is returned as a string, rather than a number.

//The toPrecision() method rounds a number to a fixed number of significant figures that is once again returned as a string (and often using exponential notation):
325678..toPrecision(2);// "3.3e+5"
2.459.toPrecision(2);// "2.5"

5 + 4.3;//addition
6 - 11; //subtraction
6 * 7; //multiplication
3/7; //division
2**3; //exponentiation
23%6 //remainder of a division (the result always has the same sign as the first number)
                

//Changing the Value of Variables

let points = 0; // initialize points score to zero
points = points + 10; // 10
points += 10;// 20
points -= 5; // decreases points by 5 (returns 15)
points *= 2; // doubles points (returns 30)
points /= 3; // divides value of points by 3 (returns 10)
points %= 7; // changes the value of points to the remainder if its current value is divided by 7 (returns 3)
                
let points = 5;
points ++; // 6              
points++; // will return 6, then increase points to 7
++points; // will increase points to 8, then return it
points--; // returns 8, but has decreased points to 7
--points; // decreases points to 6, then returns that value

//Infinity
1e308; // 1 with 308 zeroes!
2e308; // too big! (returns Infinity)
-1e309;//returns -Infinity
1/0;//returns Infinity              
//The smallest number that JavaScript can deal with is 5e-324. Anything below this evaluates to either 5e-324 or zero

5e-324; 
3e-325;
2e-325;// 0


//NaN: Not a Number

'hello' * 5; //NaN
typeof NaN; // number (when is a number not a number?!?)

//You can check if a value is a number that can be used by using the Number.isFinite() method. This will return true if the value is a number that isn't Infinity, -Infinity or NaN:

Number.isFinite(1/0); //false

Number.isFinite(-Infinity); //false

Number.isFinite(NaN); //false

Number.isFinite(42); //true


//Type Coercion: happens when the operands of an operator are of different types

'2' * 8; //16

'2' + 8; //28

//Converting Between Strings and Numbers

Number('23'); //23
Number('hello'); //NaN

const answer = '5' * 1; //5
typeof answer; // "number"

const answer = +'5'; //5
typeof answer; // 'number'


String(3); // '3'

3 +''; // '3'

10..toString(); //'10'

10..toString(2); //'1010'

28101..toString(36) // 'lol' (a million in base 36)

//Parsing Numbers

parseInt('1010',2); // converts from binary, back to decimal
// 10

parseInt('omg',36); // 31912

parseInt('23',10); //23

const address = '221B Baker Street';
parseInt(address, 10) //221

Number(address); //NaN

parseInt('2.4',10); //2
parseInt('2.9',10); //2

parseFloat('2.9',10); //2.9




//Null

10 + null; // null behaves like zero
//10

10 + undefined; // undefined is not a number
// NaN

//Booleans
Boolean('hello'); //true
Boolean(42); //true
Boolean(0); //false

/* Only 9 values are always false and these are known as falsy values:

* "" // double quoted empty string literal
* '' // single quoted empty string literal
* `` // empty template literal
* 0
* -0 // considered different to 0 by JavaScript!
* NaN
* false
* null
* undefined */

//Logical Operators

!true; // negating true returns false

!0; // 0 is falsy, so negating it returns true

//You can use double negation to find out if a value is truthy or falsy
!!''; //false
!!"hello";//true
!!3;//true
!!NaN; //false
!!"false";//true
!!'0'; //true

'shoes' && 18; // both values are truthy, returns 18
'shoes' && 0; // returns 0 because it is falsy

'shoes' || 0;//returns 'shoes'
NaN || undefined;  // both NaN and undefined are falsy, so undefined will be returned

//Lazy Evalutaion
let a = 0; // declare the variable a and assign the value of 0
false && (a = 1); //returns false: (a = 1) is truthy, but it won't be evaluated, since the first operand is false
a // the value of a is still 0
false || (a = 1); // this will evaluate both operands, so a will be assigned the value of 1, which is returned


                


//Bitwise Operators
~2476; //bitwise NOT    
12 & 10; // bitwise AND
12 | 10; //bitwise OR
12 ^ 10; //bitwise XOR
3 << 1; // bitwise shift left (multiply by 2)
5 << 3; //multiply by 2 cubed (8)
16 >> 1; // bitwise shift right (divide by 2)



//Comparison


const answer = 5;

//Soft equality
answer == 5;//true
answer == "5";//true
" " == 0;//true
" " == "0";//false
false == "0";//true
"1" == true;//true
"2" == true;//false
"true" == true; //false
null == undefined;//true
           

//Hard equality: The hard, or strict, equality operator, ===, tests for equality but only returns true if and only if they are of the same data type
answer === 5;//true
answer === '5';//false
null === undefined;//false
NaN === NaN;//false
Number.isNaN(NaN);//true
Number.isNaN(5);//false
isNaN('hello');//true
Number('hello');//NaN


//Inequality

16 != '16'; // type coercion makes these equal
//returns false

16 !== '16';//hard inequality: returns true

//Greater than and less than

8 > 4;//true
8 < 4;//false
8 >= 4;// true
8 >= 8;// true
                
//the equality test works in the same way as the soft equality operator:
8 >= '8';//true           
//there are no "hard" greater-than or equal-to operators, so an alternative way to avoid type coercion is to use a combination of the greater-than operator, logical OR, and a hard equality:
8 > 8 || 8 === 8;// true
8 > '8' || 8 === '8';//false
-1 <= 1; //true
-1 <= -1;//true              
'apples' < 'bananas';//true               
//the results are case-sensitive, and upper-case letters are considered to be "less than" lower-case letters:
'apples' < 'Bananas';//false

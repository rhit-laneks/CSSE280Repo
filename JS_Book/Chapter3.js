//JS Chapter 3 Reference File: Arrays, Logic, and Loops

//Arrays
 const myArray = []; //create an array literal

 const myOtherArray = new Array(); //using an array constructor function (array literals are preferred)

 typeof [] //object

 myArray[0] //undefined


 const heroes = [];
 heroes[0] = 'Superman';
 heroes[0] = 'Batman';
 heroes[1] = 'Wonder Woman';
 heroes[2] = 'Flash';
 heroes[5] = 'Aquaman';

 heroes; // ['Batman', 'Wonder Woman', 'Flash', undefined, undefined, 'Aquaman']


 const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk']; //example of creatin an array literal containing initial values

 const mixedArray = [ null, 1, [], 'two', true ]; //items in an aray need not be of the same data type

 delete avengers[3];//removes the item at index three from the array. It is replaced with udefined
avengers; //['Captain America', 'Iron Man', 'Thor', undefined]             
avengers[3];// undefined

 
//destructuring an array is taking values out of an array and presentaing them as individial values
//it allows us to assign multiple values at the same time, using arrays

const [x,y] = [1,2];
//x and y both exist on their own
 x; //1
 y; //2

 [x,y] = [y,x]; //swaps the values of the two variables, no temp needed
 x;//2
 y;//1

const avengers2 = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
avengers2.length;// 6
avengers2[avengers2.length - 1];//'Black Widow' (last element in the array)
avengers2.length = 8; //you can manually change the length

avengers2;// ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow', undefined, undefined]        
//if you make the array longer, the extra slots will be filled in with undefined:

avengers2.length = 3 //can also make the array shorter, the extra elements are removed completely from the array
avengers2; //['Captain America', 'Iron Man', 'Thor']
                
avengers2.pop(); //removes the last item from the array and returns that item ('Thor' in this case)          
avengers2; // ['Captain America', 'Iron Man']
avengers2.shift(); //The shift() method  removes the first item in the array ('Captain America' in this case)           
avengers2.push('Thor'); //The push() method appends a new value to the end of the array, The return value is the new length of the array(2 in this case)
avengers2.unshift('Captain America'); //The unshift() method appends a new item to the beginning of the array and returns the new length of the array (3 in this case)


avengers2.concat(['Hulk','Hawkeye', 'Black Widow']); //The concat() method can be used to merge an array with one or more arrays
            
//This does not change the avengers2 array, it simply creates another array combining the two arrays: ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

avengers2 = avengers2.concat(['Hulk','Hawkeye', 'Black Widow']); //update the avengers2 array to this new array
avengers2;// ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

//or:

avengers2 = [ ...avengers, ...['Hulk','Hawkeye', 'Black Widow'] ]; //alternative is to use the new spread operator
//avengers2 becomes ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']
                

avengers2.join(); //turns the array into a string that comprises all the items in the array, separated by commas
// 'Captain America, Iron Man, Thor, Hulk, Hawkeye, Black Widow'
                
avengers2.join(' & '); //can choose a separator other than a comma by placing it inside the parentheses
// 'Captain America & Iron Man & Thor & Hulk & Hawkeye & Black Widow'




//The slice() method creates a subarray
avengers2.slice(2,4) // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)
// ['Thor', 'Hulk']
                
avengers2; //no items are actually removed from the array
// ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']
                
//The splice() method removes items from an array then inserts new items in their place
avengers2.splice(3, 1, 'Scarlet Witch'); // Returns the removed items: ['Hulk']     
avengers2; //Splice changes the value of the array
// ['Captain America', 'Iron Man', 'Thor', 'Scarlet Witch', 'Hawkeye', 'Black Widow']
                
avengers2.splice(4,0,'Quicksilver'); //an also be used to insert values into an array at a specific index without removing any items
avengers2; // [ 'Captain America','Iron Man', 'Thor', 'Scarlet Witch', 'Quicksilver', 'Hawkeye', 'Black Widow' ]
                
avengers2.splice(2,1); // will completely remove the item at index 2 without putting undefined in its place (i.e. the third item in the array)
//returns the removed item: [ 'Thor' ]
                
avengers2;// ['Captain America', 'Iron Man', 'Scarlet Witch', 'Quicksilver', 'Hawkeye', 'Black Widow']
                


avengers2.reverse(); //reverses the order of an array permanently
// ['Black Widow', 'Hawkeye', 'Quicksilver', 'Scarlet Witch', 'Iron Man', 'Captain America']

avengers2.sort(); //sorts the array in alphabetical order permanently
// ['Black Widow', 'Captain America', 'Hawkeye', 'Iron Man', 'Quicksilver', 'Scarlet Witch']
                
[5, 9, 10].sort(); //numbers are sorted by their first digit by default
// [10, 5, 9]


avengers2.indexOf('Iron Man'); //finds the first occurrence of a value in an array and returns its index (3 in this case)              
avengers2.indexOf('Thor'); //returns -1 becuase 'Thor' is not in the array
avengers2.includes('Iron Man'); //returns a boolean value depending on whether the array contains a particular element or not
// true
avengers2.includes('Thor');
// false
                
avengers2.includes('Black Widow', 1); // will start the search from the second element in the array
// false
                

const coordinates = [[1,3],[4,2]]; //an array of arrays, known as a multidimensional array              
coordinates[0][0]; // The first value of the first array
// 1
coordinates[1][0]; // The first value of the second array
// 4
coordinates[0][1]; // The second value of the first array
// 3
coordinates[1][1]; // The second value of the second array
// 2
                

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [ summer, winter ];
// [ [ 'Jun', 'Jul', 'Aug' ], [ 'Dec', 'Jan', 'Feb' ] ]

const flat = [...summer, ...winter]; //spread operator can be used to flatten multi-dimensional arrays
// [ 'Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb' ]
                

//Sets

//Sets have no duplicate values

const list = new Set(); //create an empty set

list.add(1); //place values into a set
//Set { 1 }

list.add(2).add(3).add(4); //add multiple items to a set
// Set { 1, 2, 3, 4 }
                
list.add(1); //ignored becuase 1 is already in the set
// Set { 1, 2, 3, 4 }

const numbers = new Set([1,2,3]); // add multiple values to a set in one go
numbers; // Set { 1, 2, 3 }

const letters = new Set('hello'); //each character of string is added as a separate element
letters; // Set { 'h', 'e', 'l', 'o' }

const words = new Set().add('the').add('quick').add('brown').add('fox') //use the add() method to add separate words
words; // Set { 'the', 'quick', 'brown', 'fox' }
                

//All non-primitive values, such as arrays and objects, are considered unique values, even if they contain the same values
const arrays = new Set().add([1]).add([1]); 
arrays; // Set { [ 1 ], [ 1 ] }
[1] === [1]; // false becuase the arrays are considered different objects

const mixedTypes = new Set().add(2).add('2'); //Type coercion is not used when values are added to a set
mixedTypes; // Set { 2, '2' }


const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
jla; //Set { 'Superman', 'Batman', 'Wonder Woman' }
jla.size(); //finds the number of values in a set (3 in this case)

jla.has('Superman'); //checks if a value is in a set
// true

jla.has('Green Lantern');
// false
                
//The has() method that sets use is a very efficient operation and much faster than using the includes() or indexOf() methods to check if a value is in an arrays.

jla[0]; //undefined: sets do not have index notation

 

jla.delete('Superman'); //removes a value from a set and returns true on success
// true

jla.delete('Flash');
// false

jla.clear(); //removes all values from a set
jla; // Set {}
jla.size; // 0

//Converting Sets to Arrays

const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
shoppingSet; // Set { 'Apples', 'Bananas', 'Beans' }
const shoppingArray = [...shoppingSet]; //convert the set to an array
shoppingArray; // [ 'Apples', 'Bananas', 'Beans' ]

//another way to do the above
const shoppingSet2 = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray2 = Array.from(shoppingSet); //converts a set into an array
                
//We can easily create a copy of an array with any duplicate values removed by combining this use of the spread operator with the ability to pass an array to the new Set() constructor, 
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
// [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9 ]

const nonDuplicate = [...new Set(repeatedArray)];
// [ 3, 1, 4, 5, 9, 2, 6 ]



let array = [1,2,3];
const strong = new Set().add(array);
array = null; // remove reference to the original
strong; // Set { [ 1, 2, 3 ] }
array = [...strong][0]; //The array still exists inside the set and we can get the original value of array back using the spread operator
array; // [1,2,3]
                
const weak = new WeakSet(); //Weak sets avoid memory leaks by garbage collecting any references to a 'dead object' that’s had its original reference removed.

//Only non-primitive data types can be added to weak sets
weak.add(2); // TypeError: Invalid value used in weak set
                

const array = [1,2,3];
weak.add(array); // weak maps use weak references to objects, they don't have access to a list of values they contain. This makes the return value in the example look as though the weak set is empty, when, in fact it isn't.
// WeakSet {}

weak.has(array);// true
weak.delete(array); //remove the array from the weak set
weak.has(array);// false

//Maps

const romanNumerals = new Map(); //create an empty map object

romanNumerals.set(1,'I'); //add a key and value pair to a map
// Map { 1 => 'I' }

//'hash rocket' symbol (=>)
                
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); //add mutiple items to the set
// Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
                

romanNumerals.get(4); //look up a value based on the key
// 'IV'

romanNumerals.has(5); //check if a particular key is in a map
// true

romanNumerals.has(10);
// false


//create a map with multiple values by using a nested array as a parameter
const heroes = new Map([ ['Clark Kent','Superman'],
['Bruce Wayne', 'Batman']
]);
                
 can be found by querying the size property:

heroes.size; //find the number of key and value pairs in a map
// 2
                
heroes.delete('Clark Kent'); //remove a key and value pair from a map
// true

heroes.size; //1

heroes.clear(); //remove all key and value pairs from the map

heroes.size;// 0

Maps can be converted  in a similar way to sets; using either the spread operator:

[...romanNumerals]; //Convert map into a nested array of key-value pairs
//[ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]

Array.from(romanNumerals); //Another way to convert map into a nested array of key-value pairs
// [ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]

const weakM = new WeakMap(); //keys cannot be primitives, and the garbage collector will automatically remove any dead entries when the reference to the original object is deleted      
//Weak maps can use the has(), get(), set() and delete() methods.

//Logic


//structure of an if statement
if (condition) {
// code to run if condition is true
}


//structure of an else statement
if (condition) {
    // code to run if condition is true
    } else {
    // code to run if condition is false
    }


//format of a ternary operator
condition ? (//code to run if condition is true) : (//code to run if condition is false)

//example switch statement
switch (number) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
    }

//Loops

//while loop format
while (condition) {
    // do something
    }

//do ... while loop format
do {
    //do something
    } while(condition)

//for loop format
for (initialization ; condition ; after) { 
    //do something 
}

//example nested for loops
for(let i=1 ; j<13 ; i++){
    for(let i=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
        }
    }

//example of looping over an array
for(let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
    }
  /*<< 'Black Widow'
    << 'Captain America'
    << 'Hawkeye'
    << 'Iron Man'
    << 'Quicksilver'
    << 'Scarlet Witch'*/

//for-of loop
for(const value of avengers){
    console.log(value);
    }
  /*<< 'Black Widow'
    << 'Captain America'
    << 'Hawkeye'
    << 'Iron Man'
    << 'Quicksilver'
    << 'Scarlet Witch'*/


//looping over sets
//Sets are enumerable, which means they have methods that allow you to loop over each value in the set. The loop will iterate over each value in the same order they were added to the set. To demonstrate this, we will use the set of letters that we created earlier:
const letters = new Set('hello');
for(const letter of letters) {
console.log(letter);
}
/*<< h
     e
     l
     o*/
                
//weak sets are non-enumerable, so it's not possible to loop over them in this way.
                
//looping over maps
//Maps are  enumerable, so it's possible to loop over a map in a similar way to a set. The loop will iterate over each key-value pair in the same order as they were added to the map.

const romanNumerals2 = new Map();
romanNumerals2.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

romanNumerals2;
// Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
                
//The keys() method lets us iterate over each key 
for(const key of romanNumerals2.keys()) {
console.log(key);
}
/*<< 1
     2
     3
     4
     5/*
                
//The values() method that lets us iterate over the values
for(const value of RomanNumeral2.values()) {
console.log(value);
}
/*<< I
    II
    III
    IV
    V*/
                
//The entries() method accesses both the key and the value
for(const [key,value] of RomanNumerals2.entries()) {
console.log(`${key} in Roman numerals is ${value}`);
}
/*<< 1 in Roman numerals is I
2 in Roman numerals is II
3 in Roman numerals is III
4 in Roman numerals is IV
5 in Roman numerals is V */
                
//weak maps are non-enumerable, so it isn't possible to loop over them using any of the methods shown above.

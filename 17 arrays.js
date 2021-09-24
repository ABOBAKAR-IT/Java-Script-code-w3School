// ***************JavaScript Arrays************
// JavaScript arrays are used to store multiple values in a single variable.
const cars=["crola","volvo","BMW"];

// ******************What is an Array?***********************

// An array is a special variable, which can hold more than one value at a time.

// ********create array*************
// method 1
const cars1=["crola","volvo","BMW"];
// method 2
const car3=[
    "crola",
    "volvo",
    "BMW"
];
// method 3
const car4=[];
car4[0]="rana";
car4[1]="volvo";
car4[2]="BMW";

console.log(cars);

/*
Using the JavaScript Keyword new

The following example also creates an Array, and assigns values to it:
*/
const cars4 = new Array("Saab", "Volvo", "BMW");

/*


The two examples above do exactly the same.

There is no need to use new Array().
For simplicity, readability and execution speed, use the first one (the array literal method).

*/

// ***********Accessing Array Elements************

// You access an array element by referring to the index number:
let x=cars[0];
console.log(x);//crola

// *************Changing an Array Element*************
cars[0]="rana";
let xx=cars[0];
console.log(xx);//rana

/*
****************Access the Full Array*****************

With JavaScript, the full array can be accessed by referring to the array name:
*/
console.log(cars);


/*
*****************Arrays are Objects***************

Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:
*/
/*

******************The length Property*****************

The length property of an array returns the length of an array (the number of array elements).
*/
let y=cars[0];

// Accessing the Last Array Element

let a=cars[cars.length-1];


// *******Looping Array Elements********
for (let index = 0; index <cars.length; index++) {
    console.log(cars[index]);
    
}

// ********You can also use the Array.forEach() function:*************

cars[0]="abobakar";
cars.forEach(show);
function show(value,index) {
    console.log(cars[index]);
    console.log(index ," = ",value);
    
}


/*
********************Adding Array Elements*************************

The easiest way to add a new element to an array is using the push() method:
*/
cars.push("ranag");
console.log(cars[cars.length-1]);

//you cal also added an array
cars[cars.length]=100;
console.log(cars[cars.length-1]);

/*


WARNING !

Adding elements with high indexes can create undefined "holes" in an array:

*/
cars[9]=111;
console.log(cars);

/*
Associative Arrays

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.
*/

//Example
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John" 

/*


WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

*/

//Example:
const person1 = [];
person1["firstName"] = "John";
person1["lastName"] = "Doe";
person1["age"] = 46;
person1.length;     // Will return 0
person1[0];         // Will return undefined 


/*
**********The Difference Between Arrays and Objects*************

In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.


************When to Use Arrays. When to use Objects.**********

    JavaScript does not support associative arrays.
    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.


**********************Avoid new Array()*************

There is no need to use the JavaScript's built-in array constructor new Array().

Use [] instead.

These two different statements both create a new empty array named points:


*/

const points1 = new Array();     // Bad
const points2 = [];              // Good 


/*
*********************How to Recognize an Array************************

A common question is: How do I know if a variable is an array?
The problem is that the JavaScript operator typeof returns "object":
*/
console.log(typeof cars);//object

// The typeof operator returns object because a JavaScript array is an object. 
/*
************Solution 1:*********************

To solve this problem ECMAScript 5 defines a new method 
Array.isArray():
*/
console.log(Array.isArray(cars));//true

/*
Solution 2:

The instanceof operator returns true if an object is created by a given constructor:
*/
console.log(cars instanceof Array);//true

console.log("array show");
cars.forEach(show);
function show(value) {
    console.log(value);
}

cars.forEach(element => {
  console.log(element)  
});

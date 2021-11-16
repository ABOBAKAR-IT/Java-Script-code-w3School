/*
*******************JavaScript Numbers***************

JavaScript has only one type of number. Numbers can be written with or without decimals.
*/

var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals 

// Extra large or extra small numbers can be written with scientific (exponent) notation:

var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123 


/*
Precision

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
*/
var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000 

/*
The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
*/
var x = 0.2 + 0.1;         // x will be 0.30000000000000004 
console.log(x);

// To solve the problem above, it helps to multiply and divide:

 x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3 
 console.log(x);

// ****************Adding Numbers and Strings************
// If you add two numbers, the result will be a number:
 x = 10;
 y = 20;
 var z = x + y;           // z will be 30 (a number) 
console.log(z);


// If you add two strings, the result will be a string concatenation:

 x = "10";
 y = "20";
 z = x + y;           // z will be 1020 (a string) 
console.log(z);

// If you add a number and a string, the result will be a string concatenation:
// If you add a string and a number, the result will be a string concatenation:
 x = "10";
 y = 20;
 z = x + y;           // z will be 1020 (a string) 
console.log(z);


//***************Numeric Strings*******************
// JavaScript strings can have numeric content:

 x = 100;         // x is a number

 y = "100";       // y is a string

//  JavaScript will try to convert strings to numbers in all numeric operations:
//  This will work:
 x = "100";
 y = "10";
 z = x / y;       // z will be 10 

 z = x * y;       // z will be 1000

 z = x - y;       // z will be 90 
// But this will not work:
 z = x + y;       // z will not be 110 (It will be 10010) 

/*
NaN - Not a Number

NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/

 x = 100 / "Apple";  // x will be NaN (Not a Number)

// However, if the string contains a numeric value , the result will be a number:
 x = 100 / "10";     // x will be 10 

// You can use the global JavaScript function isNaN() to find out if a value is a number:
 x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number 

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
 x = NaN;
 y = 5;
 z = x + y;         // z will be NaN 

 x = NaN;
 y = "5";
 z = x + y;         // z will be NaN5 

// NaN is a number: typeof NaN returns number:
typeof NaN;            // returns "number" 

/*
**************Infinity******************

Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
Division by 0 (zero) also generates Infinity:

*/
 x =  2 / 0;       // x will be Infinity
 y = -2 / 0;       // y will be -Infinity 

// Infinity is a number: typeof Infinity returns number.
typeof Infinity;     // returns "number" 

/*
Hexadecimal

JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

 By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

*/
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

/*
Numbers Can be Objects

Normally JavaScript numbers are primitive values created from literals:

let x = 123;

But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
*/
 x = 123;// typeof x returns number
 y = new Number(123);// typeof y returns object 
// (x == y) is true because x and y have equal values 
// (x === y) is false because x and y have different types 

 x = new Number(500);             
 y = new Number(500);

// (x == y) is false because objects cannot be compared 
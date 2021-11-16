/*
************JavaScript Number Methods*******************
Number methods help you work with numbers.

Number Methods and Properties

Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.


********************The toString() Method********************

The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

*/

var s, x = 123;
s=x.toString();            // returns 123 from variable x
console.log(s);
s=(123).toString();        // returns 123 from literal 123
console.log(s);
s=(100 + 23).toString();   // returns 123 from expression 100 + 23 
console.log(s);
console.log(typeof(s));


/*
************The toExponential() Method*****************

toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:
*/

x=9.656;
s=x.toExponential(2);   // returns 9.66e+0
console.log(typeof(s));
s=x.toExponential(4); // returns 9.6560e+0
console.log(typeof(s));
s=x.toExponential(6); // returns 9.656000e+0 

/*
*********************The toFixed() Method***************************

toFixed() returns a string, with the number written with a specified number of decimals:
*/
 x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000 

/*
******************The toPrecision() Method********************

toPrecision() returns a string, with a number written with a specified length:

*/

 x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600 

/*
******************The valueOf() Method*******************

valueOf() returns a number as a number.
*/
 x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23 
x=new Number(30);
console.log(typeof(x));//object
x=x.valueOf();
console.log(typeof(x));//number
/*
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

*/
/*
****************Converting Variables to Numbers****************

There are 3 JavaScript methods that can be used to convert variables to numbers:

    The Number() method
    The parseInt() method
    The parseFloat() method

These methods are not number methods, but global JavaScript methods.
*/
/*
Global JavaScript Methods

JavaScript global methods can be used on all JavaScript data types.

These are the most relevant methods, when working with numbers:
Method 	Description
Number() 	Returns a number, converted from its argument.
parseFloat() 	Parses its argument and returns a floating point number
parseInt() 	Parses its argument and returns an integer

*/
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN 
// If the number cannot be converted, NaN (Not a Number) is returned.

/*
The parseInt() Method

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
*/
parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN  
//If the number cannot be converted, NaN (Not a Number) is returned.

/*
The parseFloat() Method

parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
*/
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN 
//If the number cannot be converted, NaN (Not a Number) is returned.





/*

JavaScript Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers:
Operator 	Description
+ 	Addition
- 	Subtraction
* 	Multiplication
** 	Exponentiation (ES2016)
/ 	Division
% 	Modulus (Division Remainder)
++ 	Increment
-- 	Decrement
*/

let x = 5;         
let y = 2;        
let z = x + y;
console.log("x+y ",z);  
z = x - y;
console.log("x-y ",z);     
 z = x * y;  
 console.log("x*y ",z);  
 z = x / y;   
 console.log("x/y ",z);  
 z = x ** y;  
 console.log("x**y ",z);  
 z = x % y;  
 console.log("x%y ",z);  
 z = --x + ++y;
 console.log("--x + ++y ",z);  
 z = x++ + y--;
 console.log("x++ + y-- ",z);  


 // ********Assignment operator*******
 console.log(" *******Assignment operator******* \n")
 let a=10;
 let b=5;
 a+=b;
 console.log("a+=b ",a);
 a-=b;
 console.log("a-=b ",a);
 a*=b;
 console.log("a*=b ",a);
 a/=b;
 console.log("a/=b ",a);
 a**=b;
 console.log("a**=b ",a);
 a%=b;
 console.log("a%=b ",a);

/*

JavaScript String Operators

The + operator can also be used to add (concatenate) strings.


*/
console.log(" JavaScript String Operators\n")
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);
text1 = "What a very ";
text1 += "nice day\n"; 
console.log(text1);

/*
*****************Adding Strings and Numbers*************

Adding two numbers, will return the sum, but adding a number and a string will return a string:
*/
 x = 5 + 5;//10
 y = "5" + 5;//55
 z = "Hello" + 5;//Hello5

 /*

 ***********JavaScript Comparison Operators***************
Operator 	Description
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator

 */

/*

***********JavaScript Logical Operators**********
Operator 	Description
&& 	logical and
|| 	logical or
! 	logical not
*/

/*

*************JavaScript Type Operators*****************
Operator 	Description
typeof 	    Returns the type of a variable
instanceof 	Returns true if an object is an instance of an object type

*/



/*
JavaScript Bitwise Operators

Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator 	Description       	Example     	Same as      	Result          	Decimal
& 	          AND       	    5 & 1      	0101 & 0001           0001                  1
| 	          OR            	5 | 1   	0101 | 0001         	0101 	             5
~           NOT 	           ~ 5 	         ~0101 	              1010                 	 10
^       	XOR 	            5 ^ 1    	0101 ^ 0001           	0100 	             4
<<       Zero fill left shift 	5 << 1 	     0101 << 1 	              1010 	             10
>> 	Signed right shift  	   5 >> 1      	0101 >> 1             	0010 	              2
>>> 	Zero fill right shift 	5 >>> 1 	0101 >>> 1            	0010 	              2

*/
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


 /*
**********Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses:
 When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right: 

*/

let xx = 100 + 50 * 3;
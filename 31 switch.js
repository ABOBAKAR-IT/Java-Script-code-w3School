/*
*************JavaScript Switch Statement****************
The switch statement is used to perform different actions based on different conditions.


The JavaScript Switch Statement

Use the switch statement to select one of many code blocks to be executed.
This is how it works:

    The switch expression is evaluated once.
    The value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.

*/
var x=3;
switch(x)
{
case 1:
        console.log("sunday");
        break;
case 2:
        console.log("monday");
        break;
case 3:
        console.log("tuesday");
        break;
case 4:
        console.log("wednesday");
        break;
 case 5:
        console.log("thursday");
        break;
 case 6:
        console.log("friday");
        break;  
 case 7:
        console.log("saturday");
        break;    
        default:
            console.log("RANA ABOBAKAR");
}

/*
*************The break Keyword****************

When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.


******************The default Keyword****************

The default keyword specifies the code to run if there is no case match:


The default case does not have to be the last case in a switch block:
If default is not the last case in the switch block, remember to end the default case with a break.
*/

/*
*************Switching Details***************

If multiple cases matches a case value, the first case is selected.

If no matching cases are found, the program continues to the default label.

If no default label is found, the program continues to the statement(s) after the switch.

*/

/*
****************Strict Comparison******************

Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.


*/

 x = "0";
switch (x) {
case 0:
text = "Off";
break;
case 1:
text = "On";
break;
default:
text = "No value found";
}

console.log(text);

var fruits="Apple";
var text;
switch(fruits) {
   case "Banana":
    text="Hello";
    break;
  case  "Apple":
    text=("Welcome")
    break;
    }
    console.log(text);
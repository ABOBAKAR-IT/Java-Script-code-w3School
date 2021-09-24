/*
**************JavaScript Loop*************
Loops can execute a block of code a number of times.


Different Kinds of Loops

JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true


****************The For Loop*********************

The for loop has the following syntax:

*/
//for (statement=1; statement =2; statement =3) {
    // code block to be executed
//  }

/*
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.
*/

for (let i = 0; i < 5; i++) {
   console.log("RANA ABOBAKAR");
  }
/*
Statement 1 sets a variable before the loop starts (let i = 0).
Statement 2 defines the condition for the loop to run (i must be less than 5).
Statement 3 increases a value (i++) each time the code block in the loop has been executed.

*******************Statement 1********************

Normally you will use statement 1 to initialize the variable used in the loop (let i = 0).
This is not always the case, JavaScript doesn't care. Statement 1 is optional.
You can initiate many values in statement 1 (separated by comma):

And you can omit statement 1 (like when your values are set before the loop starts):
*/
var i=0;
for (; i < 5; i++) 
   {
    console.log(i," RANA ABOBAKAR");
   }

/*
***************Statement 2********************

Often statement 2 is used to evaluate the condition of the initial variable.
This is not always the case, JavaScript doesn't care. Statement 2 is also optional.
If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.


If you omit statement 2, you must provide a break inside the loop. 
Otherwise the loop will never end. This will crash your browser. 
Read about breaks in a later chapter of this tutorial.

********************Statement 3***************************

Often statement 3 increments the value of the initial variable.
This is not always the case, JavaScript doesn't care, and statement 3 is optional.
Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
Statement 3 can also be omitted (like when you increment your values inside the loop): 

************************Loop Scope*******************
Using var in a loop:

*/

var i=1;
for (var i=0; i < 5; i++) 
   {
    console.log(i," RANA ABOBAKAR");
   }
console.log(i);

// Using let in a loop:

let a=0;
for(let a=0;a<5;a++)
{

}
console.log(a);

/*
In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop. 
*/


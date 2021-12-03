// ********************JavaScript Break and Continue*************************

/*
The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

The break statement can also be used to jump out of a loop:
*/
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
   console.log("The number is ",i);
  } 
   console.log("\n\n");
/*
********************The Continue Statement*************************

The continue statement breaks one iteration (in the loop),
 if a specified condition occurs, and continues with the next iteration in the loop.

*/

for (let i = 0; i < 5; i++) {
    if (i === 3) { continue; }
    console.log("The number is ",i);

  }








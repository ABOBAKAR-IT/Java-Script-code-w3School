// **************JavaScript Array Methods*******************
/*
Converting Arrays to Strings

The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/

const fruits=["banana","orange","apple","mango"];
console.log(fruits);
let x=fruits.toString();
console.log(x);

/*
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
*/

let a=fruits.join("*");
console.log(a);

/*
***********Popping and Pushing********************

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.

*******************Popping******************

The pop() method removes the last element from an array: 
*/
let b=fruits.pop();
console.log(fruits);

// The pop() method returns the value that was "popped out":
console.log(b);//mango



// *******************Pushing****************

// The push() method adds a new element to an array (at the end):
let s=fruits.push("kiwi");
console.log(fruits);

// The push() method returns the new array length:
console.log(s);//4

/*
************************Shifting Elements************************

Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

The shift() method returns the value that was "shifted out":
*/
let as=fruits.shift();
console.log(as);//banana
console.log(fruits);

/*
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
The unshift() method returns the new array length.
*/

let sa=fruits.unshift("amrod");
console.log(sa);//4
console.log(fruits);

/*
*************Changing Elements**********************

Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

*/
fruits[3]="banana";
console.log(fruits);

// The length property provides an easy way to append a new element to an array:
fruits[fruits.length] = "Kiwi"; 
console.log(fruits);

/*
************Deleting Elements*******************

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

Using delete may leave undefined holes in the array. Use pop() or shift() instead.
*/
delete fruits[0];   // Changes the first element in fruits to undefined 
console.log(fruits);

/*
******************Splicing an Array************************

The splice() method can be used to add new items to an array: 
*/

fruits.shift();
console.log(fruits);

fruits.splice(2,0,"rana g","abobakar");
console.log(fruits);
/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items: 

**************Using splice() to Remove Elements***************

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: 
*/

fruits.splice(0,1);
console.log(fruits);
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/



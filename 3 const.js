/*



The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.

*/
const PI = 3.141592653589793;
//  PI = 3.14;      // This will give an error
//  PI = PI + 10;   // This will also give an error 
//  const a;    //JavaScript const variables must be assigned a value when they are declared:
//  a=12;


/*  
Constant Objects and Arrays

The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object

    But you CAN:
    Change a constant array
    Change a constant object


*/

/*

***************Constant Arrays****************

You can change the elements of a constant array:

*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//But you can NOT reassign the array:
const car1 = ["Saab", "Volvo", "BMW"];

//car = ["Toyota", "Volvo", "Audi"];    // ERROR 

/*

********************Constant Objects****************

You can change the properties of a constant object:

*/
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 

//But you can NOT reassign the object:

/*
 const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR 

*/

/*
******************Block Scope**************

Declaring a variable with const is similar to let when it comes to Block Scope.
*/
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10 

//*****************Const Hoisting*************
/*
Variables defined with const are also hoisted to the top, but not initialized.

Meaning: Using a const variable before it is declared will result in a ReferenceError:
*/
namep='abobakar';
//   const namep;  //error

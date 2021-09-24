/*

The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.

*/
let a='rana';
console.log(a);
//var a;   SyntaxError: Identifier 'a' has already been declared

//*************Block Scope****************
let x=9;
//let x=10;SyntaxError: Identifier 'x' has already been declared
{
    let x=10;//Redeclaring let Variables
    console.log(x);
}
console.log(x);

var c=4;
console.log(c)

{
    var c=5;//Variables declared with the var keyword can NOT have block scope.
    console.log(c);
}
console.log(c);//Variables declared inside a { } block can be accessed from outside the block. 

// *****************Hoisting*******************
/*
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

*/
carname='crola';//**************hoisting***************
console.log(carname);
var varname;

/*
Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError:

*/
     rana=23;   //ReferenceError: Cannot access 'rana' before initialization
//   let rana;
/*
***********JavaScript Objects*************
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:
All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

*/
/*
let car= {tupe:"fiat",midel:"500",color:"white"};
console.log(car.color);



const persen1={
  fname:"RANA",
  lname:"ABOBAKAR",
  age:18,
  fullname:function()
  {
  return  this.fname+ " " +this.lname;
  }
  };
console.log("full name",persen1.fullname());


/*
Do Not Declare Strings, Numbers, and Booleans as Objects!

When a JavaScript variable is declared with the keyword "new", the variable is created as an object: 


x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object 

/*
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.


*/


//**************  Accessing Object Properties with Dot Notation ***********/

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

console.log(testObj.hat)

/**************************Accessing Object Properties with Bracket Notation */
console.log(testObj["shirt"])

/**************Accessing Object Properties with Variables */

let name="hat";
console.log(testObj[name]);


/*******************Updating Object Properties */

testObj.hat="Rana"
console.log(testObj);

/**********Add New Properties to a JavaScript Object */

testObj.hard="something"
//     or
testObj["GG"]="GG";
console.log(testObj);

/*********Delete Properties from a JavaScript Object */

delete testObj.GG;
console.log(testObj);

/**************Using Objects for Lookups**********************
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data,
 you can use an object to lookup values rather than a switch statement or an if/else chain. 
 This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:
*/
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",

  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];


// Setup
function phoneticLookup(val) {
  let result = "";
let lookup={
  alpha:"Adams",
  bravo:"Boston",
  charlie:"Chicago",
  delta:"Denver",
  echo:"Easy",
  foxtrot:"Frank"
}
  // Only change code below this line
  
 result= lookup[val]
  

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");



/*********************************Testing Objects for Properties***************
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example
*/
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");


//The first hasOwnProperty returns true, while the second returns false

// *TODO: Object Destructuring in ES6


// Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.
// For example:
let obj={h:100,s:true}
let {h,s}=obj;//Use same name of property of object
console.log(h);
console.log(s);
let {a,b}=obj;//get error .

// *You can also assign the object to new variable names.
// For example:
let obj1={a:1000,b:false}
let {a:C,b:D}=obj1;
console.log(C,D);
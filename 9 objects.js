/*
***********JavaScript Objects*************
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:
All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

*/

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

*/
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object 

/*
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.


*/

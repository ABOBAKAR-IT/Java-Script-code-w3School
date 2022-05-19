//******* Object.assign() in ES6 ********


// ES6 adds a new Object method assign() that allows us to combine 
// multiple sources into one target to create a single new object.
// Object.assign() is also useful for creating a duplicate of an existing object.


// Here we used Object.assign() where the first parameter is the target object you want to apply
//  new properties to.
// Every parameter after the first will be used as sources for the target.
//  There are no limitations on the number of source parameters. However, order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on.

// In the example above, we used a new object {} as the target and used two objects as sources.

// Now, let's see how we can use assign() to create a duplicate object without creating a reference 
// (mutating) to the base object.
// In the following example, assignment was used to try to generate a new object.
//  However, using = creates a reference to the base object. Because of this reference,
//   changes intended for a new object mutate the original object:
let person= {
    name: 'mack',
    age:18

};
var newPerson=person;//newPerson references person
newPerson.name='Abobakar';
console.log(person.name);//abobakar
console.log(newPerson.name);//abobakar

// To avoid this (mutations), use Object.assign() to create a new object.
// ********For example**************
let person1= {
    name: 'jack',
    age:18

};
var newPerson=Object.assign({},person1);//newPerson references person
newPerson.name='Abobakar';
console.log(person1.name);//jack
console.log(newPerson.name);//abobakar

// Finally, you can assign a value to an object property in the Object.assign() statement.
// *******For example:
var newPerson=Object.assign({},person1,{name:'RANA ABOBAKAR'});//newPerson references person
console.log(person1.name);//jack
console.log(newPerson.name);//RANA ABOBAKAR
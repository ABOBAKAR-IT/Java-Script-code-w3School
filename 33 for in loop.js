/*
*****************The For In Loop*****************

The JavaScript for in statement loops through the properties of an Object:
*/
let person={
    fname:"RANA",
    lname:"ABOBAKAR",
    fullname:function(){
        return this.fname + " " + this.lname;
    },
};

for( let i in person)
{
    console.log(i+" "+person[i]);
}


/*
Example Explained

    The for in loop iterates over a person object
    Each iteration returns a key (i)
    The key is used to access the value of the key
    The value of the key is person[i]

*/


/*
***************For In Over Arrays**************

The JavaScript for in statement can also loop over the properties of an Array:
*/
    let a=["rana","abobakar","g"]
for(let i in a)
{
    console.log(a[i]);
}

/*


Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

******************Array.forEach()****************

The forEach() method calls a function (a callback function) once for each array element.

*/
let n=[1,2,3,4,5];
n.forEach(sum);
var ss;
function sum(value,index,array) {
    ss=value;
  
    console.log(ss);
}

/*
Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself

The example above uses only the value parameter. It can be rewritten to:
*/

const car={
    color:"red",
    model:"19",
    price:"95"
  }
  
  for(var x in car)
  {
    console.log(x+" "+car[x]);
    //console.log(a);
  }
  console.log(car);
/*
**************JavaScript Strings*************

A JavaScript string is zero or more characters written inside quotes.
*/
var s="string";
console.log(s);
s ='ABOBAKAR';
console.log(s);
var x='"RANA ABOBAKAR"';
console.log(x);
var y="\'RANA ABOBAKAR\'";
console.log(y);
s= (x==y);//false x and y not same
console.log(s);

/*
*****************String Length**************
To find the length of a string, use the built-in length property:

*/

x='rana';
y=new String('rana');//strings can also be defined as objects with the keyword new:
s=(x==y);//true
console.log(s);
s=(x===y);//false
console.log(s);
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var aa=Number(text.length);   // Will return 26 
console.log(aa);
aa+=10;
console.log(aa);

 x = new String("John");             
 y = new String("John");

s= (x == y) //is false because x and y are objects
console.log(s);
s= (x ===y) //is false because x and y are objects
console.log(s);



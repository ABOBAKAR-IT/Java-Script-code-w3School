/* ****************JavaScript String Search************


JavaScript methods for searching strings:

    String.indexOf()
    String.lastindexOf()
    String.startsWith()
    String.endsWith()


*/
/*
*************String.indexOf()***************

The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
*/

var text="RANA ABOBAKAR SAB KYA HAL HA.";
var s=text.indexOf('RANA');
console.log(s);//0

/*
String.lastIndexOf()

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
*/

var text="RANA ABOBAKAR SAB KYA HAL HA RANA";
var s=text.lastIndexOf('RANA');
console.log(s);//29

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
var text="RANA ABOBAKAR SAB KYA HAL HA RANA";
var s=text.lastIndexOf('RNA');
console.log(s);//-1

//Both methods accept a second parameter as the starting position for the search:
var text="RANA ABOBAKAR SAB KYA HAL HA RANA";
var s=text.lastIndexOf('RANA',10);
console.log(s);//0
/*
The lastIndexOf() methods searches backwards (from the end to the beginning), 
meaning: if the second parameter is 10, the search starts at position 10,
 and searches to the beginning of the string.

*/

/*

***********************String.search()*******************

The search() method searches a string for a specified value and returns the position of the match:

*/
var text="RANA ABOBAKAR SAB KYA HAL HA RANA";
var s=text.search("ABOBAKAR");
console.log(s);//5
/*
Did You Notice?

The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).

You will learn more about regular expressions in a later chapter.
*/

 /* 
 ******************String.match()*****************

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
 
 */
var text="RANA ABOBAKAR SAB KYA HAL HA RANA";
s=text.match(/RANA/g);
console.log(s);//[ 'RANA', 'RANA' ]
// If the regular expression does not include the g modifier (to perform a global search),
//  the match() method will return only the first match in the string.
s=text.match(/rana/ig);
console.log(s);//[ 'RANA', 'RANA' ]

/*
String.includes()

The includes() method returns true if a string contains a specified value
string.includes(searchvalue, start)
*/
 text="RANA ABOBAKAR SAB KYA HAL HA RANA";
s=text.includes("RANA");
console.log(s);//true

/*
String.startsWith()
string.startsWith(searchvalue, start)
The startsWith() method returns true if a string begins with a specified value, otherwise false:
*/

text="RANA ABOBAKAR SAB KYA HAL HA RANA";
s=text.startsWith("ABOBAKAR");
console.log(s);//false

/*
String.endsWith()

The endsWith() method returns true if a string ends with a specified value, otherwise false:
string.endswith(searchvalue, length)
searchvalue 	Required. The value to search for.
length       	Optional. The length to search.
*/
text="RANA ABOBAKAR SAB KYA HAL HA RANA";
s=text.endsWith("ABOBAKAR");
console.log(s);//false


/*
**************String Length***************

The length property returns the length of a string:
*/
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var s=txt.length     // Returns 26 
console.log("lenght of string",s);//

/*
*************Extracting String Parts****************

There are 3 methods for extracting a part of a string:

    slice(start, end)
    substring(start, end)
    substr(start, length)

****************The slice() Method***********

slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):


*/
var str="1 2 3 4 5 6 7 8 9 10 11 12 13 14 15";
s=str.slice(6,11);
console.log(s);

var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
s=str.slice(5,10);
console.log(s);
/*


Remember: JavaScript counts positions from zero. First position is 0.

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6: 
*/
s=str.slice(-12,-6);
console.log(s);

/*
If you omit the second parameter, the method will slice out the rest of the string:
*/

s=str.slice(10);
console.log(s);


/*

***************The substring() Method*************

substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.
*/


var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
s= str.substring(2,5);
console.log(s);
//If you omit the second parameter, substring() will slice out the rest of the string.

/*
****************The substr() Method****************

substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
*/
var str="RANA ABOBAKAR IT";
s=str.substr(5,8);
console.log(s);
//If you omit the second parameter, substr() will slice out the rest of the string.
s=str.substr(5);
console.log(s);//ABOBAKAR IT
//If the first parameter is negative, the position counts from the end of the string.
s=str.substr(-2);
console.log(s);//IT

/*
******************Replacing String Content*******************

The replace() method replaces a specified value with another value in a string:

*/
var str="RANA ABOBAKAR IT";
s=str.replace("IT","FAROOQ");
console.log(s);//RANA ABOBAKAR FAROOQ
/*


The replace() method does not change the string it is called on. It returns a new string.

By default, the replace() method replaces only the first match:

By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
*/

var str="RANA ABOBAKAR IT";
s=str.replace('abobakar','Abobakar');
console.log(s);//RANA ABOBAKAR IT

/*
To replace case insensitive, use a regular expression with an /i flag (insensitive):
*/
var str="RANA ABOBAKAR IT";
s=str.replace(/abobakar/i,'Abobakar');//Note that regular expressions are written without quotes.
console.log(s);//RANA Abobakar IT


/*
To replace all matches, use a regular expression with a /g flag (global match):
*/
var str="RANA G KYA HAL HA KYA HO RHA HA RANA G AJ KAL OR SNAO RANA SAB";
s=str.replace(/RANA/g,"Rana");
console.log(s);//Rana G KYA HAL HA KYA HO RHA HA Rana G AJ KAL OR SNAO Rana SAB

//To replace case insensitive,To replace all matches,
var str="RANA G KYA HAL HA KYA HO RHA HA RANA G AJ KAL OR SNAO RANA SAB";
s=str.replace(/rana/ig,"Rana");
console.log(s);//TRana G KYA HAL HA KYA HO RHA HA Rana G AJ KAL OR SNAO Rana SAB


/*
******************Converting to Upper and Lower Case*************

A string is converted to upper case with toUpperCase():
*/
str=" kya hal ha rana sab kya ho rha ha aj kal ";
s=str.toLocaleUpperCase();
console.log(s);

// A string is converted to lower case with toLowerCase():
var str="RANA G KYA HAL HA KYA HO RHA HA RANA G AJ KAL OR SNAO RANA SAB";
s=str.toLocaleLowerCase();
console.log(s);

/*
********************The concat() Method*****************

concat() joins two or more strings:
*/
var f="RANA";
var l="ABOBAKAR";
s=f.concat(" ",l);
console.log(s);

/*
*****************String.trim()***************

The trim() method removes whitespace from both sides of a string:
*/
var text = "       Hello World!        ";
s=text;
console.log(s);
s=text.trim()    // Returns "Hello World!" 
console.log(s);


/*
******************JavaScript String Padding**************

ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.
*/

text="A";
s=text.padStart(5,"*");
console.log(s);
 
text="A";
s=text.padEnd(5,"*");
console.log(s);

/*
******************Extracting String Characters********************

There are 3 methods for extracting string characters:

    charAt(position)
    charCodeAt(position)
    Property access [ ]


The charAt() Method

The charAt() method returns the character at a specified index (position) in a string:

*/
text="ABOBAKAR";

s=text.charAt(3);
console.log(s);//B


/*
The charCodeAt() Method

The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

*/
s=text.charCodeAt(3);
console.log(s);

/*
Property Access

ECMAScript 5 (2009) allows property access [ ] on strings:



Property access might be a little unpredictable:

    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)



*/
text = "HELLO WORLD";
text[0] = "A"    ;         // Gives no error, but does not work
text[0]          ;         // returns H 
//If you want to work with a string as an array, you can convert it to an array.
/*
************Converting a String to an Array*************

A string can be converted to an array with the split() method:
*/
text="a1b1c1d1";
s=text.split("1")   ;       // Split on 1
console.log(s[1]);//b
text="a b c d";
s=text.split()   ;     //If the separator is omitted, the returned array will contain the whole string in index [0].
console.log(s[0]);//a b c d


/*
f the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:
*/





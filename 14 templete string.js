/*
JavaScript Template Literals

Synonyms:

    Template Literals
    Template Strings
    String Templates
    Back-Tics Syntax

Back-Tics Syntax

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

*/
var text=`RANA ABOBAKAR SAB KYA HAL HA RANA`;

/*
*********Quotes Inside Strings**************

With template literals, you can use both single and double quotes inside a string
*/
var text=`RANA' ABOBAKAR "SAB" KYA HAL HA RANA`;

// ************Multiline Strings**************

// Template literals allows multiline strings:
var text =
`The quick
brown fox
jumps over
the lazy dog`;

/*
********************Interpolation*********************

Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:
                ${...} 

-******************Variable Substitutions************

Template literals allows variables in strings:
*/
var firstName = "RANA";
var lastName = "ABOBAKAR";

var text = `Welcome ${firstName}, ${firstName}`;
console.log(text);
//Automatic replacing of variables with real values is called string interpolation.


/*
Expression Substitution

Template literals allows expressions in strings:

*/
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

/*
***************HTML Templates***************

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
*/

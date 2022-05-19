
// ***************Asynchronous JavaScript***************

//semple callback function
console.log("semple callback");

function show(params) {
    console.log("RANA ABOBAKAR");
}
function call(callback) {
    callback();
}
call(show);
console.log("after");


// **************Waiting for a Timeout*******************
//asynchronuos 
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

function show1(params) {
    console.log("asynchronus function");
}
setTimeout(show1,3000);
console.log("before");


console.log("method 2");
//method 2
setTimeout(function () {
    show2("asinchronus method 2");
},2000);

function show2(params) {
    console.log(params);
}

// method 3
console.log("method 3");
setTimeout(()=>show2("arrow function"),3000);
/*
Waiting for Intervals:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
*/

const axios=require("axios");
var a=0;
let x=setInterval(show22,3000);
function show22() {
    
    console.log("RANA ABOBAKAR");
    a++;
if(a==3)
{
    clearInterval(x);
}
}




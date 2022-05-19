//normal function call
function show1(params) {
    console.log(params);
}
function sum1(a,b) {
    let s=a+b;
    show1(s);
}
sum1(5,6);



//call back function
function show(params) {
    console.log(params);
}
function sum(a,b,callback) {
    let s=a+b;
    callback(s);
}
sum(5,6,show);
/*
JavaScript Promise Object

A JavaScript Promise object contains both the producing code and calls to the consuming code:
*/

let condition=true;
let mypromise= new Promise((resolve,rejected)=>{
if(condition==true){
    resolve("true");
}
else
{
    rejected("false");
}
});
//method 1 
mypromise.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})
// method 2

let mypromise_2=new Promise(function (resolce,rejected) {
    let x=1;
    if(x!=0)
{
    resolce("x=0");
}
else
{
    rejected("x!=0");
}
})
mypromise_2.then(function(params) {
    console.log("value of ",params);
}).catch(function (params) {
    console.log("i am catch function",params);
});


let mypromise__3=new Promise((resolve,rejected)=>{
  setTimeout(()=>{resolve("resolve")  
},3000);

});
mypromise__3.then((value)=>{
    console.log(value);
}).catch((value)=>console.log(value));

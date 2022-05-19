//normal promise function

let text=new Promise((res,rej)=>{
 
    let s;
    let a=12;
    let b=2;
    s=a+b;
    if (a!=b){
    return res(`normal promise ${s}`);}
    else{
    return rej(a);}
});
 text.then((value)=>console.log("then ",value)).catch((value)=>console.log("catch ",value));

//async function
async function sum(a,b) {
    let s;
    s=a+b;
    if (a==b){
    return Promise.resolve(`async function ${s}`);}
    else{
    return Promise.reject(`async function ${a}`);}
}
  sum(12,2).then((value)=>console.log("then ",value)).catch((value)=>console.log("catch ",value));
  
 async function show() {
     let promise=new Promise((response,reject)=>{
         setTimeout(() => {
             return response("done!");
         }, 3000);
     });
     let result=await promise;
     console.log(result);
 }
show();

/*

async function show() {
    let promise=new Promise((response,reject)=>{
        setTimeout(() => {
            return response("done!");
        }, 3000);
    });
    try {
       let value=await promise;
       console.log("then",value);
   } catch (error) {
       
   }*/

  async function show1() {
       let x=new Promise((resolve,reject)=>{
           setTimeout(() => {
               resolve("rana g");
           }, 3000);
       });
       let s= await x;
       console.log(s);
    //   x.then((a)=>{console.log("welcome ",a)});
try {
    console.log("welcome to ",s);
} catch (error) {
    
}
   }
   show1();
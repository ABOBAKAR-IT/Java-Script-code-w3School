// Arrow function ware introduced in ED6
// Afunctions allow us to write shorter function syntax
// ***********Before*************
var hello=function()
{
    let d='rana g';
    return d;
};
console.log(hello());

// ***************With Arrow Function:***********
var hello=()=>
{
    let d='rana g';
    return d;
};
console.log(hello());

/*
It gets shorter! If the function has only one statement,
 and the statement returns a value, 
 you can remove the brackets and the return keyword:

 *****************Arrow Functions Return Value by Default:
*/
hello=()=> "rana abobakar g";
console.log(hello());

//Note: This works only if the function has only one statement.

//If you have parameters, you pass them inside the parentheses:

//*************Arrow Function With Parameters:************
var s="RANA ABOBAKAR";
hello=(p)=>{
    return "Hi " + p;
}
console.log(hello(s));

// In fact, if you have only one parameter, you can skip the parentheses as well:
// ***************Arrow Function Without Parentheses:********
hello=p=> "HI "+p;
console.log(hello(s));





const ob={
    fname:"rana",
    lname:"abobakar",
    fullname:()=>{
        return this.fname+" "+this.lname;
    },
};
console.log(ob.fullname());








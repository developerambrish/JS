//mainly two datatype are available 
// 1. Primitive   //call by value not ggiving original values only giving copy referrences 

// 7.  types  :  String , null ,undefined ,  BigInt , Symbol(value ko unique banata h ) ,Number ,Boolean 

const scores = 100 
const scoresvalues = 100.2
const islogin = true
const outsidetemp = null
let useremail;
const id   = Symbol('123')
const anotherrid = Symbol('123')
console.log(id);
console.log(anotherrid);
console.log(id===anotherrid);

// 2. Reference (Non - Primitive) 
//  Array Object Function
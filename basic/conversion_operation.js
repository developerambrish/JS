let number = "33asa" // change the value here like 22,null undefind true false
// console.log(typeof number);
// console.log(typeof(number));
let string = Number(number)
//console.log(typeof string);
//console.log(string);


/* 
if we are converting into number 
"33" =33 converted successfullly
"33sd" == conveted but value NaN(not a number)
null = o
true = 1 ; false =0
undefined  = Nan
*/

let score ="sa121"
let convertintostring = String (score)
//console.log(typeof convertintostring);
//console.log(convertintostring);

/* 
if we are converting into string

12 = converted
null  = converted & value is null
undefined = converted value is undefined
true = converted value is true
asd = error
"asaas12" succeessfully
*/

let any = "s"
let convertintoboolean = Boolean(any)
// console.log(convertintoboolean);
// console.log(typeof convertintoboolean);


/*
if we are converting into boolean
1 = true ;0 = false
null ,undefined = false
"" = false
"sds " = true
*/

/***************operation******************************* */
var num = 5
var negnum = -num
// console.log(negnum);

// console.log(2+2);   4
// console.log(2-2);   0  
// console.log(2*2);    4
// console.log(2**3);//perform like power  2*2*2 =8
// console.log(2/2);    1
// console.log(132%2);  0


let  str1 = "Ak"
let str2 = " Is Here"
let str3 = str1+str2
// console.log(str3);

console.log(typeof("2" + 1));   //treate like string simple 2 and 1 is print as it is         21     and return as string

console.log(typeof(2 + "1"));   //treate like string here also     21   and return as string 
console.log(typeof("2" + 1 + 1 +2));  //treate like string   because of starting  is string so all works like  string   and return as string
console.log(typeof(2 + 1 +34 + "2"));  //first two are added and last  was print as it is    and return as string



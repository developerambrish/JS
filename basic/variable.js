/* there are 4 way to store any information in js (const,let,var,&without any keyword)
const not allowed to change the value
let allowed to change the value but there is no scope proplem
var also allowed to change the value but there is is block scope & function scope issues 
there is extra option in js without any keyword let var const we can declare a variable but its worst option 
now days there is mostly used only two option const & let

 */


const accoutId = 1245 // can't be change

var accoutName = "Ambrish" // it can be can change but scope issues

let accoutEmail ="Ambrish@63.com" //it aslo can be change & no scope issues

accountCity ="Lucknow" //not be used worst options

let accoutState //in Js if we are decleare a variable without assign any value its show undefined

console.log(accoutId);//only print a value
console.table([accoutId,accoutName,accoutEmail,accountCity,accoutState]); //we can print many variable in tabular form
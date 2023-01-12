
const mathFunc = require('./sourceFunc');

console.log("PI = "+mathFunc.PI);
console.log("Sum of 9 , 3 = "+mathFunc.getSum(9,3));
console.log("Sub of 9 , 3 = "+mathFunc.getSub(9,3));
console.log("Multi of 9 , 3 = "+mathFunc.getMulti(9,3));
console.log("Div of 9 , 3 = "+mathFunc.getDiv(9,3));
console.log('------------------------------------');

const {PI, getSum, getSub,  getMulti, getDiv} = require('./sourceFunc');

console.log("PI = "+PI);
console.log("Sum of 9 , 3 = "+getSum(9,3));
console.log("Sub of 9 , 3 = "+getSub(9,3));
console.log("Multi of 9 , 3 = "+getMulti(9,3));
console.log("Div of 9 , 3 = "+getDiv(9,3));
console.log('------------------------------------');



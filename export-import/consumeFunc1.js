
const mathFunc = require('./sourceFunc');

console.log("PI = "+mathFunc.PI);
console.log("Sum of 9 , 3 = "+mathFunc.getSum(9,3));
console.log("Div of 9 , 3 = "+mathFunc.getDiv(9,3));
console.log('------------------------------------');

const {PI, getSum, getSub,  getMulti, getDiv} = require('./sourceFunc');

console.log("PI = "+PI);
console.log("Div of 9 , 3 = "+getDiv(9,3));
console.log('------------------------------------');



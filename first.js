// import {x} from './app'

const app = require('./app')

console.log("Hello Programmer")

const pi = 3.14;
const pi2 = 3.14

// console.log("Area of Circle is ",pi*10*10)

// if (pi === pi2) {
//     console.log("=== Matched")
// }
// else{
//     console.log("== Matched")
// }

// for(let x=0;x<10;x++){
//     console.log(x)
// }

let arr=[1,2,3,4,6,'2',4,2];
// console.log(arr)

// for (let x = 0; x < arr.length; x++) {
//     console.log(arr[x])
// }

console.log(app.y)

let result = arr.filter((item) => {
    // console.log(item)
    return item==2
})
console.warn(result)
// // const userName = "main@pedo.com"
// // if(userName){
// //     console.log("caught");
// // }
// // else{
// //     console.log("missing")
// // }

// // falsy values:
// // false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// // except these all are truthy values.
// // Some interesting truthy values:
// // "0" , "false" , " " , [] , {} , function(){} , 

// const userEmail = []
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) console.log("object is empty");


// Nullish Coalescing Operator (??) : null , undefined
// let val1;
// val1 = 5??9;
// val1 = null??9;
// val1 = undefined??9;
// val1 = null??undefined;
// val1 = null??10??14;
// console.log(val1);


// Terniary Operator
// condition ? true : false 
const iceTeaPrice = 199;
iceTeaPrice >= 249 ? console.log("Expensive") : console.log("Affordable")


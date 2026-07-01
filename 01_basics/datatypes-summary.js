// Primitive
// 7 Types -> String, Number, Boolean, null, undefined, Symbol, BigInt

// const { captureOwnerStack } = require("react")

// const name = "randomrett"
// const score = 199
// const scoreValue = 2343.5
// const isLoggedIn = false
// let outsideTemp = null
// let userEmail;
// const id = Symbol('234')
// const anotherId = Symbol('234')

// // console.log(id===anotherId)

// const bigNumber = 23456789876545678n


// // Reference (Non-Primitive)
// // Arrays, Objects, Functions

// const heros = ["SpiderMan", "Captain America", "Iron Man"];
// let myObj = {
//     name:"Chirag",
//     age:19,
//     year:2,
// }
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof heros)

//*********************MEMORY**********************//

// Stack(Primitive) -> COPY
// Heap(Non-Primitive) -> REFERENCE

let myInsta = "chiragjain005";
let otherInsta = myInsta;
otherInsta = "kheermoon";
console.log(myInsta)
console.log(otherInsta)

let user1 = {
    name : "chirag",
    mail : "fald@gmial.c0m",
}
let user2 = user1;
user2.name = "freak"
console.log(user2.name)
console.log(user1.name)


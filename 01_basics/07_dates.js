let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getHours());
// console.log(myDate.getMonth());

// console.log(typeof myDate);  // Object
// let myCreatedDate = new Date(2026, 6, 8);
// let myCreatedDate = new Date(2026, 6, 8, 11, 44);
// let myCreatedDate = new Date("07-08-2026")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default', {
    weekday : "long",
})
console.log(newDate);
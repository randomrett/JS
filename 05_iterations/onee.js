// for

// for(let i=0;i<10;i++){
//     console.log(i);
// }


//break and continue.    // already learnt everything taught in this lect.//

// let index = 0;
// while(index<=10){
//     console.log(`value of index is ${index}`);
//     index += 2;
// }




// for of //
// ["","",""]
// [{},{},{}]
// const arr = [1,3,5,7,9];
// for(const num of arr){
//     console.log(num);
// }

// const greet = "Hello World!";
// for(const str of greet){
//     console.log(`Each char is ${str}`);
// }


// Maps  (unique values only , and it exists as key value pairs, and it remebers the order of
//          insertion of keys unlike object).

// const map = new Map();
// map.set('IN',"India");
// map.set('USA',"United States of America");
// map.set('FR',"France");
// map.set('IN',"India");
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }

// const myObj = {
//     'game1' : 'nfs',
//     'game2' : "gta"
// }
// for(const [key,value] of myObj){             /// this method is not useful in iterating in object////
//     console.log(key , ':-', value);
// }
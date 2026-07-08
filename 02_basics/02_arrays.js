const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["batman", "flash", "superman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const meetup = marvel_heros.concat(dc_heros);
// console.log(meetup);

const all_heros = [...marvel_heros, ...dc_heros];  //spread
// console.log(all_heros); 

const another_array = [1,6,3,[6,39,0],5,3,[8,4,[4,8,1,[0,7,3]]]];
const real_another_array = another_array.flat();
// console.log(real_another_array);

// console.log(Array.isArray("CHirag"));
// console.log(Array.from("CHirag"));
// console.log(Array.from({name:"Chirag"}));   //imp case (we need to specify whether the array will be made up of keys or values)

let score1 = 200;
let score2 = 300;
let score3 = 400;
let score4 = 500;

console.log(Array.of(score1,score2,score3,score4));
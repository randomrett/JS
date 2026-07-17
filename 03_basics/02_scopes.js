// // var c = 300;
// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner: ",a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Chirag";
    function two(){
        const website = "github";
        console.log(username);
    }
    // console.log(website);
    // two();
}
// one();

if(true){
    const username = "Chirag";
    if(username === "Chirag"){
        const website = "Leetcode";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

/////************** INTERESTING *****************//

addone(4)               // Correct
function addone(num){
    return num+1;
}
// addone(4)               // Correct

addTwo(4)               // WRONG (can't call function above in this type(aka expression))
const addTwo = function(value){
    return value+2;
}
// addTwo(4)               // Correct
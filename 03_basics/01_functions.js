function sayMyName() {
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("G");
}
// sayMyName()

// function addTwoNumbers(number1,number2) {
//         console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2) {
        // let ans = number1+number2;
        // return ans;
        return number1+number2;
}
const result = addTwoNumbers(4,5);
// console.log("Result:", result);


function loginUserMessage(username) {              // if we want to have a defined username 
    if(username === undefined){                    // even if user did not give input then use
        console.log("Please enter a username");    // function loginUserMessage(username = "Chirag")
        return;
    }
         return `${username} just logged in.`;
}

// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1) {
    return num1;
}
// console.log(calculateCartPrice(234,234,6544,765,1765));

const user = {
    username : "randomrett",
    price : 199
}
function handleObject(anyObject) {
    return `Username is ${anyObject.username} and  quotation is ${anyObject.price}`;
}
// console.log(handleObject(user));

const myNewArray = [3,65,234,76,13,44];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));  
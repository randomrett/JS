const user = {
    username : "Chirag",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website.`)
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "PIKLU";
// user.welcomeMessage();

// console.log(this);

///// in browser for console.log(this) , the global object is window object. ///////

// function chai(){
//     let username = "clumsy";
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "coffee";
//     console.log(this);
// }
// chai();

// const addTwo = (num1,num2) => {
//     return num1+num2;                //explicit return
// }

// const addTwo = (num1,num2) => num1+num2;    //implicit return
// const addTwo = (num1,num2) => (num1+num2);    //implicit return

// console.log(addTwo(2,3));

const joinTwo = (one,two) => ({username:one+ " " +two});
console.log(joinTwo("Hary","Puttar"));

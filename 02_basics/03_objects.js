// Object Literals --> not singleton

const mySym = Symbol("key1")

const JsUser = {
    name : "Chirag",
    "full name" : "CHIRAG JAIN",
    [mySym] : "myKey1",
    age : 19, 
    location : "Kota",
    email : "alfjaiofj@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = "kjlkjkljl@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "gunda@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS learner");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


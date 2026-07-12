// constructor --> singleton

// const tinderUser = new Object();   //// Singleton
const tinderUser = {};   //// Non-Singleton

tinderUser.id = "234abc";
tinderUser.name = "Lecrec";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "grinf@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Chirag",
            lastName : "Jain"
        }
    }   
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = {obj1 , obj2};   WRONG

// const obj3 = Object.assign(obj1,obj2);       // M-1
// const obj3 = Object.assign({},obj1,obj2);    // M-2
const obj3 = {...obj1, ...obj2};                // M-3  (MOST USED)
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "right@gmail.com"
    }
]
// console.log(users[0].email);

// console.log(Object.keys(tinderUser));    // gives an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "JSinHindi",
    Price : 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor()

const {courseInstructor : prof} = course;
console.log(prof);



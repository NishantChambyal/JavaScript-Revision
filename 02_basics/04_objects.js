// singleton
// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "nishant";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstname: "Nishant",
      lastName: "Choudhary"
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstname);

let obj1 = {1: "a", 2:"b"}
let obj2 = {3: "a", 4:"b"}
let obj3 = {5: "a", 6:"b"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}


// console.log(obj4);


const user = [
    {
        name:"nishant",
        age:24
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    }
]

// console.log(user[0].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // extract the keys from objects and store it in array
// most important {object.keys()}
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // extact the shallow coppies from object and put key value arrar in single array it means one key value pair has inside the own array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));




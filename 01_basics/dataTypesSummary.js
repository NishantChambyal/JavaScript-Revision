// # Primitive DataTypes

// 7 types of primitive 

// 1 => string
// 2 => Number
// 3 => Boolean
// 4 => Null
// 5 => Undefined
// 6 => symbol
// 7 => BigInt

const score =  100
const scoreValue =  100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const BigNumber = 4654843654946454489n

console.log(id);

console.log(id === anotherId);


// Non primitive Data-type  (refrence type)

// Array , Objects , Functions

const heros = ["Shaktiman", "naagraj", "doga"]

let myobj = {
    name: "nishant",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
}


console.log(typeof anotherId);


// Stack (primitive type) || Heap (Non Primitive type (refrence Type))

let myYoutubeName =  "NishantCode"

let anotherName = myYoutubeName;

anotherName = "shubhuCode"

console.log(anotherName);



let userOne = {
    userEmail: "Nish@gmail.com",
    upi: "userybn.com"
}



let userTwo = userOne
userTwo.userEmail = "Rajan@gmail.com"

console.log(userOne.userEmail);

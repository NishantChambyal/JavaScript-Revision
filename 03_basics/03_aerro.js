const user = {
    username:  "nishant",
    price: 999,
    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);

// function chai() {
//     let username = "nishant"
//     console.log(this.username)   // this is not work peroperly with function
// }
// chai()

// const  chai = function (){
//     let username = "hitesh"
//     console.log(this.username);  // same
     
// }
// chai()

// const chai = ()=>{
//     let username =  "nishant"
//     console.log(this );
    
// }
// chai() // {} output


// const addtwo = (num1 , num2)=>{
//     return num1 + num2
// }


// const addtwo = (num1 , num2) => num1 + num2 // implicit return
// const addtwo = (num1 , num2) => (num1 + num2)
const addtwo = (num1 , num2) => ({username: "nishant"})

 
console.log(addtwo(4  , 5));

const myArr = [2,5,3,5]

myArr.forEach(()=>{})

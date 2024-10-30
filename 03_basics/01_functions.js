function sayMyName() {
  console.log("N");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("N");
  console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1 , number2) {
//    console.log(number1 + number2);
//    console.log(number1 + number2);

// }


function addTwoNumbers(number1, number2) {
  //    let result = number1 + number2
  //    return
  return number1 + number2;
}

const result = addTwoNumbers(2, 4);

// console.log("Result:", result);




function logginUserMessage(username = "sam") {

    if (!username) {
        console.log("please enter a username");
        return
        
    } 
    return `${username} just logged in`
}


console.log(logginUserMessage("Nishant"));
// console.log(logginUserMessage("")); // just logged in
// console.log(logginUserMessage()); // undefined just logged in


// const logginMessage = logginUserMessage("Nishant")
// console.log(logginMessage);



function calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

// const user = {
//     username: "hitesh",
//     price: 199
// }

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 988
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,500,888,700]));


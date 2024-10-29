// singleton 
//Object.create

// objects 

const mysym = Symbol("key1")

const JsUser = {
    name: "nishant",
    'full name': "nishant Chambyal",
    age: 25,
    location: "shimla",
    email: "nishant@google.com",
    isloogedIn:  false,
    lastLogginDays: ['Monday', 'saturday'],
    [mysym]: "mykey"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "Hitesh@google.com"

// Object.freeze(JsUser)
JsUser.email = "shubu@gmail.com"


JsUser.greetings = function(){
    console.log("hello js user");
    
}

JsUser.greetingstwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());

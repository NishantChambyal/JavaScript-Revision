// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}


const greetings = "Hello World"

for (const greet of greetings) {
    if (greet === " ") {
        console.log(`space is found`);
        // break
        continue
    }
    console.log(`Each char is ${greet}`);
   
    
}

// Map 

const map = new Map()

map.set("IN","India")
map.set("USA","Unites States Of America")
map.set("Fr","France")
map.set("IN","India")

console.log(map);

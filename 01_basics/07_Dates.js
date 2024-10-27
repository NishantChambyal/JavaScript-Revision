// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


// let myCreatedDate = new Date(2023, 0 , 23 )
// let myCreatedDate = new Date(2023, 0 , 23 , 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreatedDate.toLocaleString());


let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(typeof MyTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// console.log(`the date is ${newDate.getDate()} and the time is ${newDate.getTime()}`);

    newDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: "timeZone"
})


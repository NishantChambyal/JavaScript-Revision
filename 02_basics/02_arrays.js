const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// marvel_heros.push(dc_heros[3][1])
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros  = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);



const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


const str = "nishant"

// console.log(Array.from(str));
// console.log(str);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("ram_ram"))  // convert string into array
console.log(Array.from({name: "Hitesh"}))  // intersting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));

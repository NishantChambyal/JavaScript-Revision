const name = "Nishant"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repocount is ${repoCount}`); // string intrepulation method

const gamaName =  new String("Nishant-hc-com")

// console.log(typeof gamaName);

console.log(gamaName[1]);
console.log(gamaName.__proto__);

console.log(gamaName.length);
console.log(gamaName.toUpperCase());
console.log(gamaName.charAt(2));
console.log(gamaName.indexOf('t'));

const newString = gamaName.substring(0,5)

console.log(newString);

const anotherString = gamaName.slice(-8,4)
console.log(anotherString);
// console.log(gamaName);

const newString1 = '    Hitesh    '

console.log(newString1);
console.log(newString1.trim());

const url  = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', "-"))
// console.log(url);

console.log(url.includes("ll"));

console.log(gamaName.split("-"));





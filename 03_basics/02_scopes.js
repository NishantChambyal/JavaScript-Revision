let a = 900

if (true) {
  let a = 100;
  const b = 200;
  var c = 400;
  // console.log("inner;", a);
  
}

// console.log(a);



//+++++++++++++++++++ scope functions (closers) +++++++++++++++++++++

function one() {
  const username = "nishant"

  function two() {
    const website = "youtube"
    console.log(username);
    
  }
  // console.log(website);
  
  two()
}

one()


if (true) {
  const username = "hitesh"

  if (username === "hitesh") {
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website);
  
}
// console.log(username);

// ++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++

console.log(addone(5))

function addone(num) {
  return num + 1
}




addTwo(5) // error because not exicute before declaration

const addTwo = function (num) {          // expression function (variable (named function))
  return num + 2
}

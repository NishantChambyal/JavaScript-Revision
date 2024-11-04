// Immediatly invoked function (IIFE)

(function chai() {
  console.log(`Db connected`);
})();

(function chaiTwo() {
  console.log(`DB connected two`);
})();

(() => {
  console.log(`Db connected three`);
})();

((name) => {
  console.log(`Db connected four ${name}`);
})("nishant");

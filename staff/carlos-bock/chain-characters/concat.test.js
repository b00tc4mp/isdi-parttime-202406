const ChainCharacters = require("./");

const string1 = "This ";
const string2 = "function ";
const string3 = "works.";
const string4 = "1";
const string5 = "2";
const string6 = "3";

const result1 = new ChainCharacters(string1).concat(string2,string3);
console.assert(result1.value === string1.concat(string2,string3),{
  result: result1,
  message: "Test 1 No pasado ",
});
console.log(result1);
const result2 = new ChainCharacters(string4).concat(string5,string6);
console.assert(result2.value === string4.concat(string5,string6),{
  result: result2,
  message: "Test 1 No pasado ",
});
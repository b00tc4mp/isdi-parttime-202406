const ChainCharacters = require("./");

const string1 = "This ";
const string2 = "function ";
const string3 = "works.";
const string4 = "1";
const string5 = "2";
const string6 = "3";

const result1 = new ChainCharacters(string1,string2,string3).concat();
console.assert(result1 === string1.concat(string2,string3),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(string4,string5,string6).concat();
console.assert(result2 === string4.concat(string5,string6),{
  result: result2,
  message: "Test 1 No pasado ",
});
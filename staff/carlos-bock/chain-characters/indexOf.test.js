
const ChainCharacters = require("./");

const string1= 'Este string tiene gatos, los gatos son guay.';
const string2= 'gatos';

const string3= 'Dogs are cool.';
const string4= 'Dogs';

const chain = new ChainCharacters('Este string tiene gatos, los gatos son guay.')
debugger
const result1 = chain.indexOf(string2);
console.assert(result1 === 'Este string tiene gatos, los gatos son guay.'.indexOf(string2),{
  result: result1,
  message: "Test 1 No pasado ",
});
debugger
const result2 = new ChainCharacters(string3).indexOf(string4);
console.assert(result2 === string3.indexOf(string4),{
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters(string1).indexOf();
console.assert(result3 === string1.indexOf(),{
  result: result2,
  message: "Test 3 No pasado ",
});
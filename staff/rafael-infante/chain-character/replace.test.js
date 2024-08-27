const ChainCharacters = require(".");

const result1 = new ChainCharacters('jnkjnkj palabra njjnk').replace('palabra','word')
console.assert(result1 === 'jnkjnkj palabra njjnk'.replace('palabra', 'word'), {result: result1, message: "Test 1 No pasado "});
if(result1 === 'jnkjnkj palabra njjnk'.replace('palabra', 'word')) console.log('Test 1 pasado');

const result2 = new ChainCharacters('jnkjnkj palabra njjnk').replace('palabra',' ')
console.assert(result2 === 'jnkjnkj palabra njjnk'.replace('palabra', ' '), {result: result2, message: "Test 2 No pasado "});
if(result2 === 'jnkjnkj palabra njjnk'.replace('palabra', ' ')) console.log('Test 2 pasado');

const result3 = new ChainCharacters('jouihuoh palabra njjnk').replace('way','reemplazo')
console.assert(result3 === 'jouihuoh palabra njjnk'.replace('way', 'reemplazo'), {result: result3, message: "Test 3 No pasado "});
if(result3 === 'jouihuoh palabra njjnk'.replace('way', 'reemplazo')) console.log('Test 3 pasado');
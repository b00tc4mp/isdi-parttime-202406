function concat(...strings) {
  let result = '';

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];

    //Añadimos un espacio entre strings (Para dejarlo más cuqui)
    if (i < strings.length -1) {
        result += ' ';
    }
  }

  return result;
}

const result1 = concat('Hello', 'World!');
console.assert(result1 === 'Hello'.concat(' World!'), {
    result: result1,
    message: 'Test 1 No pasado',
    //Si el resultado no es 'Hello World!' saltará error.
});

const result2 = concat('Hello', ' ', 'UwU', 'World!', 'true');
console.assert(result2 === 'Hello'.concat('   UwU World! true'), {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = concat('Hello', ' ', 'World!');
console.assert(result3 === 'Hello   World!', {
    result: result3,
    message: 'Test 3 No pasado'
});

const result4 = concat('Holiwi', 'Esto no debería fallar');
console.assert(result4 === 'Holiwi Esto no debería fallar', {
    result: result4,
    message: 'Test 4 No pasado'
});

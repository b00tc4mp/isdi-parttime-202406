function slice(string, index1, index2) {
  let palabra = ''
   for (let i = index1; i < index2; i++) {
    palabra += string[i]
   }
return palabra
}

const result1 = slice('holatu', 2, 4)
console.assert(result1 === 'holatu'.slice(2, 4), {result: result1, message: "Test 1 No pasado "})
function replace(string, strSearch, strRepWith) {
  let strFinal = "";
  let valorEncontrado = false;

  for (let i = 0; i < string.length; i++) {
    let match = true;
    for (let j = 0; j < strSearch.length; j++) {
      if (string[i + j] !== strSearch[j]) {
        match = false;
        break;
      }
    }
    if (!valorEncontrado && match) {
      strFinal += strRepWith;
      i += strSearch.length - 1;
      valorEncontrado = true;
    } else {
      strFinal += string[i];
    }
  }
  return strFinal;
}

const result1 = replace("Hola, mundo!", "mundo", "hijos del soul");
console.assert(result1 === "Hola, hijos del soul!", {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = replace(
  "Change My Mind: Pineapple Belongs on Pizza",
  "Change My Mind",
  "Convince Me"
);
console.assert(result2 === "Convince Me: Pineapple Belongs on Pizza", {
  result: result2,
  message: "Test 2 not passed",
});

const result3 = replace(
  "Why You Always Lying? Stop Lying!",
  "Why You Always Lying",
  "Stop Lying"
);
console.assert(result3 === "Stop Lying? Stop Lying!", {
  result: result3,
  message: "Test 3 not passed",
});

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
    i++;
  }
  return result;
}

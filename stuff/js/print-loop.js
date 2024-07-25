function printLoop(array) {
  const copyArray = [...array];

  if (copyArray.length === 0) return;

  console.log(copyArray.pop());

  printLoop(copyArray);
}

printLoop([1, 2, 3, 4, 5]);

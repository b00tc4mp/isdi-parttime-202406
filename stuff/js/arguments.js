function sum(_) {
  // arguments
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    if (typeof element !== "number") return NaN;
  }

  // Cuerpo function
  let args = 0;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    args += element;
  }

  return args;
}

console.info("Test 1. Expected output: 6");
console.debug(sum(1, 2, 3));
console.log("////////////////////////////////////");

console.info("Test 2. Expected output: 12");
console.debug(sum(5, 4, 3));
console.log("////////////////////////////////////");

console.info("Test 3. Expected output: 20");
console.debug(sum(5, 7, 8));
console.log("////////////////////////////////////");

console.info("Test 4. Expected output: NaN");
console.debug(sum("a", 7, 8));
console.log("////////////////////////////////////");

console.info("Test 4. Expected output: 30");
console.debug(sum(1, 9, 10, 10));
console.log("////////////////////////////////////");

console.info("Test 4. Expected output: 11");
console.debug(sum(1, 10));
console.log("////////////////////////////////////");

const sum2 = () => {
  {
    // arguments
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      if (typeof element !== "number") return NaN;
    }

    // Cuerpo function
    let args = 0;
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      args += element;
    }

    return args;
  }
};

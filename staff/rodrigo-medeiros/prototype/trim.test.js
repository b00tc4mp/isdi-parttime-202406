const ChainCharacters = require(".");
  const result1 = new ChainCharacters("  dosEspacios  ").trim(this)
  console.assert(result1 === "  dosEspacios  ".trim(), {result: result1, message: "Test 1 No pasado "})
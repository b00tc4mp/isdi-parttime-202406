const ChainCharacters = require(".")

const paragraph = "Angela,26 años"
const result1 = new ChainCharacters(paragraph).split(",");
console.assert(result1[0] === "Angela" && result1[1] === "26 años", {
result: result1,
message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split( ",");
console.assert(result2[0] === "Monday" && result2[1] === "Tuesday" && result2[2] === "Wednesday" && result2[3] === "Thursday", {
result: result2,
message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split(",", 2);
console.assert(result3[0] === "Monday" && result3[1] === "Tuesday", {
result: result3,
message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("1 2 3 4 5 6").split(" ", 3);
console.assert(result4[0] === "1" && result4[1] === "2" && result4[2] === "3", {
result: result4,
message: "Test 4 No pasado",
});

const result5 = new ChainCharacters("2024-07-20").split("-", 3);
console.assert(result5[0] === "2024" && result5[1] === "07" && result5[2] === "20" && result5[3] === undefined, {
result: result5,
message: "Test 5 No pasado",
});

const result6 = new ChainCharacters("2024-07-20").split(" ", 3);
console.assert(result6[0] === "2024-07-20", {
result: result6,
message: "Test 6 No pasado",
});
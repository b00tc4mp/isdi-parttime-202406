const ChainCharacters = require(".")

const paragraph = "Angela,26 años"
const result1 = new ChainCharacters(paragraph).split(",");
console.assert(result1.value[0] === "Angela" && result1.value[1] === "26 años", {
result: result1.value,
message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split( ",");
console.assert(result2.value[0] === "Monday" && result2.value[1] === "Tuesday" && result2.value[2] === "Wednesday" && result2.value[3] === "Thursday", {
result: result2.value,
message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split(",", 2);
console.assert(result3.value[0] === "Monday" && result3.value[1] === "Tuesday", {
result: result3.value,
message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("1 2 3 4 5 6").split(" ", 3);
console.assert(result4.value[0] === "1" && result4.value[1] === "2" && result4.value[2] === "3", {
result: result4.value,
message: "Test 4 No pasado",
});

const result5 = new ChainCharacters("2024-07-20").split("-", 3);
console.assert(result5.value[0] === "2024" && result5.value[1] === "07" && result5.value[2] === "20" && result5.value[3] === undefined, {
result: result5.value,
message: "Test 5 No pasado",
});

const result6 = new ChainCharacters("2024-07-20").split(" ", 3);
console.assert(result6.value[0] === "2024-07-20", {
result: result6.value,
message: "Test 6 No pasado",
});
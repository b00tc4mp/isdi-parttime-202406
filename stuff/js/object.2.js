// getter y setter

// get para obetener data
// set para definir data

const rayoMcQueen = {
  wheels: 4,
  lights: 4,
  color: "red",
  hp: 1224,
  torque: 1000,
  pistonCup: 0,
  get: function (property) {
    return this[property]; // rayoMcQueen[property]
  },
  set: function (property, value) {
    this[property] = value; // rayoMcQueen[property]
  },
};

console.log(rayoMcQueen.get("pistonCup"));
rayoMcQueen.set("pistonCup", 1);
console.log(rayoMcQueen.get("pistonCup"));

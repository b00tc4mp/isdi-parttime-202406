const rayoMcQueen = {
  wheels: 4,
  lights: 4,
  color: "red",
  hp: 1224,
  torque: 1000,
  pistonCup: 0,
  getWheels: function () {
    return this.wheels;
  },
  setWheels: function (value) {
    if (typeof value !== "number") throw new TypeError("Value is not a number");
    if (value < 0) return;

    this.wheels = value;
  },
};

console.log(rayoMcQueen.getWheels());
console.log(rayoMcQueen.setWheels("foo"));
console.log(rayoMcQueen.getWheels());

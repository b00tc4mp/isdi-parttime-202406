function Car(name, color, make, model, engine, raceNumber, wheelsWidth) {
  this.name = name;
  this.color = color;
  this.make = make;
  this.model = model;
  this.engine = engine;
  this.raceNumber = raceNumber;
  this.wheelsWidth = wheelsWidth;
}

const foo = new Car(
  "Thunder",
  "thunder blue",
  "Subaru",
  "Rayo McQueen Destroyer",
  "v12 6.0",
  "1",
  "28"
);

const bar = {
  name: "Thunder",
  color: "thunder blue",
  make: "Subaru",
  model: "Rayo McQueen Destroyer",
  engine: "v12 6.0",
  raceNumber: "1",
  wheelsWidth: "28",
};

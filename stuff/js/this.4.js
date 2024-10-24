function Bomb(time) {
  this.time = time;
}

Bomb.prototype.game = function () {
  let id = 0;
  return {
    start: function () {
      const idSetTimeout = setTimeout(() => {
        throw new Error("No esperaba nada y aún así me has decepcionado");
      }, this.time);
      id = idSetTimeout;
    }.bind(this),
    reset: function () {
      clearTimeout(id);
      const idSetTimeout = setTimeout(() => {
        throw new Error("No esperaba nada y aún así me has decepcionado");
      }, this.time);
      id = idSetTimeout;
    }.bind(this),
    stop: function () {
      clearTimeout(id);

      console.info(
        "Un charmander sin brazos ni piernas lo hubiese hecho mejor"
      );
    }.bind(this),
  };
};

const bomb = new Bomb(8000);

const game = bomb.game();

game.start();

// entre 1 segundo y 10 segundos
const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
const randomBoolean = Math.random() >= 0.5;

setTimeout(() => {
  if (randomBoolean) game.stop();
  else {
    game.reset();
  }
}, randomNumber);

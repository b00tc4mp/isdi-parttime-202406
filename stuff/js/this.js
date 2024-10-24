function Bomb(time) {
  this.time = time;
  this.exploded = false;
}

Bomb.prototype.game = function () {
  let id = 0;
  return {
    start: function () {
      const idSetTimeout = setTimeout(
        function () {
          this.exploded = true;
          throw new Error("No esperaba nada y aún así me has decepcionado");
        }.bind(this),
        this.time
      );
      id = idSetTimeout;
    }.bind(this),
    reset: function () {
      clearTimeout(id);
      const idSetTimeout = setTimeout(
        function () {
          this.exploded = true;
          throw new Error("No esperaba nada y aún así me has decepcionado");
        }.bind(this),
        this.time
      );
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

function play() {
  game.start();

  // calculo entre 1 y 10 segundos
  function _goodLuck(randomNumber, randomBoolean, callback) {
    setTimeout(
      function () {
        if (this.exploded) return;
        if (randomBoolean) game.stop();
        else {
          game.reset();
          callback();
        }
      }.bind(this),
      randomNumber
    );
  }
  const goodLuck = _goodLuck.bind(this);

  function foo() {
    let randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    let randomBoolean = Math.random() >= 0.5;
    goodLuck(randomNumber, randomBoolean, foo);
  }

  let randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  let randomBoolean = Math.random() >= 0.5;

  goodLuck(randomNumber, randomBoolean, foo);
}

play.call(bomb);

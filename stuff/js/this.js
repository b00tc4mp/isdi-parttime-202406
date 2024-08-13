function Bomb(time) {
  this.time = time;
}

Bomb.prototype.game = function () {
  // this hace referencia al objeto instanciado de Bomb
  debugger;
  return {
    start: () => {
      debugger;
    },
    reset: function () {
      debugger;
    },
  };
};

const bomb = new Bomb(8000);

const game = bomb.game();

game.start();
game.reset();

// ver cuando se bindea el this cual es el contexto lexico
// (objeto de la izquierda o desde el que se llama)
function Bomb(time) {
  this.time = time;
}

Bomb.prototype.game = function () {
  return {
    start: function () {
      console.log("start");
    }.bind(this),
    reset: function () {
      console.log("reset");
    }.bind(this),
  };
};

debugger;
const bomb = new Bomb(8000);

const game = bomb.game();

game.start();
game.reset();

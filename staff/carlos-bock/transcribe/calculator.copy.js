function Calculator() {}

Calculator.prototype.add = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) result += arguments[i];

  return result;
};

Calculator = new Calculator();

////////////////////////////////////////////////////////////////////////////////////////////////

const Calculator = {
  add: function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) result += arguments[i];

    return result;
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora() {}

Calculadora.sumar = function (a, b) {
  return a + b;
};

Calculadora.multiplicar = function (a, b) {
  return a * b;
};
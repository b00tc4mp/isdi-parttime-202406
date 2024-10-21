// si la fruta es manzana nuestro goblin se come la fruta y el holder
// si la fruta es plátano, el goblin se come solo el holder

// si el holder es bolsa, el goblin se pone malo si lo que tiene en el estómago
// es un plátano, entonces vomita todo

// si el holder es bolsa el goblin se come todo porque le enctan las cestas

function foo(fruit, holder) {
  var goblin = [null, null];

  // foo('plátano', 'bolsa')

  if (fruit === "manzana") {
    goblin = [fruit, holder];
  } else if (fruit === "plátano") {
    goblin = [null, holder];
  }

  if (holder === "bolsa") {
    goblin = [fruit, holder];

    if (goblin[0] === "plátano") {
      goblin = [null, null];
    }
  }

  console.log(goblin);
}

// foo('manzana', 'bolsa')

// foo('plátano', 'cesta')

// foo('pera', 'bolsa')

// foo('plátano', 'caja')

debugger;
foo("plátano", "bolsa");

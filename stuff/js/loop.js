function loop(array, callback) {
  const copyArray = [...array];
  const deletedPosition = copyArray.shift();

  callback(deletedPosition);

  if (copyArray.length === 0) return;

  loop(copyArray, callback);
}

var biblio = ["a", "b", "c", "d", "e"];

console.time();
for (let index = 0; index < biblio.length; index++) {
  console.log(biblio[index]);
}
console.timeEnd();

console.time();
loop(biblio, function (value) {
  console.log(value);
});
console.timeEnd();

// callback: función que se pasa como parámetro dentro de otra función
// una implementación - un objetivo a cumplir

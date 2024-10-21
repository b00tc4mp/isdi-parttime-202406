if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }

    // Aseguramos que callback es una función
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    var O = Object(this);
    var len = O.length >>> 0; // Convertimos la longitud a un entero de 32 bits sin signo
    var A = new Array(len);
    var k = 0;

    while (k < len) {
      if (k in O) {
        var kValue = O[k];
        A[k] = callback.call(thisArg, kValue, k, O);
      }
      k++;
    }

    return A;
  };
}

/* 

    En un array, cambia unos elementos por otros. Dándole nosotros la posición inicial, la final y cuál va a ser el elemento que va a 
    substituir a los demás. Este método devuelve el array modificado.
    
    Parámetros:

        1) VALUE = valor con el que se va a rellenar el array.
        2) START = primera posición que va a ser substituida. Por defecto es 0.
        3) END = última posición que va a ser substituida. Por defecto es array.length.

    */

        function fill(arr, value, start, end) {
            if (start === undefined) {
                start = 0;
            } else if (start < 0) {
                start = arr.length + start;
            }
        
            if (end === undefined) {
                end = arr.length;
            } else if (end < 0) {
                end = arr.length + end;
            }
        
            for (let i = start; i < end; i++) {
                arr[i] = value;
            }
            return arr;
        }
        
        
           function arraysEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        }
        
        const result1 = fill([0, 1, 2, 3], 0, 1, 2);
        console.assert(arraysEqual(result1, [0, 0, 2, 3]), { result: result1, message: 'Test 1 no pasado' });
                
        const result2 = fill([1, 2, 3, 4], 5, 1, 3);
        console.assert(arraysEqual(result2, [1, 5, 5, 4]), { result: result2, message: 'Test 2 no pasado' });
                
        const result3 = fill([1, 2, 3, 4], 6, -3);
        console.assert(arraysEqual(result3, [1, 6, 6, 6]), { result: result3, message: 'Test 3 no pasado' });
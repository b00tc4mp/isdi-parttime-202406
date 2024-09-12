function sort(array, callback) {
    if (!(array instanceof Array)) return undefined;

    for (let i = 1; i < array.length; i++) {
        const a = array[i -1];
        const b = array[i];
        if(
            (!!callback && callback(a,b) > 0) ||
            (!callback && String(b) < String(a))
        ) {
            const elementSaved = array[i -1];
            array[i -1 ] = array[i];
            array[i] = elementSaved;
            i = 0;
        }
    }
}

{
    const noArray = "foo";
    const result1 = sort(noArray);
    console.assert(result1 === undefined, {
        result: result1,
        message: "Test 1 no pasado",
    });

    const array2 = [1, 30, 4, 21, 100000];
    const result2 = sort(array2);
    const sortArray2= [1, 30, 4, 21, 100000];
    const sortResult2 = sortArray2.sort();
    console.assert(
        array2 === result2 &&
        array2[0] === sortResult2[0] &&
        array2[1] === sortResult2[1] &&
        array2[2] === sortResult2[2] &&
        array2[3] === sortResult2[3] &&
        array2[4] === sortResult2[4],
        {
            result: result2,
            message: "test 2 no pasado",
        }
    );

    const array3 = [1, 2, 3, 4, 5];
    const result3 = sorty(array3, (a,b) => b - a);
    const sortArray3 = [1, 2, 3, 4, 5];
    const sortResult3 = sortArray3.sort((a,b) => b - a);
    console.assert(
        array3 === result3 &&
        array3[0] === sortResult3[0] &&
        array3[1] === sortResult3[1] &&
        array3[2] === sortResult3[2] &&
        array3[3] === sortResult3[3] &&
        array3[4] === sortResult3[4],
        {
            result: result3, 
            message: "Test 3 No pasado",
        }
    );
}
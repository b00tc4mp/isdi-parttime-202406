function splice(array, _start, _deleteCount = 0) {
  if (!(array instanceof Array)) return undefined;

  const initialLength = array.length;
  const start = _start >= 0 ? _start : array.length + _start;
  const deleteCount =
    _deleteCount < array.length - start ? _deleteCount : array.length - start;

  const elementsToAdd = [];
  for (let i = 3; i < arguments.length; i++)
    elementsToAdd[elementsToAdd.length] = arguments[i];

  const elementsToCopyAfter = [];
  for (let i = deleteCount; i < array.length - start; i++)
    elementsToCopyAfter[i] = array[start + i];

  for (let i = deleteCount; i < elementsToAdd.length; i++)
    array[i + start] = elementsToAdd[i];

  for (let i = deleteCount; i < elementsToCopyAfter.length; i++)
    array[i + start + elementsToAdd.length] = elementsToCopyAfter[i];

  if (deleteCount > 0)
    array.length = initialLength - deleteCount - elementsToAdd.length;
}

{
  const noArray = "foo";
  const result1 = splice(noArray, 1, 0, 1);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = ["Jan", "March", "April", "June"];
  splice(array2, 1, 0, "Feb");
  const spliceArray2 = ["Jan", "March", "April", "June"];
  spliceArray2.splice(1, 0, "Feb");
  console.assert(
    array2[0] === spliceArray2[0] &&
      array2[1] === spliceArray2[1] &&
      array2[2] === spliceArray2[2] &&
      array2[3] === spliceArray2[3] &&
      array2[4] === spliceArray2[4],
    {
      result: array2,
      message: "Test 2 No pasado",
    }
  );
}

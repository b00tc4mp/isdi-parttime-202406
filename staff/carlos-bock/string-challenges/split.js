

//si es numero o null meter toda la frase en un array

//split 



//ejemplos 

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);

    console.log("The original string is:", stringToSplit);
    console.log("The separator is:", separator);
    console.log(
        "The array has",
        arrayOfStrings.length,
        "elements:",
        arrayOfStrings.join(" / "),
    );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);





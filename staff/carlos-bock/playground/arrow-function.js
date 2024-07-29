const sum = (...arguments) => {
    //arguments
    for (let i= 0; i< arguments.length; i++) {
        const element = arguments[i];
        if (typeof element !== "number") return NaN;
    }

    let total = 0;
    for (let i = 0; i<arguments.length; i++) {
        const element = arguments[i];
        total += element;
    }

    return total;
}

console.info("test 1. expected outpu:6");
console.debug(sum(1,2,3));
console.log("/////////////////");

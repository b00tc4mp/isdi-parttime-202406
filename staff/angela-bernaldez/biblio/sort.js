const Biblio = require("./constructor.js")

function sort(callback) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    if (typeof callback !== 'function') {
        callback = (a, b) => {
            if (String(a) < String(b)) return -1;
            if (String(a) > String(b)) return 1;
            return 0;
        };
    }

    let swapped = true
    while (swapped) { 
        swapped = false;
        for (let i = 0; i < this.length - 1; i++) {
            let a = this[i];
            let b = this[i + 1];
            
            if (callback(a, b) > 0) { 
                this[i] = b;
                this[i + 1] = a;
                swapped = true; // indicate that some elements have been swapped
            }
        }
    } // Continue until no swaps need to be made

    return this
}

module.exports = sort 
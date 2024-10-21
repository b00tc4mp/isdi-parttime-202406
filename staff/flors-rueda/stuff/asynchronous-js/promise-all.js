import { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger } from './burgerFunctions-promises.js';

Promise.all([cookBurger(), cutCheese(), cutTomato(), toastBread(), toastBread()])
    .then(([burger, cheese, tomato, topBread, bottomBread]) => {
        console.log('All ingredients ready');
        return spreadKetchup(burger).then((burgerWithKetchup) => {
            return assembleBurger(burgerWithKetchup, cheese, tomato, topBread, bottomBread);
        });
    })
    .then((assembledBurger) => {
        console.log(`\n\nBurger assembled:\n${assembledBurger}`);
    })
    .catch((error) => {
        console.error(`Error during burger making: ${error.message}`);
    });

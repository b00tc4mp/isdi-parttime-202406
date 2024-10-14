import { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger } from './burgerFunctions-promises.js';

export default cookBurger()
    .then((burger) => {
        console.log('Burger cooked.');
        return spreadKetchup(burger).then((burgerWithKetchup) => {
            console.log('Ketchup spread on burger');
            return cutCheese().then((cheese) => {
                console.log('Cheese cut');
                return cutTomato().then((tomato) => {
                    console.log('Tomato cut');
                    return toastBread().then((topBread) => {
                        console.log('Top bread toasted');
                        return toastBread().then((bottomBread) => {
                            console.log('Bottom bread toasted');
                            return assembleBurger(burgerWithKetchup, cheese, tomato, topBread, bottomBread);
                        });
                    });
                });
            });
        });
    })
    .then((assembledBurger) => {
        console.log(`\n\nBurger assembled:\n\n${assembledBurger}`);
    })
    .catch((error) => {
        console.error(`Error during burger making: ${error.message}`);
    });

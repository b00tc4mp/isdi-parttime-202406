import { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger } from './burgerFunctions-callback.js';

const makeBurger = () => {
    cookBurger((burgerError, burger) => {
        if (burgerError) {
            return console.error(`Something went wrong cooking the burger: ${burgerError}`);
        }
        console.log('Burger cooked');

        spreadKetchup(burger, (ketchupError, burgerWithKetchup) => {
            if (ketchupError) {
                return console.error(`Something went wrong spreading ketchup: ${ketchupError}`);
            }
            console.log('Ketchup spread on burger');

            cutCheese((cheeseError, cheese) => {
                if (cheeseError) {
                    return console.error(`Something went wrong cutting cheese ${cheeseError}`);
                }
                console.log('Cheese cut');

                cutTomato((tomatoError, tomato) => {
                    if (tomatoError) {
                        return console.error(`Something went wrong cutting tomato: ${tomatoError}`);
                    }
                    console.log('Tomato cut');

                    toastBread((topBreadError, topBread) => {
                        if (topBreadError) {
                            return console.error(`Something went wrong toasting top bread: ${topBreadError}`);
                        }
                        console.log('Top bread toasted');

                        toastBread((bottomBreadError, bottomBread) => {
                            if (bottomBreadError) {
                                return console.error(`Something went wrong toasting bottom bread ${bottomBreadError}`);
                            }
                            console.log('Bottom bread toasted');

                            assembleBurger(burgerWithKetchup, cheese, tomato, topBread, bottomBread, (assembleError, assembledBurger) => {
                                if (assembleError) {
                                    return console.error(`Error during burger making: ${error.message}`);
                                }
                                console.log(`\n\nBurger assembled:\n\n${assembledBurger}`);
                            });
                        });
                    });
                });
            });
        });
    });
}


makeBurger();

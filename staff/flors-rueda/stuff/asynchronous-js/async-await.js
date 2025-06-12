import { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger } from './burgerFunctions-promises.js';

const makeBurger = async () => {
    try {
        const burger = await cookBurger();
        console.log('Burger cooked');

        const burgerWithKetchup = await spreadKetchup(burger);
        console.log('Added ketchup');

        const cheese = await cutCheese();
        console.log('Cheese cut');

        const tomato = await cutTomato();
        console.log('Tomato cut');

        const topBread = await toastBread();
        console.log('Top Bread toasted');

        const bottomBread = await toastBread();
        console.log('Bottom Bread toasted');

        const assembledBurger = await assembleBurger(burgerWithKetchup, cheese, tomato, topBread, bottomBread);
        console.log(`\n\nBurger assembled:\n\n${assembledBurger}`);

    } catch (error) {
        console.error(`Error during burger making: ${error.message}`);
    }
}

makeBurger();

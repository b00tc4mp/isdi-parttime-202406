const cookBurger = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Burger');
            }, 4125);
        } catch (error) {
            reject(`Failed to cook burger: ${error.message}`);
        }
    });
}


const cutTomato = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Tomato');
            }, 2923);
        } catch (error) {
            reject(`Failed to cut tomato: ${error.message}`);
        }
    });
}

const cutCheese = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Cheese');
            }, 1842);
        } catch (error) {
            reject(`Failed to cut cheese: ${error.message}`);
        }
    });
}

const toastBread = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Bread');
            }, 3276);
        } catch (error) {
            reject(`Failed to toast bread: ${error.message}`);
        }
    });
}

const spreadKetchup = (burger) => {
    return new Promise((resolve, reject) => {
        if (burger !== 'Burger') reject(`Your ${burger} is not a valid Burger`);
        try {
            setTimeout(() => {
                resolve(`Ketchup\n${burger}`);
            }, 955);
        } catch (error) {
            reject(`Failed to cut cheese: ${error.message}`);
        }
    });
}

const assembleBurger = (burger, cheese, tomato, topBread, bottomBread) => {
    return new Promise((resolve, reject) => {
        if (burger !== `Ketchup\nBurger`) reject(`Your ${burger} is not a valid Ketchup\nBurger`);
        if (cheese !== 'Cheese') reject(`Your ${cheese} is not a valid Cheese`);
        if (tomato !== 'Tomato') reject(`Your ${tomato} is not a valid Tomato`);
        if (topBread !== 'Bread') reject(`Your ${topBread} is not a valid Bread`);
        if (bottomBread !== 'Bread') reject(`Your ${bottomBread} is not a valid Bread`);
        try {
            setTimeout(() => {
                resolve(`${topBread}\n${tomato}\n${cheese}\n${burger}\n${bottomBread}`);
            }, 955);
        } catch (error) {
            reject(`Failed to assemble burger: ${error.message}`);
        }
    });
}

export { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger }
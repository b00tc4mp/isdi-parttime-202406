const cookBurger = (callback) => {
    setTimeout(() => {
        callback(null, 'Burger');
    }, 4125);
};

const cutTomato = (callback) => {
    setTimeout(() => {
        callback(null, 'Tomato');
    }, 2923);
};

const cutCheese = (callback) => {
    setTimeout(() => {
        callback(null, 'Cheese');
    }, 1842);
};

const toastBread = (callback) => {
    setTimeout(() => {
        callback(null, 'Bread');
    }, 3276);
};

const spreadKetchup = (burger, callback) => {
    if (burger !== 'Burger') return callback(`Your ${burger} is not a valid Burger`, null);
    setTimeout(() => {
        callback(null, `Ketchup\n${burger}`);
    }, 955);
};

const assembleBurger = (burger, cheese, tomato, topBread, bottomBread, callback) => {
    if (burger !== `Ketchup\nBurger`) return callback(`Your ${burger} is not a valid Ketchup\nBurger`, null);
    if (cheese !== 'Cheese') return callback(`Your ${cheese} is not a valid Cheese`, null);
    if (tomato !== 'Tomato') return callback(`Your ${tomato} is not a valid Tomato`, null);
    if (topBread !== 'Bread') return callback(`Your ${topBread} is not a valid Bread`, null);
    if (bottomBread !== 'Bread') return callback(`Your ${bottomBread} is not a valid Bread`, null);

    setTimeout(() => {
        callback(null, `${topBread}\n${tomato}\n${cheese}\n${burger}\n${bottomBread}`);
    }, 955);
};

export { cookBurger, cutCheese, cutTomato, toastBread, spreadKetchup, assembleBurger };
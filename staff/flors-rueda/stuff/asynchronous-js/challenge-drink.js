const getCup = (callback) => {
    setTimeout(() => {
        callback(null, 'Cup');
    }, 1000);
};

const getIce = (callback) => {
    setTimeout(() => {
        callback(null, 'Ice');
    }, 1000);
};

const getDrink = (callback) => {
    setTimeout(() => {
        callback(null, 'Drink');
    }, 1000);
};

const serveDrink = (Cup, ice, drink, callback) => {
    if (Cup !== 'Cup') return callback(`Your ${Cup} is not a valid Cup`, null);
    if (ice !== 'Ice') return callback(`Your ${ice} is not a valid Ice`, null);
    if (drink !== 'Drink') return callback(`Your ${drink} is not a valid Drink`, null);

    setTimeout(() => {
        callback(null, `${ice}\n${drink}\n${Cup}`);
    }, 1000);
};


const makeDrink = () => {
    getCup((CupError, cup) => {
        if (CupError) {
            return console.error(`Something went wrong with you and your cup: ${CupError}`);
        }
        console.log('You got a cup!');

        getIce((iceError, ice) => {
            if (iceError) {
                return console.error(`Something went wrong breaking the ice: ${iceError}`);
            }
            console.log('You got some ice!');

            getDrink((drinkError, drink) => {
                if (drinkError) {
                    return console.error(`Something went wrong, your drink is dried up: ${drinkError}`);
                }
                console.log('You got your drink!');


                serveDrink(cup, ice, drink, (serveError, drinkServed) => {
                    if (serveError) {
                        return console.error(`Error during burger making: ${error.message}`);
                    }
                    console.log(`\n\nDrink Served:\n\n${drinkServed}`);
                });
            });
        });
    });
}


makeDrink();
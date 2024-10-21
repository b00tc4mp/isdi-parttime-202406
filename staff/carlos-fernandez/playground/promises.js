const getCup = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Cup");
      }, 1000);
    } catch (error) {
      reject(`Failed to get a cup: ${error.message}`);
    }
  });
};

const getIce = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Ice");
      }, 1000);
    } catch (error) {
      reject(`Failed to get an ice: ${error.message}`);
    }
  });
};

const getDrink = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Drink");
      }, 1000);
    } catch (error) {
      reject(`Failed to get a drink: ${error.message}`);
    }
  });
};

const serveDrink = (cup, ice, drink) => {
  return new Promise((resolve, reject) => {
    if (cup !== "Cup") reject(`Your ${cup} is not a valid Cup`);
    if (ice !== "Ice") reject(`Your ${ice} is not a valid Ice`);
    if (drink !== "Drink") reject(`Your ${drink} is not a valid Drink`);

    try {
      setTimeout(() => {
        resolve(`${ice}\n${drink}\n${cup}`);
      }, 1000);
    } catch (error) {
      reject(`Failed to serve a drink: ${error.message}`);
    }
  });
};

getCup()
  .then((cup) => {
    // console.log(cup);
    return getIce().then((ice) => {
      console.log(cup, ice);
      return getDrink().then((drink) => {
        console.log(drink);
        return serveDrink(cup, ice, drink).then((value) => {
          console.log(value);
        });
      });
    });
  })
  .catch((error) => {
    console.log(`Failed to get a cup: ${error.message}`);
  });

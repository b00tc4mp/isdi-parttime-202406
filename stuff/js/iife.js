debugger;

const mySecurityBox = ((data) => {
  let password = data.password;
  let secret = data.secret;

  const showSecret = (comparatePass) => {
    if (comparatePass !== password) return null;

    return secret;
  };

  const changePassword = ({ oldPassword, newPassword }) => {
    if (password !== oldPassword) return;

    password = newPassword;
  };

  return {
    showSecret: showSecret,
    changePassword: changePassword,
  };
})({
  password: "charmander",
  secret: "bolas de dragón",
});

console.log(mySecurityBox.showSecret("ContraseñaMuySegura123"));
// expected output: null

console.log(mySecurityBox.showSecret("charmander"));
// expected output: "bolas de dragón"

mySecurityBox.changePassword({
  oldPassword: "charmander",
  newPassword: "pikachu",
});

console.log(mySecurityBox.showSecret("charmander"));
// expected output: null

console.log(mySecurityBox.showSecret("pikachu"));
// expected output: "bolas de dragón"

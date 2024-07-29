const securityBox = (data) => {
    let password = data.password;
    let secret = data.secret;

const showSecret = (comparePass) => {
    if (comparePass !== password) return null;

    return secret;
};

const changePassword = ({oldPassword, newPassword}) => {
    if (password !== oldPassword) return;

    password = newPassword;
};
 
return {
    showSecret: showSecret,
    changePassword: changePassword,
};
};

debugger;

const mySecurityBox = securityBox({
    password: "vegeta",
    secret: "there is no secret",
});

console.log(mySecurityBox.showSecret("strongpassword123"));
//expected output: null

console.log(mySecurityBox.showSecret("supersonic"));
//expected output:"there is no secret"

mySecurityBox.changePassword({
    oldPassword: "vegeta",
    newPassword: "goku",
});

console.log(mySecurityBox.showSecret("vegeta"));
//exptected output: null

console.log(mySecurityBox.showSecret("goku"));
//exptect output: "there is no secret"

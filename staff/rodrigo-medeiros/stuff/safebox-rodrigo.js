// fazer uma funcion do tipo closure e determinar um password e um segredo a ser revelado
// fazer uma função do tipo flexa
// retornar null se o parametro de entrada for diferente do password e se o parametro de entrada for o password revelar o segredo

const baulDeOro = (data) => {
    let password = data.password
    let secreto = data.secreto

        const mostrarSecreto = (comparePassword) => {
            if (comparePassword !== password) return console.log("Contraseña incorrecta");
                return secreto
        }
    const changePassword = ({oldPassword, newPassword}) => {
        if (oldPassword !== password) return console.log("Contraseña incorrecta 1");
            password = newPassword
    }
    return {
        mostrarSecreto: mostrarSecreto,
        changePassword: changePassword,
        
    };
    };
debugger

const miBaulDeOro = baulDeOro({
    password: "Froddo",
    secreto: "Sauron Ring",  
});

// verificar resultados
console.log(miBaulDeOro.mostrarSecreto("gandalf"));
//expected output "Contraseña incorrecta"
console.log(miBaulDeOro.mostrarSecreto("Froddo"));
//expected output "Sauron Ring"
miBaulDeOro.changePassword({
    oldPassword: "Froddo",
    newPassword: "Mordor",
});
//expected change in password
console.log(miBaulDeOro.mostrarSecreto("Mordor"));
//expected output is "Sauron Ring"
console.log(miBaulDeOro.changePassword({
    oldPassword: "Mordor",
    newPassword: "Bilbo",
}));
console.log(miBaulDeOro.mostrarSecreto("Froddo"));
//expected output "Contraseña incorrecta"
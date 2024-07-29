// Para ver el secret tenéis que usar la password. 
// La password debe ser definida por el usuario al crear su securit box
const securityBox = (userPass) => {
    let password = userPass;
    let secret = "secret";
    
    const showSecret = (comparatePass) => {
    
      if(comparatePass === password){
          return secret;
      }
    };
  
    return showSecret;
  };
debugger
  const mySecurityBox = securityBox('ContraseñaMuySegura123');

    console.log(mySecurityBox('ContraseñaMuySegura123'));
    
    console.log(mySecurityBox('PanConMantequilla'));
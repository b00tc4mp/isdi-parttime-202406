// Função para remover espaços do início e do fim da string
//Encontrar o índice do primeiro caractere não espaço em branco
//// Encontrar o índice do último caractere não espaço em branco

function trim(string) {
    
    let principio = 0;
    let final = string.length-1;
    let result = ""
  
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            principio++; 
            
        } else {
          
                break};
    }

    for (let i = string.length -1; i >= 0; i--) {
        if(string[i] === " "){
            final--;
            
        } else {
            break};
    }

    for (let i = principio; i <= final; i++){
        result += string[i]; 
    }

    return result;

}


const result1 = trim('  El perro negro');
console.assert(result1 === '    El perro negro'.trim() , {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = trim('   Palabra   ');
console.assert(result2 === '   Palabra   '.trim() , {
    result: result2,
    message: 'Test 2 No pasado'
});
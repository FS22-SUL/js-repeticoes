function somaDosNaturais(){
    console.log("logica da soma");
    
}

// somaDosNaturais();

function imprimirFibonacci(){
    let ate = 20;
    let fibo = [];

    for(let i = 0; i <= ate; i++){
        if(i < 2){
            fibo.push(i)
        }else{
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
    }
    console.log(fibo);
    
}


// imprimirFibonacci();

function imprimirPar(){
    let numero = 20

    for(let i = 0; i <= numero; i++){

        if (i % 2 == 0) {
            console.log(i);
            
        }

    }
    
}

// imprimirPar()
function verificarPalindromo() {
    

    let palavra = "paralelepipedo"
    let palavra2 = ""

    for (let i = palavra.length; i > 0; i--) {
       let letra = palavra[i-1]
       
        palavra2 += letra

        
    }
    
    
    if (palavra == palavra2) {
        console.log(`essa palavra é um palindromo`);
        
    } else {
        console.log(`essa palavra não é um palindromo`);
    }
}

verificarPalindromo()
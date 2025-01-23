function somaDosNaturais() {
    // let limite = Number(prompt("Digite um numero"));
    let limite = 10;
    let resultado = 0;
    for (let i = 1; i < limite; i++) {
        resultado += i;
    }
    console.log(resultado);
}

// somaDosNaturais();

function imprimirFibonacci(ate) {
    let fibo = [];

    for (let i = 0; i < ate; i++) {
        if (i < 2) {
            fibo.push(i)
        } else {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
    }
    console.log("Fibonacci:", fibo);
}
// imprimirFibonacci(5);
// imprimirFibonacci(7);
// imprimirFibonacci(10);

function imprimirPar(numero = 0) {
    let pares = []
    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    console.log("Pares: ", pares);

}
// imprimirPar()
// imprimirPar(20)

function verificarPalindromo(palavra) {
    let palavra2 = ""

    for (let i = palavra.length; i > 0; i--) {
        let letra = palavra[i - 1]
        palavra2 += letra
    }
    if (palavra == palavra2) {
        return true;
    } else {
        return false;
    }
}
// console.log(`${verificarPalindromo("Ovo") ? "essa palavra é um palindromo" : "essa palavra não é um palindromo"}`);


// verificarPalindromo()

function comprimento(params){
    let contador = 0;
    while(params[contador] != undefined){
        contador++
    }
    return contador;
}

// console.log(`O nome Adriana tem: ${comprimento("Adriana")} letras`);
// console.log(`O nome Nagila tem: ${comprimento("Nagila")} letras`);
// console.log(`O nome Gleidson tem: ${comprimento("Gleidson")} letras`);
// console.log(`O nome Maeva tem: ${comprimento("Maeva")} letras`);
 
// console.log(`${comprimento([1,2,3,4])} é o total de itens do array [1,2,3,4]`);

function inserirNoFinalDoArray(array, novoElemento){
    let contador = 0;
    while(array[contador] != undefined){
        contador++;
    }
    array[contador] = novoElemento;
    return array;
}

// console.log(inserirNoFinalDoArray([1], 2));
// console.log(inserirNoFinalDoArray([], 2));

// function removerNoFinalDoArray(array){
//     let arrayPoped = [];
//     for(let i = 0; i < comprimento(array) - 1; i++){
//         inserirNoFinalDoArray(arrayPoped, array[i])
//     }
//     return arrayPoped;
// }

Array.prototype.removerNoFinalDoArray = function(){
    let arrayPoped = [];
    for(let i = 0; i < comprimento(this) - 1; i++){
        inserirNoFinalDoArray(arrayPoped, this[i])
    }
    return arrayPoped;
}


// console.log(removerNoFinalDoArray([1,2]));
// console.log(removerNoFinalDoArray([1,2,4,5,67]));
// console.log([1,2].removerNoFinalDoArray());

/**
 * Essa função vai fazer uma recursividade
 * @param {number} num 
 * @param {string} nome 
 * @returns number
 */
function recursiva(num){
    if(num != 0){
        console.log(num);
        return recursiva(num - 1);
    }
    return num;
}

console.log(recursiva(5))

// console.log("Ola mundo".slice(0, 2));
// console.log("Ola mundo".slice(0, 3));
// console.log("Ola mundo".substring(0, 3));
// console.log("Ola mundo".substring(4, -1));
// console.log("Ola mundo".substr(4,5));
// console.log("Ola mundo".substr(0,3));
// console.log("Ola mundo".toUpperCase());
// console.log("Ola mundo".toLowerCase());
console.log("    Ola mundo     ".trim());
console.log("    Ola mundo     ".trimEnd());
console.log("    Ola mundo     ".trimStart());

[1,2].map()

 

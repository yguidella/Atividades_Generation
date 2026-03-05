import leia from 'readline-sync';

let numero 
let encontrado = false;
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");


for (let i = 0; i < vetor.length; i++) {

    if (vetor[i] === numero) {
        console.log("O numero", numero, "esta localizado na posicao:", i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("O numero", numero, "nao foi encontrado!");
}
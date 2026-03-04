const leia = require('readline-sync');

let n1 = leia.questionFloat("Digite o Numero 1: ");
let n2 = leia.questionFloat("Digite o Numero 2: ");
let n3 = leia.questionFloat("Digite o Numero 3: ");
let n4 = leia.questionFloat("Digite o Numero 4: ");

let dif = (n1 * n2) - (n3 * n4);

console.log("A Diferença entre os produtos é: " + dif);